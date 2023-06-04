import React from "react";
import './header.css'

export function Header() {
    return (
        <React.Fragment>
            <div className="header">
                <h1 className="header-logo">HYDRO-MINIG</h1>
                <label className="about-us-label" htmlFor="">О НАС</label>
                <label className="gallery-label" htmlFor="">ГАЛЕРЕЯ</label>
                <label className="contacts-label" htmlFor="">КОНТАКТЫ</label>
            </div>
        </React.Fragment>
    );
}