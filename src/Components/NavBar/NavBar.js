import "./NavBar.css";
import Logo from "../Logo/Logo";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fecha o menu quando um link é clicado
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <Logo className="logo" />
      <div id="menuToggle">
        <input
          type="checkbox"
          checked={menuOpen}
          onChange={() => setMenuOpen(!menuOpen)}
        />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <li>
            <a
              href="#inicio"
              onClick={handleLinkClick}>
              INÍCIO
            </a>
          </li>
          <li>
            <a
              href="#experiencia"
              onClick={handleLinkClick}>
              A EXPERIÊNCIA
            </a>
          </li>
          <li>
            <a
              href="#galeria"
              onClick={handleLinkClick}>
              GALERIA
            </a>
          </li>
          <li>
            <a
              href="#cardapio"
              onClick={handleLinkClick}>
              MENU
            </a>
          </li>
          <li>
            <a
              href="#contato"
              onClick={handleLinkClick}>
              ENDEREÇO E CONTATO
            </a>
          </li>
          <li>
            <a
              href="#reserva"
              onClick={handleLinkClick}>
              RESERVE
            </a>
          </li>
          <li>
            <a
              href="#sobre"
              onClick={handleLinkClick}>
              SOBRE NÓS
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
