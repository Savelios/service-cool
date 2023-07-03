import React from "react";
import './footer.css'
import logo from "../../assets/logo.png";

type FooterProps = {
    route: string;
    onOpenModal: () => void;
    className?: string;
};

export const Footer: React.FC<FooterProps> = ({ route, onOpenModal, className }) => {
    return (
        <React.Fragment>
            <div className="footer">
                <h1 className="footer-text-logo">HM</h1>
                {/* <img src={logo} className="footer-img-logo" alt="logo" /> */}
                <h1 className="footer-copy-rights">2023 - Все права защищены.</h1>
                <h1 className="contacts-text">п. Санамер ул. Микояна 162</h1>
                <button className="order-btn" onClick={onOpenModal}>ЗАКАЗАТЬ</button>
            </div>
        </React.Fragment>
    );
}