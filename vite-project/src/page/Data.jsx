import React from "react";
import { Link, useLocation } from "react-router-dom";

function Data() {
  const location = useLocation();

  const menu = [
    { to: "/", label: "หน้าหลัก" },
    { to: "/data", label: "เกม" },
    { to: "/about", label: "โปรโมชั่น" },
  ];

  return (
    <div
      style={{
        background: "#000",
        minHeight: "100vh",
        width: "100vw",
        margin: 0,
        padding: 0,
        position: "fixed",
        top: 0,
        left: 0,
        overflowX: "hidden",
      }}
    >
      {/* Navigation Bar */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px 40px",
          background: "#000",
          position: "relative",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "absolute",
            left: "40px",
          }}
        >
          <span
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: "2rem",
              letterSpacing: "2px",
              fontFamily: "Arial, sans-serif",
            }}
          >
            GAME
            <span style={{ color: "#c6ff00" }}>ON</span>
          </span>
        </div>
        {/* Search */}
        <div
          style={{
            flex: "0 1 500px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <input
            type="text"
            placeholder="ค้นหา"
            style={{
              width: "350px",
              padding: "8px 16px",
              borderRadius: "6px",
              border: "none",
              background: "#333",
              color: "#fff",
              fontSize: "1rem",
              marginRight: "8px",
            }}
          />
          <select
            style={{
              background: "#333",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              padding: "8px",
              fontSize: "1rem",
            }}
          >
            <option>▼</option>
          </select>
        </div>
        {/* Right Menu */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            position: "absolute",
            right: "40px",
          }}
        >
          <span style={{ color: "#fff", fontSize: "1rem" }}>ไทย ▼</span>
          <span
            style={{ color: "#fff", fontSize: "1.5rem", cursor: "pointer" }}
          >
            🛒
          </span>
          <span style={{ color: "#fff", fontSize: "1rem", cursor: "pointer" }}>
            ลงทะเบียน
          </span>
          <span
            style={{ color: "#c6ff00", fontSize: "1rem", cursor: "pointer" }}
          >
            เข้าสู่ระบบ
          </span>
        </div>
      </nav>
      {/* Main Menu Bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#000",
          borderBottom: "1px solid #222",
          position: "relative",
        }}
      >
        {menu.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "1.1rem",
              padding: "18px 36px 10px 36px",
              position: "relative",
              display: "inline-block",
              textAlign: "center",
              fontFamily: "inherit",
              ...(location.pathname === item.to && {
                color: "#fff",
              }),
            }}
          >
            {item.label}
            {location.pathname === item.to && (
              <span
                style={{
                  display: "block",
                  height: "3px",
                  background: "#c6ff00",
                  borderRadius: "2px",
                  position: "absolute",
                  left: "20%",
                  right: "20%",
                  bottom: "0",
                }}
              />
            )}
          </Link>
        ))}
      </div>
      {/* Content */}
      <div style={{ textAlign: "center", marginTop: "50px", color: "#fff" }}>
        {/* เพิ่มเนื้อหาของหน้า Data ที่นี่ */}
        <h2>Data Page</h2>
      </div>
    </div>
  );
}

export default Data;
