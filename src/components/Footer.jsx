import React from "react"

const Footer = () => {
  // Get the current year
  const currentYear = new Date().getFullYear()

  const footerStyle = {
    backgroundColor: "#000",
    color: "#fff",
    padding: "10px 20px",
    textAlign: "center",
    // position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    borderTop: "1px solid #333",
  }

  return (
    <footer style={footerStyle}>
      <p>&copy; {currentYear} Designed and Developed by Bhairav</p>
    </footer>
  )
}

export default Footer
