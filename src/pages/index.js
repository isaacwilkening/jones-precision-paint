import React from "react";
import carImage from ".src/assets/red-car-background.png"; // Make sure this path matches your folder

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.5 }}>

      {/* Hero / Landing Section */}
      <header
        style={{
          position: "relative",
          height: "100vh",
          backgroundImage: `url(${carImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center"
        }}
      >
        {/* Semi-transparent overlay */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)"
        }}></div>

        {/* Header content */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ fontSize: "4rem", fontWeight: "bold" }}>Jones Precision Paint</h1>
          <p style={{ fontSize: "1.5rem", marginTop: "20px" }}>Expert Auto Body & Car Painting Services</p>
        </div>
      </header>

      {/* Services Section */}
      <section style={{ padding: "80px 20px", backgroundColor: "#f5f5f5" }}>
        <h2 style={{ textAlign: "center" }}>Our Services</h2>
        <ul style={{
          maxWidth: "600px",
          margin: "auto",
          listStyle: "none",
          padding: 0
        }}>
          <li style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>Full Car Repainting</li>
          <li style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>Scratch & Dent Repair</li>
          <li style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>Bumper Repair & Refinishing</li>
          <li style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>Custom Color Matching</li>
          <li style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>Collision Repair Painting</li>
        </ul>
      </section>

      {/* Quote Request Form */}
      <section style={{ padding: "80px 20px" }}>
        <h2 style={{ textAlign: "center" }}>Request a Free Quote</h2>
        <form
          name="quote"
          method="POST"
          data-netlify="true"
          style={{ maxWidth: "500px", margin: "auto", display: "flex", flexDirection: "column" }}
        >
          <label style={{ marginTop: "10px", fontWeight: "bold" }}>Your Name:</label>
          <input type="text" name="name" required style={{ padding: "8px", marginTop: "5px", borderRadius: "4px" }} />

          <label style={{ marginTop: "10px", fontWeight: "bold" }}>Email:</label>
          <input type="email" name="email" required style={{ padding: "8px", marginTop: "5px", borderRadius: "4px" }} />

          <label style={{ marginTop: "10px", fontWeight: "bold" }}>Car Make/Model:</label>
          <input type="text" name="car" required style={{ padding: "8px", marginTop: "5px", borderRadius: "4px" }} />

          <label style={{ marginTop: "10px", fontWeight: "bold" }}>Service Needed:</label>
          <select name="service" required style={{ padding: "8px", marginTop: "5px", borderRadius: "4px" }}>
            <option value="full-paint">Full Car Repainting</option>
            <option value="scratch-dent">Scratch & Dent Repair</option>
            <option value="bumper">Bumper Repair</option>
            <option value="custom-color">Custom Color Match</option>
            <option value="collision">Collision Repair Painting</option>
          </select>

          <label style={{ marginTop: "10px", fontWeight: "bold" }}>Additional Details:</label>
          <textarea name="message" style={{ padding: "8px", marginTop: "5px", borderRadius: "4px" }} />

          <button type="submit" style={{
            marginTop: "20px",
            padding: "12px",
            backgroundColor: "#e63946",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}>
            Get My Quote
          </button>
        </form>
      </section>

      <footer style={{ textAlign: "center", padding: "20px", backgroundColor: "#222", color: "#fff" }}>
        <p>© 2025 Jones Precision Paint</p>
      </footer>
    </div>
  );
}
