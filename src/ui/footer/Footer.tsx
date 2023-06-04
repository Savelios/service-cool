import React from "react";
import './footer.css'

export function Footer() {
    return (
        <React.Fragment>
            <div className="footer">
                <h1 className="footer-logo">HYDRO-MINIG</h1>
                <h1 className="contacts-text">п. Санамер ул. Микояна 162</h1>
                <button className="order-btn">ЗАКАЗАТЬ</button>
            </div>
        </React.Fragment>
    );
}