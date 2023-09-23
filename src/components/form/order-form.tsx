import React, { useEffect, useState } from "react";
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
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [responseClass, setResponseClass] = useState("");
  const [validationResponse, setValidationRespone] = useState("");

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [buttonClass, setButtonClass] = useState("");
  const [countdown, setCountdown] = useState(60);
  const [successMessage, setSuccessMessage] = useState("");

  const isValidEmail = (value: string) => {
    // Регулярное выражение для проверки email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(value);
  };

  // Функция для проверки валидности номера телефона
  const isValidPhoneNumber = (value: string) => {
    // Регулярное выражение для проверки номера телефона в формате "+7 (123) 456-7890"
    const phonePattern = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    return phonePattern.test(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Проверка валидности email и номера телефона
    if (!isValidEmail(email)) {
      setResponseMessage("Неправильный формат email.");
      setValidationRespone("validation-msg");
      setLoading(false);
      return;
    }

    if (!isValidPhoneNumber(phonenumber)) {
      setResponseMessage("Неправильный формат номера телефона.");
      setValidationRespone("validation-msg");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/send-message", {
        username,
        phonenumber,
        email,
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
        setCountdown(60);
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
                  id="input"
                  placeholder="ФИО"
                  required
                  minLength={2}
                  maxLength={36}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label className="email-prefix-label" htmlFor="email">
                  ПОЧТА
                </label>
                <input
                  type="text"
                  className="email-input"
                  id="input"
                  placeholder="E-mail"
                  required
                  minLength={1}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="phone-prefix-label" htmlFor="phone">
                  ТЕЛЕФОН
                </label>
                <input
                  type="text"
                  className="phone-input"
                  id="input"
                  placeholder="+7 ( - - - ) - - -  - -  - -"
                  required
                  minLength={10}
                  maxLength={18}
                  value={phonenumber}
                  onChange={(e) => setPhonenumber(e.target.value)}
                />
                <button
                  type="submit"
                  disabled={loading || isButtonDisabled}
                  className={`form-order-button ${buttonClass}`}
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
              {successMessage}
            </p>
          )}{" "}
          <p className={`response-msg ${validationResponse}`}></p>
        </div>
      </div>
    </>
  );
};
export default OrderForm;
