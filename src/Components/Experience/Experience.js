import "./Experience.css";

const Experience = () => {
  const handleScrollDown = () => {
    const nextSection = document.getElementById("third-section");
    if (nextSection) {
      const sectionTop =
        nextSection.getBoundingClientRect().top + window.pageYOffset;
      const offset = 90;
      window.scrollTo({
        top: sectionTop - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="next-section"
      className="experience">
      <div className="experience-content">
        <h1 className="experience-title">
          Quinta da <span className="highlight">Magarenha</span> – O Sabor
          Autêntico de Portugal em Viseu
          <div className="underscore" />
        </h1>
        <p className="experience-text">
          Na encantadora cidade de Viseu, a Quinta da Magarenha convida-o a
          mergulhar numa verdadeira viagem pelos sabores da tradição portuguesa.
          Instalado numa quinta acolhedora, onde o charme rústico se encontra
          com a hospitalidade calorosa, este restaurante é um refúgio para os
          amantes da boa mesa e da autenticidade.
          <br />
          <br />
          Aqui, cada prato é uma celebração da herança gastronómica portuguesa —
          preparado com ingredientes frescos, receitas de família e um toque de
          carinho que se sente em cada garfada. Do bacalhau no forno às carnes
          grelhadas, passando por sopas caseiras e sobremesas conventuais, tudo
          é servido com generosidade e alma.
          <br />
          <br />
          A experiência vai além do paladar: é um momento de partilha, tradição
          e bem-estar. Com um ambiente familiar e vistas envolventes, a Quinta
          da Magarenha é o lugar ideal para encontros entre amigos, jantares em
          família ou momentos especiais a dois.
          <br />
          <br />
          Descubra o sabor da tradição. Viva Portugal à mesa.
        </p>
      </div>

      {/* Overlay no rodapé do Experience */}
      <div className="experience-overlay">
        <button
          className="scroll-button"
          onClick={handleScrollDown}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Experience;
