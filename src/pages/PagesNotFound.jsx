import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function PagesNotFound() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <h3>Oopsss....</h3>
        <p>Halaman yang anda tuju tidak ditemukan</p>
      </div>
      <Footer />
    </>
  );
}

export default PagesNotFound;
