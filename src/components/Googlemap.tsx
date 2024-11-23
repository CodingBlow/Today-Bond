import React from "react";

const GoogleMap: React.FC = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Map</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.9090870710756!2d77.33080799999999!3d28.695405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfbb31686b1b3%3A0xbe0550dbccbace63!2sSaifi%20Builders!5e1!3m2!1sen!2sin!4v1732373867026!5m2!1sen!2sin"
        width="80%"
        height="400px"
        style={styles.iframe}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="google-map"
      ></iframe>

      {/* Fallback content for crawlers */}
      <noscript>
        <div>
          <p>
            Check directions on{" "}
            <a
              href="https://goo.gl/maps/YOUR_MAP_LINK"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Maps
            </a>
            .
          </p>
        </div>
      </noscript>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    width: "100%",
    height: "60%",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: "24px",
    marginBottom: "10px",
    textAlign: "center",
  },
  iframe: {
    border: 0,
  },
};

export default GoogleMap;
