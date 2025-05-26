import "./App.css";
import Intro from "../Intro/Intro";
import NavBar from "../NavBar/NavBar";
import restaurantVideo from "../../assets/restaurant.mp4";
import Experience from "../Experience/Experience";
import Gallery from "../Gallery/Gallery";
import Menu from "../Menu/Menu";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro videoSrc={restaurantVideo} />
      <Experience />
      <Gallery />
      <Menu />
    </div>
  );
}

export default App;
