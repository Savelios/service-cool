import React from "react";
import './header.css'
import logo from "../../assets/logo.png";

export function Header() {
    return (
        <React.Fragment>
            <div className="header">
                <h1 className="header-text-logo">HYDRO MINIG</h1>
                <img src={logo} className="header-img-logo" alt="logo" />
                <label className="about-us-label" htmlFor="">О НАС</label>
                <label className="gallery-label" htmlFor="">ГАЛЕРЕЯ</label>
                <label className="contacts-label" htmlFor="">КОНТАКТЫ</label>
            </div>
        </React.Fragment>
    );
}