import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();

  const menu = [
    { to: "/", label: "หน้าหลัก" },
    { to: "/data", label: "เกม" },
    { to: "/about", label: "โปรโมชั่น" },
  ];

  // กำหนดรูปภาพ 4 รูป
  const slides = [
    {
      img: "https://cdn1.codashop.com/S/content/common/images/mno/rag_Thailand.jpg",
      alt: "Banner 1",
    },
    {
      img: "https://gameon.ais.co.th/api/cms-data-service/product/8899b0b6-d7c1-4a91-af23-db8f93c9e3e7-ign-240524-FC-mobile-cover.png",
      alt: "Banner 2",
    },
    {
      img: "https://img.pptvhd36.com/thumbor/2025/07/03/news-33d7664.jpg",
      alt: "Banner 3",
    },
    {
      img: "https://preview.redd.it/which-formation-for-posession-game-play-tiki-taka-v0-7hw0nm4l2k1c1.jpg?width=1080&crop=smart&auto=webp&s=ee1a37daf815bcfd30e9d0cb606050cbb4fd3456",
      alt: "Banner 4",
    },
  ];

  const [current, setCurrent] = useState(0);

  // ฟังก์ชันเลื่อนซ้าย/ขวา
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // หาค่าดัชนีรูปที่จะแสดง (3 รูป)
  const getVisibleSlides = () => {
    if (slides.length <= 3) return slides;
    let arr = [];
    for (let i = 0; i < 3; i++) {
      arr.push(slides[(current + i) % slides.length]);
    }
    return arr;
  };

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
      {/* Image Slider */}
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "40px 0 0 0",
        }}
      >
        <button
          onClick={prevSlide}
          style={{
            background: "none",
            border: "none",
            color: "#c6ff00",
            fontSize: "2.5rem",
            cursor: "pointer",
            marginRight: "12px",
            zIndex: 2,
          }}
          aria-label="prev"
        >
          &#60;
        </button>
        <div
          style={{
            display: "flex",
            gap: "32px",
            overflow: "hidden",
            width: "1500px",
            maxWidth: "95vw",
            justifyContent: "center",
          }}
        >
          {getVisibleSlides().map((slide, idx) => (
            <div
              key={slide.alt}
              style={{
                minWidth: "480px",
                maxWidth: "480px",
                height: "320px",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: idx === 1 ? "0 0 0 4px #c6ff00" : "0 0 0 0 #000",
                border: idx === 1 ? "2px solid #c6ff00" : "2px solid #222",
                opacity: idx === 1 ? 1 : 0.7,
                transition: "all 0.3s",
                background: "#111",
                display: "block",
              }}
            >
              <img
                src={slide.img}
                alt={slide.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>
        <button
          onClick={nextSlide}
          style={{
            background: "none",
            border: "none",
            color: "#c6ff00",
            fontSize: "2.5rem",
            cursor: "pointer",
            marginLeft: "12px",
            zIndex: 2,
          }}
          aria-label="next"
        >
          &#62;
        </button>
      </div>
    </div>
  );
}

export default Home;
