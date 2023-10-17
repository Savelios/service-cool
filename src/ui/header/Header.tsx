import React, { useState, useEffect, useRef } from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";
import burger from '../../assets/burger.png'

export function Header() {
  const navigate = useNavigate();

  const [underlinedLabel, setUnderlinedLabel] = useState("");
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (route: string) => {
    navigate(route);
  };

  const handleLabelClick = (label: string) => {
    setUnderlinedLabel(label);
    navigate("/" + label);
  };

  const handleDocumentClick = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setUnderlinedLabel("");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <React.Fragment>
      <div className="header">
        <h1 className="header-text-logo" onClick={() => handleClick("/")}>
          HYDRO MINIG
        </h1>
        <div ref={menuRef} className="menu-container">
          <label
            className={`menu-label ${
              underlinedLabel === "" ? "underlined" : ""
            }`}
            onClick={() => handleLabelClick("")}
          >
            О НАС
          </label>
          <label
            className={`menu-label ${
              underlinedLabel === "gallery" ? "underlined" : ""
            }`}
            onClick={() => handleLabelClick("gallery")}
          >
            ГАЛЕРЕЯ
          </label>
          <label
            className={`menu-label ${
              underlinedLabel === "contacts" ? "underlined" : ""
            }`}
            onClick={() => handleLabelClick("contacts")}
          >
            КОНТАКТЫ
          </label>
        </div>
        <img className="header-burger" src={burger} alt="" />
      </div>
    </React.Fragment>
  );
}
