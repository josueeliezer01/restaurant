import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const Layout = () => (
  <>
    <NavBar />
    <ScrollToTop />
    <Outlet />
    <Footer />
  </>
);

export default Layout;
