import React from "react";
import { Link, useLocation } from "react-router-dom";

function About() {
  const location = useLocation();

  const cardStyle = {
  background: "#111",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
  textAlign: "center",
  color: "#fff",
  width: "300px",
};

const imgStyle = {
  width: "100%",
  display: "block",
};

const descStyle = {
  padding: "10px 0",
  fontSize: "1rem",
};


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
        {/* เพิ่มเนื้อหาของหน้า About ที่นี่ */}
        <h2>About Page</h2>
          <div style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "20px",
              padding: "40px",
            }}
          >
            {/* รูปที่ 1 */}
            <div style={cardStyle}>
              <img src="https://via.placeholder.com/300x180?text=Image+1" alt="Image 1" style={imgStyle} />
              <div style={descStyle}>คำอธิบายรูปภาพที่ 1</div>
            </div>

            {/* รูปที่ 2 */}
            <div style={cardStyle}>
              <img src="https://via.placeholder.com/300x180?text=Image+2" alt="Image 2" style={imgStyle} />
              <div style={descStyle}>คำอธิบายรูปภาพที่ 2</div>
            </div>

            {/* รูปที่ 3 */}
            <div style={cardStyle}>
              <img src="https://via.placeholder.com/300x180?text=Image+3" alt="Image 3" style={imgStyle} />
              <div style={descStyle}>คำอธิบายรูปภาพที่ 3</div>
            </div>

            {/* รูปที่ 4 */}
            <div style={cardStyle}>
              <img src="https://via.placeholder.com/300x180?text=Image+4" alt="Image 4" style={imgStyle} />
              <div style={descStyle}>คำอธิบายรูปภาพที่ 4</div>
            </div>

            {/* รูปที่ 5 */}
            <div style={cardStyle}>
              <img src="https://via.placeholder.com/300x180?text=Image+5" alt="Image 5" style={imgStyle} />
              <div style={descStyle}>คำอธิบายรูปภาพที่ 5</div>
            </div>

            {/* รูปที่ 6 */}
            <div style={cardStyle}>
              <img src="https://via.placeholder.com/300x180?text=Image+6" alt="Image 6" style={imgStyle} />
              <div style={descStyle}>คำอธิบายรูปภาพที่ 6</div>
            </div>

            {/* รูปที่ 7 */}
            <div style={cardStyle}>
              <img src="https://via.placeholder.com/300x180?text=Image+7" alt="Image 7" style={imgStyle} />
              <div style={descStyle}>คำอธิบายรูปภาพที่ 7</div>
            </div>

            {/* รูปที่ 8 */}
            <div style={cardStyle}>
              <img src="https://via.placeholder.com/300x180?text=Image+8" alt="Image 8" style={imgStyle} />
              <div style={descStyle}>คำอธิบายรูปภาพที่ 8</div>
            </div>

            {/* รูปที่ 9 */}
            <div style={cardStyle}>
              <img src="https://via.placeholder.com/300x180?text=Image+9" alt="Image 9" style={imgStyle} />
              <div style={descStyle}>คำอธิบายรูปภาพที่ 9</div>
            </div>

            {/* รูปที่ 10 */}
            <div style={cardStyle}>
              <img src="https://via.placeholder.com/300x180?text=Image+10" alt="Image 10" style={imgStyle} />
              <div style={descStyle}>คำอธิบายรูปภาพที่ 10</div>
            </div>
          </div>
          
      </div>
    </div>
  );
}

export default About;
