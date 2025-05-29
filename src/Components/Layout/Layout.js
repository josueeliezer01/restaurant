import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const Layout = () => (
  <>
    <NavBar />
    <ScrollToTop />
    <Outlet />
  </>
);

export default Layout;
