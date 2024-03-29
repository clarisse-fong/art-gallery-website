import TwoPeopleFacingWomanPortrait from "../assets/mobile/image-hero.jpg";
import ArrowRightIcon from "../assets/icon-arrow-right.svg";
function ModernArtGallery() {
  return (
    <div className="ModernArtGallery">
      <img
        src={TwoPeopleFacingWomanPortrait}
        alt="TwoPeopleFacingWomanPortrait"
      ></img>
      <h1>
        MODERN <br />
        ART GALLERY
      </h1>
      <p>
        The arts in the collection of the Modern Art Gallery all started from a
        spark of inspiration. Will these pieces inspire you? Visit us and find
        out.
      </p>
      <button>
        <div>
          <p>OUR LOCATION</p>

          <img src={ArrowRightIcon}></img>
        </div>
      </button>
    </div>
  );
}

export default ModernArtGallery;
