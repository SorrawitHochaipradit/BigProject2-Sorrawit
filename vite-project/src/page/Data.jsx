import React from "react";
import { Link, useLocation } from "react-router-dom";

function Data() {
  const location = useLocation();

  const menu = [
    { to: "/", label: "หน้าหลัก" },
    { to: "/data", label: "เกม" },
    { to: "/about", label: "โปรโมชั่น" },
  ];

  // ข้อมูลผู้เล่น 50 แถว
  const players = [
  {
    name: "Lionel Messi",
    position: "RW",
    ovr: 93,
    img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Lionel_Messi_20180626.jpg",
    stats: {
      PAC: 85,
      SHO: 92,
      PAS: 91,
      DRI: 95,
      DEF: 38,
      PHY: 65,
    },
  },
  {
    name: "Cristiano Ronaldo",
    position: "ST",
    ovr: 91,
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
    stats: {
      PAC: 87,
      SHO: 93,
      PAS: 82,
      DRI: 89,
      DEF: 35,
      PHY: 77,
    },
  },
  // 👉 เพิ่มอีก 49 คนในรูปแบบเดียวกัน
];


  return (
    <div
      style={{
        background: "#000",
        minHeight: "100vh",
        width: "100vw",
        margin: 0,
        padding: 0,
        overflowY: "auto",
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
          <span style={{ color: "#fff", fontSize: "1.5rem", cursor: "pointer" }}>🛒</span>
          <span style={{ color: "#fff", fontSize: "1rem", cursor: "pointer" }}>ลงทะเบียน</span>
          <span style={{ color: "#c6ff00", fontSize: "1rem", cursor: "pointer" }}>เข้าสู่ระบบ</span>
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

      {/* Table */}
      <div style={{ maxWidth: "1000px", margin: "40px auto", padding: "0 20px" }}>
        <div
          style={{
            color: "#fff",
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "16px",
          }}
        >
          Player Stats Table
        </div>
        <div>
          {/* Header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "120px 1fr repeat(6, 60px)",
              color: "#c6ff00",
              fontWeight: "bold",
              padding: "12px 16px",
              background: "#111",
              borderBottom: "1px solid #333",
            }}
          >
            <div>OVR</div>
            <div>Name</div>
            <div>PAC</div>
            <div>SHO</div>
            <div>PAS</div>
            <div>DRI</div>
            <div>DEF</div>
            <div>PHY</div>
          </div>

          {/* Rows */}
          {players.map((p, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr repeat(6, 60px)",
                alignItems: "center",
                padding: "10px 16px",
                background: i % 2 === 0 ? "#181828" : "#222",
                borderBottom: "1px solid #111",
                color: "#fff",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={p.img}
                  alt={p.name}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    objectFit: "cover",
                    background: "#000",
                    marginRight: "8px",
                    border: "2px solid #c6ff00",
                  }}
                />
                <span>{p.ovr}</span>
              </div>
              <div>
                <div style={{ fontWeight: "bold" }}>{p.name}</div>
                <div style={{ fontSize: "0.85rem", color: "#c6ff00" }}>{p.position}</div>
              </div>
              <div>{p.stats.PAC}</div>
              <div>{p.stats.SHO}</div>
              <div>{p.stats.PAS}</div>
              <div>{p.stats.DRI}</div>
              <div>{p.stats.DEF}</div>
              <div>{p.stats.PHY}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Data;
