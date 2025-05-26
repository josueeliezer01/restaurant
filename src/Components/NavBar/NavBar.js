import "./NavBar.css";
import Logo from "../Logo/Logo";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <Logo className="logo" />
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <a href="#">
            <li>MENU</li>
          </a>
          <a href="#">
            <li>LOCAL</li>
          </a>
          <a href="#">
            <li>RESERVE</li>
          </a>
          <a href="#">
            <li>CONTATO</li>
          </a>
          <a href="#">
            <li>SOBRE NÓS</li>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
