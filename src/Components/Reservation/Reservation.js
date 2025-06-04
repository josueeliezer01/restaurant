import { useRef, useState, useEffect } from "react";
import emailjs, { init } from "emailjs-com";
import "./Reservation.css";

const Reservation = () => {
  const formRef = useRef();
  const [status, setStatus] = useState(null);

  useEffect(() => {
    init(process.env.REACT_APP_EMAILJS_USER || "s74KM-SUQ_Y6RE29W");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_1m49tvn",
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_4mkdjvh",
        formRef.current,
        process.env.REACT_APP_EMAILJS_USER || "s74KM-SUQ_Y6RE29W"
      )
      .then(() => {
        setStatus("SUCCESS");
        formRef.current.reset();
      })
      .catch(() => {
        setStatus("ERROR");
      });
  };

  return (
    <div className="reservation-container">
      <h2>Faça sua Reserva</h2>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="reservation-form">
        <label>
          Reserva em nome de:
          <input
            type="text"
            name="user_name"
            required
          />
        </label>

        <label>
          Total de convidados:
          <input
            type="number"
            name="guests"
            min="1"
            required
          />
        </label>

        <label>
          Data:
          <input
            type="date"
            name="date"
            required
          />
        </label>

        <label>
          Hora:
          <input
            type="time"
            name="time"
            required
          />
        </label>

        <label>
          Observações:
          <textarea
            name="notes"
            rows="4"
          />
        </label>

        <label>
          Telefone para contato:
          <input
            type="tel"
            name="phone"
            required
          />
        </label>

        <button type="submit">Enviar Reserva</button>

        {status === "SUCCESS" && (
          <p className="success">Reserva enviada com sucesso!</p>
        )}
        {status === "ERROR" && (
          <p className="error">Ocorreu um erro. Tente novamente.</p>
        )}
      </form>
    </div>
  );
};

export default Reservation;
