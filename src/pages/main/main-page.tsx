import React, { useState } from "react";
import "./main-page.css";
import miner from "../../assets/miner.png";
import miner_1 from "../../assets/minere-bg.ai_1.png";
import miner_2 from "../../assets/minere-bg.ai_2.png";
import miner_3 from "../../assets/minere-bg.ai_3.png";
import miner_4 from "../../assets/minere-bg.ai_4.png";

import leftBtn from "../../assets/left-btn.png";
import rightBtn from "../../assets/right-btn.png";

export function MainPage() {
  const images = [miner_1, miner_2, miner_3, miner_4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="main">
      <div className="content-container">
        <div className="img-container">
          <a id="btn" className="previus-btn" onClick={prevImage}>
            &#8249;
          </a>
          <img
            src={images[currentImageIndex]}
            className="miner-logo"
            alt="miner"
          />
          <a id="btn" className="next-btn" onClick={nextImage}>
            &#8250;
          </a>{" "}
        </div>
        <div className="text-container">
          <p className="text">
            Погрузитесь в мир передовых технологий охлаждения с нашим водяным
            блоком "AquaCooler Pro".<br></br> <br></br> Разработанный для
            максимальной эффективности и производительности, этот блок
            предлагает непревзойденные возможности охлаждения для вашего
            ASIC-майнера.
            <br></br>
            <br></br>Он оборудован высокоплотной медной основой, специально
            разработанной для оптимального теплопередачи. Благодаря своей
            инновационной конструкции и точным рассеивающим каналам, блок
            обеспечивает эффективное удаление тепла, позволяя вашему
            ASIC-майнеру работать на пиковой производительности.<br></br>
            <br></br>
            Выберите "AquaCooler Pro" и дайте вашему ASIC-майнеру мощный и
            надежный инструмент охлаждения. Расширьте возможности вашего
            майнинга, повысьте эффективность и снизьте риски перегрева с нашим
            передовым водяным блоком "AquaCooler Pro". Будьте уверены в
            стабильной и продуктивной работе вашего майнингового оборудования!
          </p>
        </div>
      </div>
    </div>
  );
}
