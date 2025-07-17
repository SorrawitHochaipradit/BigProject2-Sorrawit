import React from "react";
import { Link, useLocation } from "react-router-dom";

function Data() {
  const location = useLocation();

  const menu = [
    { to: "/", label: "หน้าหลัก" },
    { to: "/data", label: "เกม" },
    { to: "/about", label: "โปรโมชั่น" },
  ];

  // สร้างข้อมูลตัวอย่าง 50 แถว
  const players = Array.from({ length: 50 }, (_, i) => ({
    name: `Player ${i + 1}`,
    position: ["ST", "RW", "RB", "LW", "CB", "CAM"][i % 6],
    ovr: 111,
    img: "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-mobile/season-24/players/players-24-drogba.png",
    stats: {
      PAC: 120 + (i % 20),
      SHO: 130 - (i % 10),
      PAS: 100 + (i % 15),
      DRI: 109 + (i % 25),
      DEF: 60 + (i % 70),
      PHY: 123 - (i % 50),
    },
  }));

  return (
    <div
      style={{
        background: "#181828",
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
      <div style={{ margin: "40px auto", maxWidth: "900px" }}>
        <div
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1.5rem",
            marginBottom: "24px",
            textAlign: "left",
          }}
        >
          FC 24/25 Player Stats
        </div>
        <div
          style={{
            background: "#22223a",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 2px 12px #0002",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "90px 160px 70px 70px 70px 70px 70px 70px",
              alignItems: "center",
              padding: "16px 24px",
              borderBottom: "1px solid #333",
              color: "#c6ff00",
              fontWeight: "bold",
              fontSize: "1.1rem",
              background: "#181828",
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
          <div>
            {players.map((p, idx) => (
              <div
                key={idx}
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "90px 160px 70px 70px 70px 70px 70px 70px",
                  alignItems: "center",
                  padding: "16px 24px",
                  borderBottom: "1px solid #222",
                  background: idx % 2 === 0 ? "#22223a" : "#181828",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={p.img}
                    alt={p.name}
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "8px",
                      marginRight: "8px",
                      objectFit: "cover",
                      background: "#222",
                    }}
                  />
                  <span style={{ fontWeight: "bold", color: "#fff" }}>
                    {p.ovr}
                  </span>
                </div>
                <div style={{ color: "#fff", fontWeight: "bold" }}>
                  {p.name}
                  <div style={{ fontSize: "0.95rem", color: "#c6ff00" }}>
                    {p.position}
                  </div>
                </div>
                <div style={statBox}>{p.stats.PAC}</div>
                <div style={statBox}>{p.stats.SHO}</div>
                <div style={statBox}>{p.stats.PAS}</div>
                <div style={statBox}>{p.stats.DRI}</div>
                <div style={statBox}>{p.stats.DEF}</div>
                <div style={statBox}>{p.stats.PHY}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// สไตล์กล่อง stat
const statBox = {
  width: "60px",
  background: "#23233a",
  color: "#fff",
  fontWeight: "bold",
  fontSize: "1.05rem",
  borderRadius: "8px",
  padding: "8px 0",
  textAlign: "center",
  margin: "0 4px",
};

export default Data;
