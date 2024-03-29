import RoomWithTribalArt from "../assets/mobile/image-grid-1.jpg";
import benchImage from "../assets/mobile/image-grid-2.jpg";
import HallwayArt from "../assets/mobile/image-grid-3.jpg";

function YourDayAtTheGallery() {
  return (
    <div className="container">
      <div className="YourDayAtTheGallery row">
        <img
          className="col align-self-center"
          src={RoomWithTribalArt}
          alt="RoomWithTribalArt"
        ></img>
        <h2 className="col align-self-start col-12">
          YOUR DAY <br />
          AT THE GALLERY
        </h2>
        <p className="col align-self-start col-12">
          Wander through our distinct collections <br />
          and find new insights about our artists. <br />
          Dive into the details of their creative process.
        </p>
      </div>
    </div>
  );
}

export default YourDayAtTheGallery;
