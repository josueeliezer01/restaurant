import "./Footer.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo */}
        <div className="logo">
          <Link
            to="/"
            aria-label="Página Inicial">
            <Logo />
          </Link>
        </div>

        {/* Informação de contato */}
        <div className="info">
          <p>Nó 20 (A25, 3505-577 – Viseu)</p>
          <p>Telefone: 232 479 106</p>
        </div>

        {/* Ícones sociais */}
        <div className="social">
          <a
            href="https://www.facebook.com/quintadamagarenha/"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              shape-rendering="geometricPrecision"
              text-rendering="geometricPrecision"
              image-rendering="optimizeQuality"
              fillRule="evenodd"
              clipRule="evenodd"
              viewBox="0 0 509 509"
              className="icon-facebook">
              <g fillRule="nonzero">
                <path
                  fill="#0866FF"
                  d="M509 254.5C509 113.94 395.06 0 254.5 0S0 113.94 0 254.5C0 373.86 82.17 474 193.02 501.51V332.27h-52.48V254.5h52.48v-33.51c0-86.63 39.2-126.78 124.24-126.78 16.13 0 43.95 3.17 55.33 6.33v70.5c-6.01-.63-16.44-.95-29.4-.95-41.73 0-57.86 15.81-57.86 56.91v27.5h83.13l-14.28 77.77h-68.85v174.87C411.35 491.92 509 384.62 509 254.5z"
                />
                <path
                  fill="#fff"
                  d="M354.18 332.27l14.28-77.77h-83.13V227c0-41.1 16.13-56.91 57.86-56.91 12.96 0 23.39.32 29.4.95v-70.5c-11.38-3.16-39.2-6.33-55.33-6.33-85.04 0-124.24 40.16-124.24 126.78v33.51h-52.48v77.77h52.48v169.24c19.69 4.88 40.28 7.49 61.48 7.49 10.44 0 20.72-.64 30.83-1.86V332.27h68.85z"
                />
              </g>
            </svg>
          </a>
          <a
            href="https://www.tripadvisor.pt/Restaurant_Review-g189149-d2715100-Reviews-Restaurante_Quinta_da_Magarenha-Viseu_Viseu_District_Northern_Portugal.html"
            aria-label="TripAdvisor"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1333.31 1333.31"
              shape-rendering="geometricPrecision"
              text-rendering="geometricPrecision"
              image-rendering="optimizeQuality"
              fillRule="evenodd"
              clipRule="evenodd"
              className="icon-tripadvisor">
              <g fillRule="nonzero">
                <circle
                  cx="666.66"
                  cy="666.66"
                  r="666.66"
                  fill="#34e0a1"
                />
                <path d="M1078.42 536.6l80.45-87.52h-178.4c-89.31-61.01-197.17-96.54-313.81-96.54-116.5 0-224.06 35.61-313.22 96.54H174.6l80.44 87.52c-49.31 44.99-80.22 109.8-80.22 181.75 0 135.79 110.09 245.88 245.88 245.88 64.51 0 123.27-24.88 167.14-65.55l78.81 85.81 78.81-85.73c43.87 40.67 102.57 65.47 167.07 65.47 135.79 0 246.03-110.09 246.03-245.88.07-72.03-30.84-136.83-80.15-181.75zM420.77 884.75c-91.92 0-166.4-74.48-166.4-166.4s74.49-166.4 166.4-166.4c91.92 0 166.4 74.49 166.4 166.4 0 91.91-74.49 166.4-166.4 166.4zm245.96-171.24c0-109.5-79.63-203.5-184.73-243.65 56.84-23.76 119.18-36.94 184.66-36.94 65.47 0 127.89 13.18 184.73 36.94-105.02 40.23-184.65 134.15-184.65 243.65zm245.88 171.24c-91.92 0-166.4-74.48-166.4-166.4s74.49-166.4 166.4-166.4c91.92 0 166.4 74.49 166.4 166.4 0 91.91-74.49 166.4-166.4 166.4zm0-253.7c-48.2 0-87.23 39.03-87.23 87.23 0 48.19 39.03 87.22 87.23 87.22 48.19 0 87.22-39.03 87.22-87.22 0-48.12-39.03-87.23-87.22-87.23zM508 718.35c0 48.19-39.03 87.22-87.23 87.22-48.19 0-87.22-39.03-87.22-87.22 0-48.2 39.03-87.23 87.22-87.23 48.19-.07 87.23 39.03 87.23 87.23z" />
              </g>
            </svg>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Quinta da Magarenha. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
