import "./App.css";
import Intro from "../Intro/Intro";
import NavBar from "../NavBar/NavBar";
import restaurantVideo from "../../assets/restaurant.mp4";
import Experience from "../Experience/Experience";
import Gallery from "../Gallery/Gallery";
import Menu from "../Menu/Menu";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import RestaurantLocation from "../RestaurantLocation/RestaurantLocation";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro videoSrc={restaurantVideo} />
      <Experience />
      <Gallery />
      <Menu />
      <ScrollToTop />
      <RestaurantLocation />
    </div>
  );
}

export default App;
