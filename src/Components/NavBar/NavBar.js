import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import Logo from "../Logo/Logo";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

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
            <Link
              to="/reserva"
              className={pathname === "/reserva" ? "active" : ""}
              onClick={handleLinkClick}>
              RESERVE
            </Link>
          </li>
          <li>
            <Link
              to="/sobre"
              className={pathname === "/sobre" ? "active" : ""}
              onClick={handleLinkClick}>
              SOBRE NÓS
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
