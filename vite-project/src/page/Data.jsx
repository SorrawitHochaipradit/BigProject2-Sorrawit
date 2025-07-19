import React from "react";
import { Link, useLocation } from "react-router-dom";

function Data() {
  const location = useLocation();

  const menu = [
    { to: "/", label: "หน้าหลัก" },
    { to: "/data", label: "แนะนำ" },
    { to: "/about", label: "เติมเกม" },
  ];

  const players = [
    {
      name: "Drogba",
      position: "ST",
      ovr: 111,
      stats: { PAC: 120, SHO: 130, PAS: 100, DRI: 109, DEF: 60, PHY: 123 },
    },
    {
      name: "Garrincha",
      position: "RW",
      ovr: 111,
      stats: { PAC: 133, SHO: 115, PAS: 117, DRI: 134, DEF: 50, PHY: 76 },
    },
    {
      name: "Carlos Alberto",
      position: "RB",
      ovr: 111,
      stats: { PAC: 125, SHO: 74, PAS: 102, DRI: 108, DEF: 130, PHY: 122 },
    },
    {
      name: "Best",
      position: "LW",
      ovr: 111,
      stats: { PAC: 135, SHO: 123, PAS: 112, DRI: 134, DEF: 67, PHY: 84 },
    },
    {
      name: "Yashin",
      position: "GK",
      ovr: 111,
      stats: { PAC: 68, SHO: 28, PAS: 83, DRI: 95, DEF: 47, PHY: 105 },
    },
    {
      name: "Blanc",
      position: "CB",
      ovr: 111,
      stats: { PAC: 111, SHO: 83, PAS: 96, DRI: 108, DEF: 132, PHY: 123 },
    },
    {
      name: "Charlton",
      position: "CAM",
      ovr: 111,
      stats: { PAC: 122, SHO: 127, PAS: 119, DRI: 132, DEF: 62, PHY: 90 },
    },
    {
      name: "Beckkenbauer",
      position: "CB",
      ovr: 110,
      stats: { PAC: 112, SHO: 89, PAS: 113, DRI: 112, DEF: 128, PHY: 114 },
    },
    {
      name: "Lampard",
      position: "CM",
      ovr: 110,
      stats: { PAC: 117, SHO: 110, PAS: 114, DRI: 95, DEF: 103, PHY: 106 },
    },
    {
      name: "Vollor",
      position: "ST",
      ovr: 110,
      stats: { PAC: 126, SHO: 128, PAS: 97, DRI: 116, DEF: 58, PHY: 110 },
    },
    {
      name: "Hagi",
      position: "RM",
      ovr: 110,
      stats: { PAC: 126, SHO: 115, PAS: 122, DRI: 126, DEF: 48, PHY: 84 },
    },
    {
      name: "Keane",
      position: "CDM",
      ovr: 110,
      stats: { PAC: 106, SHO: 84, PAS: 107, DRI: 113, DEF: 125, PHY: 123 },
    },
    {
      name: "King",
      position: "CB",
      ovr: 110,
      stats: { PAC: 109, SHO: 63, PAS: 88, DRI: 103, DEF: 132, PHY: 123 },
    },
    {
      name: "Mascherano",
      position: "CDM",
      ovr: 110,
      stats: { PAC: 110, SHO: 79, PAS: 102, DRI: 106, DEF: 127, PHY: 116 },
    },
    {
      name: "Shevchenko",
      position: "ST",
      ovr: 110,
      stats: { PAC: 121, SHO: 127, PAS: 96, DRI: 116, DEF: 46, PHY: 103 },
    },
    
    
    // เพิ่มข้อมูลเพิ่มตามต้องการ
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

      {/* Player Table */}
      <div style={{ maxWidth: "1000px", margin: "40px auto", padding: "0 20px" }}>
        <div
          style={{
            color: "#fff",
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "16px",
          }}
        >
          แนะนำตัวละครที่ดีที่สุด 15 ตัวในเกม
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
                
                <span>{p.ovr}</span>
              </div>
              <div>
                <div style={{ fontWeight: "bold" }}>{p.name}</div>
                <div style={{ fontSize: "0.85rem", color: "#c6ff00" }}>
                  {p.position}
                </div>
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
