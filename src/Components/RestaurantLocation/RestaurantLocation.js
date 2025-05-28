import "./RestaurantLocation.css";

const RestaurantLocation = () => {
  // Parâmetros de consulta para o Google Maps
  const mapQuery = "Quinta da Magarenha, Viseu, Portugal";
  const embedSrc = `https://maps.google.com/maps?q=${mapQuery}&z=15&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;

  const handleMapClick = () => {
    window.open(directionsUrl, "_blank");
  };

  return (
    <section className="restaurant-location">
      {/* Seção de Endereço */}
      <h2 className="section-title">LOCAL</h2>
      <p className="address">Nó 20 A25, 3505-577 Viseu</p>
      

      {/* Mapa incorporado clicável */}
      <div
        onClick={handleMapClick}
        className="map-container"
        role="button"
        aria-label="Clique para ver rotas no Google Maps">
        <iframe
          title="Mapa do Restaurante"
          src={embedSrc}
          className="map-iframe"
          allowFullScreen
          loading="lazy"
        />
      </div>

      {/* Horário de Funcionamento */}
      <h2 className="section-title">HORÁRIO DE FUNCIONAMENTO</h2>
      <ul className="hours-list">
        <li>
          <span className="day">terça-feira:</span> 12:00–15:00, 19:00–22:00
        </li>
        <li>
          <span className="day">quarta-feira:</span> 12:00–15:00, 19:00–22:00
        </li>
        <li>
          <span className="day">quinta-feira:</span> 12:00–15:00, 19:00–22:00
        </li>
        <li>
          <span className="day">sexta-feira:</span> 12:00–15:00, 19:00–22:00
        </li>
        <li>
          <span className="day">sábado:</span> 12:00–15:00, 19:00–22:00
        </li>
        <li>
          <span className="day">domingo:</span> 12:00–15:00 (fechado ao 1º
          domingo do mês)
        </li>
        <li>
          <span className="day">segunda-feira:</span> Fechado
        </li>
      </ul>
      <h2 className="section-title">CONTATO</h2>
      <p className="address">Telefone: 232 479 106</p>
    </section>
  );
};

export default RestaurantLocation;
