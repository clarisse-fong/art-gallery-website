import "./ModernArtGallery.scss";
import ArrowRightIcon from "../../assets/icon-arrow-right.svg";
import TwoPeopleFacingWomanPortrait_Mobile from "../../assets/mobile/image-hero.jpg";
import TwoPeopleFacingWomanPortrait_Tablet from "../../assets/tablet/image-hero.jpg";
import TwoPeopleFacingWomanPortrait_Desktop from "../../assets/desktop/image-hero.jpg";
function ModernArtGallery() {
  return (
    <>
      <img
        className="img-mobile"
        src={TwoPeopleFacingWomanPortrait_Mobile}
        alt="TwoPeopleFacingWomanPortrait"
      ></img>
      <div className="ModernArtGallery">
        <div className="black-box"></div>
        <div className="image">
          <img
            className="img-desktop"
            src={TwoPeopleFacingWomanPortrait_Desktop}
            alt="TwoPeopleFacingWomanPortrait"
          ></img>
          <img
            className="img-tablet"
            src={TwoPeopleFacingWomanPortrait_Tablet}
            alt="TwoPeopleFacingWomanPortrait"
          ></img>
        </div>
        <div className="white-box"></div>
        <div className="header">
          <h1>
            MODERN <br />
            ART&nbsp;GALLERY
          </h1>
        </div>
        <div className="description">
          <p>
            The arts in the collection of the Modern Art Gallery all started
            from a spark of inspiration. Will these pieces inspire you? Visit us
            and find out.
          </p>
        </div>
        <div className="location-button">
          <button className="button">
            <div className="our-location">OUR LOCATION</div>
            <div className="arrow">
              <img
                className="image"
                src={ArrowRightIcon}
                alt="A right arrow that looks like a greater than sign"
              ></img>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default ModernArtGallery;
