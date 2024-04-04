import "./Footer.scss";
import Facebook from "../../assets/icon-facebook.svg";
import Instagram from "../../assets/icon-instagram.svg";
import Twitter from "../../assets/icon-twitter.svg";
import LogoLight from "../../assets/logo-light.svg";

function Footer() {
  return (
    <div className="Footer container-fluid">
      <img className="logo" src={LogoLight} alt="The Modern Art logo"></img>
      <p className="description small-body-font">
        The Modern Art Gallery is free to all visitors and open seven days a
        week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
      </p>
      <div className="social-media">
        <img
          className="FB"
          src={Facebook}
          alt="Facebook Logo"
          onClick={() => window.location.replace("https://facebook.com")}
        ></img>
        <img
          className="IG"
          src={Instagram}
          alt="Instagram Logo"
          onClick={() => window.location.replace("https://instagram.com")}
        ></img>
        <img
          className="Twitter"
          src={Twitter}
          alt="Twitter Logo"
          onClick={() => window.location.replace("https://twitter.com")}
        ></img>
      </div>
    </div>
  );
}

export default Footer;
