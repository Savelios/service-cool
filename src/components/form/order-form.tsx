import React, { ReactNode, useState } from "react";
import "./order-form.css";
import closeIcon from "../../assets/close-form-btn.png";
import axios from "axios";

type ModalProps = {
  onCloseModal: () => void;
};

const OrderForm: React.FC<ModalProps> = ({ onCloseModal }) => {
  const [username, setUsername] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // const data = {username: username, phonenumber: phonenumber};

    // axios.post("http://localhost:3001/register", data)

    try {
      const response = await axios.post("http://localhost:3001/send-message", {
        username,
        phonenumber,
      });

      setResponseMessage(response.data.message);
    } catch (error) {
      console.error(error);
      setResponseMessage("Произошла ошибка при отправке сообщения.");
    }

    setLoading(false);
  };

  return (
    <>
      <div className="main-order-container">
        <div className="order-container">
          <form onSubmit={handleSubmit}>
            <img
              className="close-form-button"
              src={closeIcon}
              alt=""
              onClick={onCloseModal}
            />
            <h2 className="order-title">
              Оставьте вашу заявку и мы с Вами обязательно свяжемся!
            </h2>
            <div className="input-items-main-container">
              <div className="input-items-container">
                <label className="name-prefix-label" htmlFor="uname">
                  ПРЕДСТАВЬТЕСЬ ПОЖАЛУЙСТА
                </label>
                <input
                  type="text"
                  className="name-input"
                  id="uname"
                  placeholder="ФИО"
                  required
                  minLength={2}
                  maxLength={36}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label className="phone-prefix-label" htmlFor="phone">
                  ТЕЛЕФОН
                </label>
                <input
                  type="text"
                  className="phone-input"
                  id="phone"
                  placeholder="+7 ( - - - ) - - -  - -  - -"
                  required
                  minLength={10}
                  maxLength={18}
                  value={phonenumber}
                  onChange={(e) => setPhonenumber(e.target.value)}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="form-order-button"
                >
                  Оставить заявку
                </button>
              </div>
            </div>
          </form>
          {responseMessage && <p>{responseMessage}</p>}
        </div>
      </div>
    </>
  );
};
export default OrderForm;
