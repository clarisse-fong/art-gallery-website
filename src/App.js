import "./App.scss";
import BenchWithArt from "./components/3-BenchWithArt";
import ModernArtGallery from "./components/1-ModernArtGallery";
import YourDayAtTheGallery from "./components/2-YourDayAtTheGallery";
import ComeAndBeInspired from "./components/4-ComeAndBeInspired";
import Footer from "./components/5-Footer";

function App() {
  return (
    <div className="App">
      <ModernArtGallery />
      <YourDayAtTheGallery />
      <BenchWithArt />
      <ComeAndBeInspired />
      <Footer />
    </div>
  );
}

export default App;
