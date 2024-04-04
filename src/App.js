import "./App.scss";
import PictureGrid from "./components/PictureGrid/PictureGrid";
import ModernArtGallery from "./components/ModernArtGallery/ModernArtGallery";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <ModernArtGallery />
      <PictureGrid />
      <Footer />
    </div>
  );
}

export default App;
