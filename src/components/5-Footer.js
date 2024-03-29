import Facebook from "../assets/icon-facebook.svg";
import Instagram from "../assets/icon-instagram.svg";
import Twitter from "../assets/icon-twitter.svg";

function Footer() {
  return (
    <div className="container Footer">
      <div className="row box">
        <h3 className="col-12">
          MODERN <br />
          ART GALLERY
        </h3>
        <p className="col-12">
          The Modern Art Gallery is free to all visitors and open seven days a
          week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
        </p>
        <div className="col-12">
          <div className="row justify-content-start">
            <img className="col-2" src={Facebook}></img>
            <img className="col-2" src={Instagram}></img>
            <img className="col-2" src={Twitter}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
