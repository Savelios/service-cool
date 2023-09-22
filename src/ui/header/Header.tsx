import React, { useState, useEffect, useRef } from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";

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
    // Проверяем, был ли клик вне меню
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setUnderlinedLabel(""); // Сбрасываем подчеркивание
    }
  };

  useEffect(() => {
    // Добавляем обработчик события для клика на документе
    document.addEventListener("click", handleDocumentClick);

    return () => {
      // Удаляем обработчик события при размонтировании компонента
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <React.Fragment>
      <div className="header">
        <h1 className="header-text-logo" onClick={() => handleClick("/main")}>
          HYDRO MINIG
        </h1>
        <div ref={menuRef} className="menu-container">
          <label
            className={`menu-label ${
              underlinedLabel === "about" ? "underlined" : ""
            }`}
            onClick={() => handleLabelClick("about")}
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
      </div>
    </React.Fragment>
  );
}
