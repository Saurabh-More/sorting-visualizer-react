import React from "react"
import MyImage from "../assets/logo.png"
const Header = () => {
  const headerStyle = {
    width: "100%",
    backgroundColor: "#000", // Black background
    color: "#fff", // White text color
    padding: "10px 20px", // Padding for spacing
    display: "flex", // Flexbox for layout
    justifyContent: "center", // Space between items
    alignItems: "center", // Center items vertically
    borderBottom: "1px solid #333", // Subtle border
  }

  const brandStyle = {
    position: "relative",
    left: "40px",
  }

  const titleStyle = {
    fontSize: "30px", // Font size for the title
    fontWeight: "bold", // Bold title
    margin: 0, // Remove default margin
  }

  const subtitleStyle = {
    fontSize: "16px", // Font size for the subtitle
    color: "#a66cff", // Light gray color for subtitle
    margin: 0, // Remove default margin
    marginLeft: "30px",
  }

  const imgStyle = {
    height: "50px",
  }

  return (
    <header style={headerStyle}>
      <img
        src={MyImage}
        style={imgStyle}></img>
      <div style={brandStyle}>
        <h1 style={titleStyle}>Sort Lab</h1>
        <p style={subtitleStyle}>...your sorting mate</p>
      </div>
    </header>
  )
}

export default Header
