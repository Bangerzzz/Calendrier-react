import ReactDOM from "react-dom";
import "./NewEventModal.css";
import { useState } from "react";
import axios from "axios";

const NewEventModal = ({ setIsOpenModal }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const handleEventSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3002/events", {
      title: title,
      description: {
        text: text,
        time: time,
      },
      date: date,
    });
  };

  return ReactDOM.createPortal(
    <form
      className="new-event bg-secondary text-light rounded p-4"
      onSubmit={handleEventSubmit}
    >
      <h3 className="text-center mt-3">Enregister un rendez-vous</h3>
      <div className="container">
        <div className="mb-3 ">
          <label htmlFor="title" className="form-label">
            Titre
          </label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="time" className="form-label">
            Heure
          </label>
          <input
            type="time"
            className="form-control"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-between my-3">
          <button type="submit" className="btn btn-dark">
            Valider
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => setIsOpenModal(false)}
          >
            Annuler
          </button>
        </div>
      </div>
    </form>,
    document.getElementById("newEvent")
  );
};

export default NewEventModal;
