import React, { useState, useEffect, useRef } from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";
import burger from '../../assets/burger.png'
import { Modal } from "../modal/modal";

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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  const handleBurgerClick = () => {
    setIsModalOpen(true); // Открыть модальное окно при нажатии на бургер
    setIsMenuVisible(false); // Скрыть меню-контейнер
  }
  return (
    <React.Fragment>
      <div className="header">
        <h1 className="header-text-logo" onClick={() => handleClick("/")}>
          HYDRO MINIG
        </h1>
        <img className="header-burger" src={burger} alt="" onClick={handleBurgerClick} />
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div ref={menuRef} className="menu-container">
            <label
              className={`menu-label ${underlinedLabel === "" ? "underlined" : ""}`}
              onClick={() => handleLabelClick("")}
            >
              О НАС
            </label>
            <label
              className={`menu-label ${underlinedLabel === "gallery" ? "underlined" : ""}`}
              onClick={() => handleLabelClick("gallery")}
            >
              ГАЛЕРЕЯ
            </label>
            <label
              className={`menu-label ${underlinedLabel === "contacts" ? "underlined" : ""}`}
              onClick={() => handleLabelClick("contacts")}
            >
              КОНТАКТЫ
            </label>
          </div>
        </Modal>
      </div>
    </React.Fragment>
  );
}
