import React, { ReactNode, useEffect, useState } from "react";
import "./order-form.css";
import closeIcon from "../../assets/close-form-btn.png";
import axios from "axios";
import "animate.css";

type ModalProps = {
  onCloseModal: () => void;
};

const OrderForm: React.FC<ModalProps> = ({ onCloseModal }) => {
  const [username, setUsername] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [responseClass, setResponseClass] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [buttonClass, setButtonClass] = useState("");
  const [countdown, setCountdown] = useState(60); // Обратный отсчет
  const [successMessage, setSuccessMessage] = useState(""); // Добавляем состояние для сообщения об успешной отправке

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:3001/send-message", {
        username,
        phonenumber,
      });

      setResponseMessage(response.data.message);
      if (response.status === 200) {
        setResponseMessage(response.data.message);
        setResponseClass("success");
        setButtonClass("deactivate-button");
        setIsButtonDisabled(true);

        setTimeout(() => {
          setIsButtonDisabled(false);
          setButtonClass("");
          setResponseMessage("");
          setSuccessMessage("");
        }, 60000);
      } else {
        setResponseMessage(response.data.message);
        setButtonClass("deactivate-button");
        setResponseClass("error");
        setCountdown(60); // Сбросить обратный отсчет при ошибке
      }
    } catch (error) {
      console.error(error);
      setResponseMessage(
        "Произошла ошибка при отправке сообщения. Пожалуйста повторите через"
      );
      setButtonClass("deactivate-button");
      setResponseClass("error");
      setCountdown(60);
    }

    setLoading(false);
  };

  useEffect(() => {
    // Обновление обратного отсчета каждую секунду
    const timer = setInterval(() => {
      if (countdown > 0 && responseClass === "error") {
        setCountdown(countdown - 1);
      } else if (countdown === 0) {
        setIsButtonDisabled(false);
        setButtonClass("");
        setResponseMessage("");
        setSuccessMessage("");
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [countdown, responseClass]);

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
                  disabled={loading || isButtonDisabled} // Добавляем проверку на isButtonDisabled
                  className={`form-order-button ${buttonClass}`} // Применяем дополнительный класс
                >
                  Оставить заявку
                </button>
              </div>
            </div>
          </form>
          {(responseMessage || successMessage) && (
            <p className={`response-msg ${responseClass}`}>
              {responseMessage}{" "}
              {responseClass === "error" && `через ${countdown} сек.`}
              {successMessage} {/* Отображаем сообщение об успешной отправке */}
            </p>
          )}{" "}
        </div>
      </div>
    </>
  );
};
export default OrderForm;
