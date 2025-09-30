import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Layoutspokemon = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer/>
    </>
  );
};

export default Layoutspokemon;
