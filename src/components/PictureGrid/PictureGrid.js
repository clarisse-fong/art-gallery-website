import "./PictureGrid.scss";
import RoomWithTribalArt_Mobile from "../../assets/mobile/image-grid-1.jpg";
import RoomWithTribalArt_Tablet from "../../assets/tablet/image-grid-1.jpg";
import RoomWithTribalArt_Desktop from "../../assets/desktop/image-grid-1.jpg";
import BenchImage_Mobile from "../../assets/mobile/image-grid-2.jpg";
import BenchImage_Tablet from "../../assets/tablet/image-grid-2.jpg";
import BenchImage_Desktop from "../../assets/desktop/image-grid-2.jpg";
import HallwayArt_Mobile from "../../assets/mobile/image-grid-3.jpg";
import HallwayArt_Tablet from "../../assets/tablet/image-grid-3.jpg";
import HallwayArt_Desktop from "../../assets/desktop/image-grid-3.jpg";
function PictureGrid() {
  return (
    <>
      <div className="Picture-Grid">
        <div className="RoomWithTribalArtImage">
          <img
            className="img-mobile"
            src={RoomWithTribalArt_Mobile}
            alt="RoomWithTribalArt"
          ></img>
          <img
            className="img-tablet"
            src={RoomWithTribalArt_Tablet}
            alt="RoomWithTribalArt"
          ></img>
          <img
            className="img-desktop"
            src={RoomWithTribalArt_Desktop}
            alt="RoomWithTribalArt"
          ></img>
        </div>
        <div className="YourDayAtTheGallery header">
          <h2>YOUR DAY AT THE GALLERY</h2>
        </div>
        <div className="description">
          <p>
            Wander through our distinct collections and find new insights about
            our artists. Dive into the details of their creative process.
          </p>
        </div>
        <div className="BenchImage">
          <img
            className="img-mobile"
            src={BenchImage_Mobile}
            alt="Empty art room exhibit with a wooden bench in the foreground with a piece of art in the background on the wall"
          ></img>
          <img
            className="img-tablet"
            src={BenchImage_Tablet}
            alt="Empty art room exhibit with a wooden bench in the foreground with a piece of art in the background on the wall"
          ></img>
          <img
            className="img-desktop"
            src={BenchImage_Desktop}
            alt="Empty art room exhibit with a wooden bench in the foreground with a piece of art in the background on the wall"
          ></img>
        </div>
        <div className="HallwayArtImage">
          <img
            src={HallwayArt_Mobile}
            alt="Art gallery hallway with people looking at the art"
            className="img-mobile"
          ></img>
          <img
            src={HallwayArt_Tablet}
            alt="Art gallery hallway with people looking at the art"
            className="img-tablet"
          ></img>
          <img
            src={HallwayArt_Desktop}
            alt="Art gallery hallway with people looking at the art"
            className="img-desktop"
          ></img>
        </div>
        <div className="ComeAndBeInspired">
          <h2>
            COME & BE <br />
            INSPIRED
          </h2>
          <p>
            We’re excited to welcome you to our gallery and see how our
            collections influence you.
          </p>
        </div>
      </div>
    </>
  );
}

export default PictureGrid;
