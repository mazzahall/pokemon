import logo from "../assets/ball.png"
const Navbar = () => {
    const navbar = {
        backgroundColor: "#ffcb05",
        padding: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        top : 0,
        position : "sticky",
    zIndex : 1,
  };

  return (
    <nav style={navbar}>
        <img width ={50} src={logo} alt="" />
    </nav>
  )
}
export default Navbar;