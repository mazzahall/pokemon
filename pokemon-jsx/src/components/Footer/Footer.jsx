const Footer = () => {
  const footerStyle = {
    width: "100%",
    background: "linear-gradient(to right, #facc15, #f59e0b)", // kuning gradient
    padding: "20px 0",
    marginTop: "40px",
    boxShadow: "0 -2px 6px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const textStyle = {
    color: "#1f2937", // abu tua (gray-800)
    fontWeight: "600",
    fontSize: "18px",
    margin: "5px 0",
  };

  const subTextStyle = {
    color: "#4b5563", // abu medium (gray-600)
    fontSize: "14px",
    margin: "5px 0",
  };

  return (
    <footer style={footerStyle}>
      <h3 style={textStyle}>
        © 2024 Abdullah Azzam. All rights reserved.
      </h3>
    </footer>
  );
};

export default Footer;
