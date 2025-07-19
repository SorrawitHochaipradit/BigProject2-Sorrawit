import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function About() {
  const location = useLocation();
  const [uid, setUid] = useState("");
  const [truemoney, setTruemoney] = useState("");

  const handleSubmit = () => {
    if (!uid || !truemoney) {
      alert("กรุณากรอก UID และรหัสบัตร TrueMoney ให้ครบถ้วน");
      return;
    }

    alert("เติมเงินสำเร็จ!");
    window.location.reload();
  };

  const menu = [
    { to: "/", label: "หน้าหลัก" },
    { to: "/data", label: "แนะนำ" },
    { to: "/about", label: "เติมเกม" },
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
        color: "#fff",
      }}
    >
      {/* Navigation Bar */}
      <nav
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 40px",    // ปรับเป็น padding เหมือนกันทั้งบนล่าง
    height: "60px",          // กำหนดความสูงให้คงที่
    background: "#000",
    position: "relative",
  }}
>
  {/* Logo */}
  <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
    <span
      style={{
        color: "#fff",
        fontWeight: "bold",
        fontSize: "2rem",
        letterSpacing: "2px",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1",   // ลดช่องว่างของข้อความให้แน่นขึ้น
      }}
    >
      term<span style={{ color: "#c6ff00" }}>game</span>
    </span>
  </div>

  {/* Right Menu */}
 
</nav>


      {/* Main Menu Bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#000",
          borderBottom: "1px solid #222",
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
      <div
        style={{
          maxWidth: "500px",
          margin: "60px auto",
          padding: "20px",
          textAlign: "center",
          background: "#111",
          borderRadius: "12px",
        }}
      >
        {/* Banner */}
        <img
          src="https://static0.givemesportimages.com/wordpress/wp-content/uploads/2025/03/epl_-fifa-mobile.jpg"
          alt="Top Up Banner"
          style={{
            width: "100%",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        />

        {/* Description */}
        <p style={{ fontSize: "1.1rem", marginBottom: "24px" }}>
          กรุณากรอก UID และรหัสบัตร TrueMoney ของคุณเพื่อเติมเงินเกม
        </p>

        {/* UID */}
        <input
          type="text"
          placeholder="กรอก UID"
          value={uid}
          onChange={(e) => setUid(e.target.value)}
          style={{
            width: "75%",
            padding: "12px",
            marginBottom: "16px",
            borderRadius: "6px",
            border: "1px solid #555",
            background: "#222",
            color: "#fff",
            fontSize: "1rem",
          }}
        />

        {/* TrueMoney Code */}
        <input
          type="text"
          placeholder="กรอกรหัสบัตร TrueMoney"
          value={truemoney}
          onChange={(e) => setTruemoney(e.target.value)}
          style={{
            width: "75%",
            padding: "12px",
            marginBottom: "24px",
            borderRadius: "6px",
            border: "1px solid #555",
            background: "#222",
            color: "#fff",
            fontSize: "1rem",
          }}
        />

        {/* Submit */}
        <button
          onClick={handleSubmit}
          style={{
            width: "100%",
            padding: "14px",
            fontSize: "1rem",
            backgroundColor: "#c6ff00",
            color: "#000",
            fontWeight: "bold",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          เติมเงิน
        </button>
      </div>
    </div>
  );
}

export default About;
