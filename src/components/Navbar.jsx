import { useState } from "react";
import "../styles/Navbar.css";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
function Navbar() {
  const [statusTampil, setStatusTampil] = useState("tampil");

  function tampilMenu() {
    if (statusTampil == "") {
      setStatusTampil("tampil");
    } else {
      setStatusTampil("");
    }
  }
  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          <Link to="/">PROFIL SAYA</Link>
        </div>
        <button onClick={tampilMenu}>
          {statusTampil == "" ? <FaBars /> : <IoMdClose />}
        </button>
        <div className={`menu ${statusTampil}`} onClick={tampilMenu}>
          <ul>
            <li>
              <HashLink to="/#portfolio">portfolio</HashLink>
            </li>
            <li>
              <HashLink to="/#about">About</HashLink>
            </li>
            <li>
              <Link to="/education">Education</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
