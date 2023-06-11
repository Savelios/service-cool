import React from "react";
import './header.css'
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

export function Header() {
    const navigate = useNavigate();

    return (
        <React.Fragment>
            <div className="header">
                <h1 className="header-text-logo" onClick={() => navigate('/main')}
                >HYDRO MINIG</h1>
                <img src={logo} className="header-img-logo" alt="logo" />
                <label className="about-us-label" htmlFor="" onClick={() => navigate('/about')}
                >О НАС</label>
                <label className="gallery-label" htmlFor="" onClick={() => navigate('/gallery')}
                >ГАЛЕРЕЯ</label>
                <label className="contacts-label" htmlFor="" onClick={() => navigate('/contacts')}
                >КОНТАКТЫ</label>
            </div>
        </React.Fragment>
    );
}