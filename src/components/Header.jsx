import profilePicture from "../assets/yadiza.png";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import "../styles/Header.css";
function Header() {
  return (
    <header>
      <div className="header-jumbotron">
        <img src={profilePicture} />
        <h3>YADIZA RENO TABAH SIMBOLON</h3>
        <p>IT CONSULTANT</p>
        <div className="socialMedia">
          <a href="https://www.instagram.com/yadizareno?igsh=MTU0dXpoMzlmdWxzYQ==">
            <FaInstagram />
          </a>
          <a href="">
            <FaTiktok />
          </a>
          <a href="">
            <FaTwitter />
          </a>
          <a href="">
            <FaFacebookF />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
