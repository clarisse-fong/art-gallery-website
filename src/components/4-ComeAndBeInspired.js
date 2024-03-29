import HallwayArt from "../assets/mobile/image-grid-3.jpg";
function ComeAndBeInspired() {
  return (
    <div className="container">
      <div className="ComeAndBeInspired row">
        <img
          src={HallwayArt}
          alt="Art gallery hallway with people looking at the art"
          className="col"
        ></img>
        <div className="box col">
          <h2>COME & BE INSPIRED</h2>
          <p>
            We’re excited to welcome you to our gallery and see how our
            collections influence you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ComeAndBeInspired;
