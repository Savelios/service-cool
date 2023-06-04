import React from "react";
import './footer.css'
import logo from "../../assets/logo.png";

export function Footer() {
    return (
        <React.Fragment>
            <div className="footer">
                <h1 className="footer-text-logo">HM</h1>
                <img src={logo} className="footer-img-logo" alt="logo" />
                <h1 className="contacts-text">п. Санамер ул. Микояна 162</h1>
                <button className="order-btn">ЗАКАЗАТЬ</button>
            </div>
        </React.Fragment>
    );
}