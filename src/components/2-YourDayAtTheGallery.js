import RoomWithTribalArt_Mobile from "../assets/mobile/image-grid-1.jpg";
import RoomWithTribalArt_Desktop from "../assets/desktop/image-grid-1.jpg";
import benchImage_Mobile from "../assets/mobile/image-grid-2.jpg";
import benchImage_Desktop from "../assets/desktop/image-grid-2.jpg";
import HallwayArt_Mobile from "../assets/mobile/image-grid-3.jpg";
import HallwayArt_Desktop from "../assets/desktop/image-grid-3.jpg";

function YourDayAtTheGallery() {
  return (
    <div>
      {/* YOUR DAY AT THE GALLERY */}
      <div className="container p-5">
        {/* Right Side */}
        <div className="YourDayAtTheGallery row">
          <div className="col order-2">
            <img
              className="col align-self-center 	d-md-block d-lg-none d-xl-none"
              src={RoomWithTribalArt_Mobile}
              alt="RoomWithTribalArt"
            ></img>
            <img
              className="col align-self-center d-none d-lg-block d-xl-block"
              src={RoomWithTribalArt_Desktop}
              alt="RoomWithTribalArt"
            ></img>
          </div>
          {/* Left Side */}
          <div className="col order-1">
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

        {/* COME AND BE INSPIRED */}
        {/* Bench with Art */}
        <div className="row">
          <div className="BenchWithArt col-lg-7">
            <img
              className="col d-md-block d-lg-none d-xl-none"
              src={benchImage_Mobile}
              alt="Empty art room exhibit with a wooden bench in the foreground with a piece of art in the background on the wall"
            ></img>
            <img
              className="col d-none d-lg-block d-xl-block"
              src={benchImage_Desktop}
              alt="Empty art room exhibit with a wooden bench in the foreground with a piece of art in the background on the wall"
            ></img>
          </div>
          {/* Come & Be Inspired*/}
          <div className="ComeAndBeInspired col-lg">
            <div className="row">
              <div className="col-lg-12">
                <img
                  src={HallwayArt_Mobile}
                  alt="Art gallery hallway with people looking at the art"
                  className="d-md-block d-lg-none d-xl-none"
                ></img>
                <img
                  src={HallwayArt_Desktop}
                  alt="Art gallery hallway with people looking at the art"
                  className="d-none d-lg-block d-xl-block"
                ></img>
              </div>
              <div className="box col-lg-12">
                <h2>COME & BE INSPIRED</h2>
                <p>
                  We’re excited to welcome you to our gallery and see how our
                  collections influence you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourDayAtTheGallery;
