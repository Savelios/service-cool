import React, { ReactNode } from "react";
import "./order-form.css";
import closeIcon from "../../assets/close-form-btn.png"

type ModalProps = {
    onCloseModal: () => void;
};

const OrderForm: React.FC<ModalProps> = ({ onCloseModal }) => {
    return (
        <>
            <div className="main-order-container"  >
                <div className="order-container">
                    <img className="close-form-button" src={closeIcon} alt="" onClick={onCloseModal} /> 
                    <h2 className="order-title">Оставьте вашу заявку и мы с Вами обязательно свяжемся!</h2>
                    <div className="input-items-main-container">
                        <div className="input-items-container">
                            <label className="name-prefix-label" htmlFor="uname">
                                ПРЕДСТАВЬТЕСЬ ПОЖАЛУЙСТА
                            </label>
                            <input
                                type="text"
                                id="uname"
                                placeholder="ФИО"
                                className="name-input"
                                required
                                minLength={2}
                                maxLength={18}
                            ></input>
                            <label className="phone-prefix-label" htmlFor="phone">
                                ТЕЛЕФОН
                            </label>
                            <input
                                type="text"
                                id="phone"
                                placeholder="+7 ( - - - ) - - -  - -  - -"
                                className="phone-input"
                                required
                                minLength={11}
                                maxLength={11}
                            ></input>
                            <button className="form-order-button">Оставить заявку</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default OrderForm;
