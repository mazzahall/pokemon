import Footer from "../Footer/Footer";
import Navbar from "../Navbar/navbar";

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
