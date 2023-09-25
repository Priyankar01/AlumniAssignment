import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../assets/Ninja Hatori.png";

export default function navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-main">
          <div className="navbar-main-left">
            <img className="navbar-logo" src={Logo} alt="LOGO" />
            <ul className="navbar-main-left-list">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#support">Support</a>
              </li>
            </ul>
          </div>
          <div className="navbar-main-right">
            <p className="alumni-btn">
              <a href="#form">Alumni Form</a>
            </p>
          </div>
          <div className="bars">
            <MenuIcon />
          </div>
        </div>
      </div>
    </>
  );
}