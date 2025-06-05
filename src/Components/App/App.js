import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Intro from "../Intro/Intro";
import restaurantVideo from "../../assets/restaurant.mp4";
import Experience from "../Experience/Experience";
import Gallery from "../Gallery/Gallery";
import Menu from "../Menu/Menu";
import RestaurantLocation from "../RestaurantLocation/RestaurantLocation";
import Reservation from "../Reservation/Reservation";
import AboutUs from "../AboutUs/AboutUs";
import Layout from "../Layout/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <>
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
              </>
            }
          />
          <Route
            path="/reserva"
            element={<Reservation />}
          />
          <Route
            path="/sobre"
            element={<AboutUs />}
          />
        </Route>
        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
