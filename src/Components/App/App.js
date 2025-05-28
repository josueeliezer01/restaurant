import "./App.css";
import Intro from "../Intro/Intro";
import NavBar from "../NavBar/NavBar";
import restaurantVideo from "../../assets/restaurant.mp4";
import Experience from "../Experience/Experience";
import Gallery from "../Gallery/Gallery";
import Menu from "../Menu/Menu";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import RestaurantLocation from "../RestaurantLocation/RestaurantLocation";

// App.jsx
function App() {
  return (
    <div className="App">
      <NavBar />
      <section id="inicio">
        <Intro videoSrc={restaurantVideo} />
      </section>
      <section id="experiencia">
        <Experience />
      </section>
      <section id="galeria">
        <Gallery />
      </section>
      <section id="cardapio">
        <Menu />
      </section>
      <section id="contato">
        <RestaurantLocation />
      </section>
      <ScrollToTop />
    </div>
  );
}

export default App;
