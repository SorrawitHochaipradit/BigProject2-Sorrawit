import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();

  const menu = [
    { to: "/", label: "หน้าหลัก" },
    { to: "/data", label: "แนะนำ" },
    { to: "/about", label: "เติมเกม" },
  ];

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

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const getVisibleSlides = () => {
    if (slides.length <= 3) return slides;
    return Array.from({ length: 3 }, (_, i) => slides[(current + i) % slides.length]);
  };

  return (
    <div
      style={{
        background: "#000",
        minHeight: "100vh",
        width: "100vw",
        margin: 0,
        padding: 0,
        overflowX: "hidden",
      }}
    >
      {/* Navigation Bar */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 40px",
          height: "60px",
          background: "#000",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
          <span
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: "2rem",
              letterSpacing: "2px",
              fontFamily: "Arial, sans-serif",
              lineHeight: "1",
            }}
          >
            term<span style={{ color: "#c6ff00" }}>game</span>
          </span>
        </div>
        
      </nav>

      {/* Main Menu */}
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
              ...(location.pathname === item.to && { color: "#fff" }),
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
                position: "relative",
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

      {/* คำอธิบายเกม EA SPORTS FC™ MOBILE 24 */}
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            maxWidth: "960px",
            textAlign: "center",
            color: "#ddd",
            fontSize: "1rem",
            lineHeight: "1.8",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <h2
            style={{
              color: "#c6ff00",
              fontSize: "1.6rem",
              marginBottom: "16px",
              fontWeight: "bold",
            }}
          >
            เกี่ยวกับ EA SPORTS FC™ MOBILE 24
          </h2>
          <p>
            EA SPORTS FC™ MOBILE 24 คือเกมฟุตบอลบนมือถือสุดมันส์จากค่าย EA Sports ที่ยกระดับการเล่นฟุตบอลให้สมจริงยิ่งขึ้น 
            ผู้เล่นสามารถจัดทีมในฝันจากนักเตะระดับโลก แข่งขันในโหมดต่าง ๆ ทั้งแบบเดี่ยวและมัลติเพลเยอร์
            พร้อมกราฟิกที่ลื่นไหล และระบบควบคุมที่พัฒนามาให้เหมาะกับการเล่นบนหน้าจอสัมผัส
            ไม่ว่าคุณจะเป็นสายวางแผนหรือสายบุก เกมนี้ก็ให้คุณควบคุมได้ทุกจังหวะของการแข่งขัน
          </p>
        </div>
      </div>

      {/* แนะนำเกม */}
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          marginTop: "32px",
        }}
      >
        <div
          style={{
            width: "220px",
            background: "#181818",
            border: "1.5px solid #c6ff00",
            borderRadius: "8px",
            boxShadow: "0 0 0 2px #222",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <img
            src="https://play-lh.googleusercontent.com/ujf5Hb-isODA63va99oUznil48Ru_iWdPYnrYFA12Y8eOhPyb6WoHHhVBEBSzG4mWmk"
            alt="EA SPORTS FC™ MOBILE 24"
            style={{
              width: "100%",
              height: "160px",
              objectFit: "cover",
              borderTopLeftRadius: "8px",
              borderTopRightRadius: "8px",
            }}
          />
          <div
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: "1.05rem",
              padding: "18px 0 0 0",
              width: "100%",
              textAlign: "center",
              background: "none",
              minHeight: "48px",
            }}
          >
            EA SPORTS FC™ MOBILE 24
          </div>
          <Link
            to="/data"
            style={{
              display: "block",
              margin: "24px auto 18px auto",
              width: "80%",
              background: "#181818",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "1.1rem",
              border: "2px solid #c6ff00",
              borderRadius: "6px",
              padding: "10px 0",
              textAlign: "center",
              textDecoration: "none",
              cursor: "pointer",
              transition: "background 0.2s, color 0.2s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#c6ff00";
              e.currentTarget.style.color = "#181818";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "#181818";
              e.currentTarget.style.color = "#fff";
            }}
          >
            แนะนำ
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
