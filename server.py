from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlparse
import json
import mimetypes
import sqlite3
import sys


ROOT = Path(__file__).resolve().parent
STATIC_DIR = ROOT / "static"
DB_DIR = ROOT / "data"
DB_PATH = DB_DIR / "hcm.sqlite3"


def connect_db():
    DB_DIR.mkdir(exist_ok=True)
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA foreign_keys = ON")
    return conn


def to_dict(row):
    return dict(row) if row is not None else None


def rating_for_score(score):
    if score >= 4.6:
        return "卓越"
    if score >= 4.0:
        return "优秀"
    if score >= 3.2:
        return "达标"
    if score >= 2.4:
        return "待提升"
    return "不达标"


def init_db():
    with connect_db() as conn:
        conn.executescript(
            """
            CREATE TABLE IF NOT EXISTS employees (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                employee_no TEXT NOT NULL UNIQUE,
                name TEXT NOT NULL,
                department TEXT NOT NULL,
                position TEXT NOT NULL,
                manager TEXT,
                status TEXT NOT NULL DEFAULT '在职',
                hire_date TEXT,
                location TEXT,
                employment_type TEXT NOT NULL DEFAULT '全职',
                email TEXT,
                phone TEXT,
                created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS performance_cycles (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                start_date TEXT NOT NULL,
                end_date TEXT NOT NULL,
                status TEXT NOT NULL DEFAULT '进行中',
                created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS performance_reviews (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                employee_id INTEGER NOT NULL,
                cycle_id INTEGER NOT NULL,
                reviewer TEXT NOT NULL,
                goals_score REAL NOT NULL DEFAULT 3,
                competency_score REAL NOT NULL DEFAULT 3,
                values_score REAL NOT NULL DEFAULT 3,
                overall_score REAL NOT NULL DEFAULT 3,
                rating TEXT NOT NULL DEFAULT '达标',
                status TEXT NOT NULL DEFAULT '草稿',
                comments TEXT,
                created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (employee_id) REFERENCES employees(id) ON DELETE CASCADE,
                FOREIGN KEY (cycle_id) REFERENCES performance_cycles(id) ON DELETE CASCADE,
                UNIQUE(employee_id, cycle_id)
            );
            """
        )
        employee_count = conn.execute("SELECT COUNT(*) FROM employees").fetchone()[0]
        if employee_count == 0:
            conn.executemany(
                """
                INSERT INTO employees (
                    employee_no, name, department, position, manager, status,
                    hire_date, location, employment_type, email, phone
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                """,
                [
                    ("HCM001", "林一航", "销售中心", "大客户经理", "周敏", "在职", "2022-03-14", "上海", "全职", "lin.yihang@example.com", "13800010001"),
                    ("HCM002", "陈若溪", "产品部", "产品经理", "顾辰", "在职", "2021-09-01", "杭州", "全职", "chen.ruoxi@example.com", "13800010002"),
                    ("HCM003", "王嘉宁", "研发部", "后端工程师", "许川", "在职", "2023-01-09", "深圳", "全职", "wang.jianing@example.com", "13800010003"),
                    ("HCM004", "赵明远", "人力资源部", "HRBP", "沈澜", "试用期", "2026-04-20", "北京", "全职", "zhao.mingyuan@example.com", "13800010004"),
                    ("HCM005", "刘思妍", "财务部", "财务分析师", "唐越", "在职", "2020-11-16", "上海", "全职", "liu.siyan@example.com", "13800010005"),
                ],
            )
            conn.executemany(
                """
                INSERT INTO performance_cycles (name, start_date, end_date, status)
                VALUES (?, ?, ?, ?)
                """,
                [
                    ("2026 上半年绩效", "2026-01-01", "2026-06-30", "进行中"),
                    ("2025 年度绩效", "2025-01-01", "2025-12-31", "已归档"),
                ],
            )
            conn.executemany(
                """
                INSERT INTO performance_reviews (
                    employee_id, cycle_id, reviewer, goals_score, competency_score,
                    values_score, overall_score, rating, status, comments
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                """,
                [
                    (1, 1, "周敏", 4.4, 4.0, 4.2, 4.2, "优秀", "已提交", "重点客户推进稳定，建议补强跨区域协同。"),
                    (2, 1, "顾辰", 4.1, 4.5, 4.3, 4.3, "优秀", "已提交", "需求洞察质量高，版本节奏把控良好。"),
                    (3, 1, "许川", 3.8, 3.6, 4.0, 3.8, "达标", "已提交", "交付可靠，下一阶段关注系统设计表达。"),
                ],
            )


class HcmHandler(BaseHTTPRequestHandler):
    server_version = "MiniHCM/1.0"

    def do_GET(self):
        parsed = urlparse(self.path)
        if parsed.path.startswith("/api/"):
            self.handle_api("GET", parsed)
            return
        self.serve_static(parsed.path)

    def do_POST(self):
        self.handle_api("POST", urlparse(self.path))

    def do_PUT(self):
        self.handle_api("PUT", urlparse(self.path))

    def do_DELETE(self):
        self.handle_api("DELETE", urlparse(self.path))

    def log_message(self, fmt, *args):
        sys.stdout.write("%s - %s\n" % (self.address_string(), fmt % args))

    def send_json(self, payload, status=200):
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def read_json(self):
        length = int(self.headers.get("Content-Length") or 0)
        if length == 0:
            return {}
        raw = self.rfile.read(length).decode("utf-8")
        return json.loads(raw)

    def serve_static(self, request_path):
        target = STATIC_DIR / "index.html" if request_path in ("", "/") else STATIC_DIR / request_path.lstrip("/")
        try:
            resolved = target.resolve()
            if not str(resolved).startswith(str(STATIC_DIR.resolve())):
                self.send_error(403)
                return
            if not resolved.exists() or not resolved.is_file():
                resolved = STATIC_DIR / "index.html"
            content = resolved.read_bytes()
            content_type = mimetypes.guess_type(resolved.name)[0] or "application/octet-stream"
            self.send_response(200)
            self.send_header("Content-Type", content_type)
            self.send_header("Content-Length", str(len(content)))
            self.end_headers()
            self.wfile.write(content)
        except OSError:
            self.send_error(404)

    def handle_api(self, method, parsed):
        try:
            parts = [part for part in parsed.path.split("/") if part]
            query = parse_qs(parsed.query)
            if parts == ["api", "summary"] and method == "GET":
                self.get_summary()
            elif parts == ["api", "employees"] and method == "GET":
                self.list_employees(query)
            elif parts == ["api", "employees"] and method == "POST":
                self.create_employee()
            elif len(parts) == 3 and parts[:2] == ["api", "employees"] and method == "GET":
                self.get_employee(int(parts[2]))
            elif len(parts) == 3 and parts[:2] == ["api", "employees"] and method == "PUT":
                self.update_employee(int(parts[2]))
            elif len(parts) == 3 and parts[:2] == ["api", "employees"] and method == "DELETE":
                self.delete_employee(int(parts[2]))
            elif parts == ["api", "cycles"] and method == "GET":
                self.list_cycles()
            elif parts == ["api", "cycles"] and method == "POST":
                self.create_cycle()
            elif parts == ["api", "reviews"] and method == "GET":
                self.list_reviews(query)
            elif parts == ["api", "reviews"] and method == "POST":
                self.upsert_review()
            elif len(parts) == 3 and parts[:2] == ["api", "reviews"] and method == "PUT":
                self.update_review(int(parts[2]))
            else:
                self.send_json({"error": "未找到接口"}, 404)
        except sqlite3.IntegrityError as exc:
            self.send_json({"error": "数据冲突或必填字段缺失", "detail": str(exc)}, 409)
        except (ValueError, json.JSONDecodeError):
            self.send_json({"error": "请求参数格式不正确"}, 400)
        except Exception as exc:
            self.send_json({"error": "服务器处理失败", "detail": str(exc)}, 500)

    def get_summary(self):
        with connect_db() as conn:
            active = conn.execute("SELECT COUNT(*) FROM employees WHERE status != '离职'").fetchone()[0]
            probation = conn.execute("SELECT COUNT(*) FROM employees WHERE status = '试用期'").fetchone()[0]
            reviews = conn.execute("SELECT COUNT(*) FROM performance_reviews").fetchone()[0]
            avg_score = conn.execute("SELECT ROUND(AVG(overall_score), 2) FROM performance_reviews").fetchone()[0] or 0
            departments = [
                to_dict(row)
                for row in conn.execute(
                    "SELECT department, COUNT(*) AS count FROM employees GROUP BY department ORDER BY count DESC, department"
                )
            ]
        self.send_json({"activeEmployees": active, "probation": probation, "reviews": reviews, "avgScore": avg_score, "departments": departments})

    def list_employees(self, query):
        clauses = []
        params = []
        q = (query.get("q", [""])[0] or "").strip()
        status = (query.get("status", [""])[0] or "").strip()
        department = (query.get("department", [""])[0] or "").strip()
        if q:
            clauses.append("(name LIKE ? OR employee_no LIKE ? OR position LIKE ? OR email LIKE ?)")
            params.extend([f"%{q}%"] * 4)
        if status:
            clauses.append("status = ?")
            params.append(status)
        if department:
            clauses.append("department = ?")
            params.append(department)
        where = "WHERE " + " AND ".join(clauses) if clauses else ""
        with connect_db() as conn:
            rows = conn.execute(
                f"""
                SELECT e.*,
                       ROUND(AVG(r.overall_score), 2) AS avg_score,
                       COUNT(r.id) AS review_count
                FROM employees e
                LEFT JOIN performance_reviews r ON r.employee_id = e.id
                {where}
                GROUP BY e.id
                ORDER BY e.department, e.employee_no
                """,
                params,
            ).fetchall()
            departments = [row[0] for row in conn.execute("SELECT DISTINCT department FROM employees ORDER BY department")]
        self.send_json({"employees": [to_dict(row) for row in rows], "departments": departments})

    def get_employee(self, employee_id):
        with connect_db() as conn:
            employee = to_dict(conn.execute("SELECT * FROM employees WHERE id = ?", (employee_id,)).fetchone())
            if not employee:
                self.send_json({"error": "员工不存在"}, 404)
                return
            reviews = [
                to_dict(row)
                for row in conn.execute(
                    """
                    SELECT r.*, c.name AS cycle_name
                    FROM performance_reviews r
                    JOIN performance_cycles c ON c.id = r.cycle_id
                    WHERE r.employee_id = ?
                    ORDER BY c.start_date DESC
                    """,
                    (employee_id,),
                )
            ]
        self.send_json({"employee": employee, "reviews": reviews})

    def create_employee(self):
        data = self.read_json()
        required = ["employee_no", "name", "department", "position"]
        if any(not str(data.get(field, "")).strip() for field in required):
            self.send_json({"error": "员工编号、姓名、部门、岗位为必填"}, 400)
            return
        with connect_db() as conn:
            cursor = conn.execute(
                """
                INSERT INTO employees (
                    employee_no, name, department, position, manager, status,
                    hire_date, location, employment_type, email, phone
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                """,
                self.employee_values(data),
            )
        self.send_json({"id": cursor.lastrowid}, 201)

    def update_employee(self, employee_id):
        data = self.read_json()
        with connect_db() as conn:
            conn.execute(
                """
                UPDATE employees
                SET employee_no = ?, name = ?, department = ?, position = ?, manager = ?,
                    status = ?, hire_date = ?, location = ?, employment_type = ?,
                    email = ?, phone = ?, updated_at = CURRENT_TIMESTAMP
                WHERE id = ?
                """,
                (*self.employee_values(data), employee_id),
            )
        self.send_json({"ok": True})

    def delete_employee(self, employee_id):
        with connect_db() as conn:
            conn.execute("UPDATE employees SET status = '离职', updated_at = CURRENT_TIMESTAMP WHERE id = ?", (employee_id,))
        self.send_json({"ok": True})

    def employee_values(self, data):
        return (
            data.get("employee_no", "").strip(),
            data.get("name", "").strip(),
            data.get("department", "").strip(),
            data.get("position", "").strip(),
            data.get("manager", "").strip(),
            data.get("status", "在职").strip() or "在职",
            data.get("hire_date", "").strip(),
            data.get("location", "").strip(),
            data.get("employment_type", "全职").strip() or "全职",
            data.get("email", "").strip(),
            data.get("phone", "").strip(),
        )

    def list_cycles(self):
        with connect_db() as conn:
            cycles = [to_dict(row) for row in conn.execute("SELECT * FROM performance_cycles ORDER BY start_date DESC")]
        self.send_json({"cycles": cycles})

    def create_cycle(self):
        data = self.read_json()
        with connect_db() as conn:
            cursor = conn.execute(
                "INSERT INTO performance_cycles (name, start_date, end_date, status) VALUES (?, ?, ?, ?)",
                (
                    data.get("name", "").strip(),
                    data.get("start_date", "").strip(),
                    data.get("end_date", "").strip(),
                    data.get("status", "进行中").strip() or "进行中",
                ),
            )
        self.send_json({"id": cursor.lastrowid}, 201)

    def list_reviews(self, query):
        clauses = []
        params = []
        if query.get("employee_id", [""])[0]:
            clauses.append("r.employee_id = ?")
            params.append(query["employee_id"][0])
        if query.get("cycle_id", [""])[0]:
            clauses.append("r.cycle_id = ?")
            params.append(query["cycle_id"][0])
        where = "WHERE " + " AND ".join(clauses) if clauses else ""
        with connect_db() as conn:
            rows = conn.execute(
                f"""
                SELECT r.*, e.name AS employee_name, e.employee_no, e.department, e.position,
                       c.name AS cycle_name
                FROM performance_reviews r
                JOIN employees e ON e.id = r.employee_id
                JOIN performance_cycles c ON c.id = r.cycle_id
                {where}
                ORDER BY c.start_date DESC, r.overall_score DESC
                """,
                params,
            ).fetchall()
        self.send_json({"reviews": [to_dict(row) for row in rows]})

    def upsert_review(self):
        data = self.read_json()
        score = round(
            (float(data.get("goals_score", 3)) * 0.45)
            + (float(data.get("competency_score", 3)) * 0.35)
            + (float(data.get("values_score", 3)) * 0.20),
            2,
        )
        values = (
            int(data["employee_id"]),
            int(data["cycle_id"]),
            data.get("reviewer", "").strip(),
            float(data.get("goals_score", 3)),
            float(data.get("competency_score", 3)),
            float(data.get("values_score", 3)),
            score,
            rating_for_score(score),
            data.get("status", "草稿").strip() or "草稿",
            data.get("comments", "").strip(),
        )
        with connect_db() as conn:
            cursor = conn.execute(
                """
                INSERT INTO performance_reviews (
                    employee_id, cycle_id, reviewer, goals_score, competency_score,
                    values_score, overall_score, rating, status, comments
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                ON CONFLICT(employee_id, cycle_id) DO UPDATE SET
                    reviewer = excluded.reviewer,
                    goals_score = excluded.goals_score,
                    competency_score = excluded.competency_score,
                    values_score = excluded.values_score,
                    overall_score = excluded.overall_score,
                    rating = excluded.rating,
                    status = excluded.status,
                    comments = excluded.comments,
                    updated_at = CURRENT_TIMESTAMP
                """,
                values,
            )
        self.send_json({"id": cursor.lastrowid, "overall_score": score, "rating": rating_for_score(score)}, 201)

    def update_review(self, review_id):
        data = self.read_json()
        score = round(
            (float(data.get("goals_score", 3)) * 0.45)
            + (float(data.get("competency_score", 3)) * 0.35)
            + (float(data.get("values_score", 3)) * 0.20),
            2,
        )
        with connect_db() as conn:
            conn.execute(
                """
                UPDATE performance_reviews
                SET reviewer = ?, goals_score = ?, competency_score = ?, values_score = ?,
                    overall_score = ?, rating = ?, status = ?, comments = ?,
                    updated_at = CURRENT_TIMESTAMP
                WHERE id = ?
                """,
                (
                    data.get("reviewer", "").strip(),
                    float(data.get("goals_score", 3)),
                    float(data.get("competency_score", 3)),
                    float(data.get("values_score", 3)),
                    score,
                    rating_for_score(score),
                    data.get("status", "草稿").strip() or "草稿",
                    data.get("comments", "").strip(),
                    review_id,
                ),
            )
        self.send_json({"ok": True, "overall_score": score, "rating": rating_for_score(score)})


if __name__ == "__main__":
    init_db()
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    server = ThreadingHTTPServer(("127.0.0.1", port), HcmHandler)
    print(f"Mini HCM is running at http://127.0.0.1:{port}")
    server.serve_forever()
