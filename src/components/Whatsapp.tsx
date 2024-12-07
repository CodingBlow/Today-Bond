import React, { useState, useEffect, CSSProperties } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const FloatingButtons: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const commonStyle: CSSProperties = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "55px",
    height: "55px",
    color: "#fff",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "30px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
    cursor: "pointer",
    zIndex: 1000,
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const whatsappStyle: CSSProperties = {
    ...commonStyle,
    backgroundColor: "#25D366",
    bottom: "20px",
    display: isMobile ? "flex" : "flex",
  };

  const callStyle: CSSProperties = {
    ...commonStyle,
    backgroundColor: "#1029e7",
    bottom: "90px",
    display: isMobile ? "flex" : "flex",
  };

  const hoverStyle: CSSProperties = {
    transform: "scale(1.1)",
    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.4)",
  };

  return (
    <>
      {/* Call Button */}
      <a
        href="tel:+919910829792" // Replace with your phone number
        style={callStyle}
        onMouseEnter={(e) => {
          Object.assign(
            (e.currentTarget as HTMLAnchorElement).style,
            hoverStyle
          );
        }}
        onMouseLeave={(e) => {
          Object.assign(
            (e.currentTarget as HTMLAnchorElement).style,
            callStyle
          );
        }}
      >
        <FaPhoneAlt />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919910829792" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        style={whatsappStyle}
        onMouseEnter={(e) => {
          Object.assign(
            (e.currentTarget as HTMLAnchorElement).style,
            hoverStyle
          );
        }}
        onMouseLeave={(e) => {
          Object.assign(
            (e.currentTarget as HTMLAnchorElement).style,
            whatsappStyle
          );
        }}
      >
        <FaWhatsapp />
      </a>
    </>
  );
};

// Adding animation keyframes dynamically
const styleSheet = document.styleSheets[0] as CSSStyleSheet;
styleSheet.insertRule(
  `
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`,
  styleSheet.cssRules.length
);

export default FloatingButtons;
