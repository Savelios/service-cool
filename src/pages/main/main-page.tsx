import React, { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./main-page.css";
import miner_1 from "../../assets/minere-bg.ai_1.png";
import miner_2 from "../../assets/minere-bg.ai_2.png";
import miner_3 from "../../assets/minere-bg.ai_3.png";
import miner_4 from "../../assets/minere-bg.ai_4.png";

export function MainPage() {
  const images = [miner_1, miner_2, miner_3, miner_4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [swipeDirection, setSwipeDirection] = useState("");
  const [isSwiping, setIsSwiping] = useState(false);
  const [touchMoveX, setTouchMoveX] = useState<number | null>(null);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX !== null) {
      const currentX = e.touches[0].clientX;
      setTouchMoveX(currentX);
    }
  };
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    setSwipeDirection("swipe-left");
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setSwipeDirection("swipe-right");
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX !== null && touchMoveX !== null) {
      const deltaX = touchStartX - touchMoveX;

      if (deltaX > 50) {
        prevImage();
      } else if (deltaX < -50) {
        nextImage();
      }
      setTouchMoveX(null);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        prevImage();
      } else if (event.key === "ArrowRight") {
        nextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      className={`main ${swipeDirection ? `swipe-${swipeDirection}` : ""}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="content-container">
        <TransitionGroup className="img-container">
          <a id="btn" className="previus-btn" onClick={prevImage}>
            &#8249;
          </a>
          <CSSTransition
            key={currentImageIndex}
            timeout={300}
            classNames={`image-transition-${swipeDirection}`}
          >
            <div
              className="image-wrapper"
              style={
                { "--touch-move-x": `${touchMoveX}px` } as React.CSSProperties
              }
            >
              <img
                src={images[currentImageIndex]}
                className="miner-logo"
                alt="miner"
              />
            </div>
          </CSSTransition>
          <a id="btn" className="next-btn" onClick={nextImage}>
            &#8250;
          </a>
        </TransitionGroup>

        <div className="text-container">
          <p className="text">
            Погрузитесь в мир передовых технологий охлаждения с нашим водяным
            блоком "HM Pro".<br></br> <br></br> Разработанный для максимальной
            эффективности и производительности, этот блок предлагает
            непревзойденные возможности охлаждения для вашего ASIC-майнера.
            <br></br>
            <br></br>Он оборудован высокоплотной медной основой, специально
            разработанной для оптимального теплопередачи. Благодаря своей
            инновационной конструкции и точным рассеивающим каналам, блок
            обеспечивает эффективное удаление тепла, позволяя вашему
            ASIC-майнеру работать на пиковой производительности.<br></br>
            <br></br>
            Выберите "HM Pro" и дайте вашему ASIC-майнеру мощный и надежный
            инструмент охлаждения. Расширьте возможности вашего майнинга,
            повысьте эффективность и снизьте риски перегрева с нашим передовым
            водяным блоком "HM Pro". Будьте уверены в стабильной и продуктивной
            работе вашего майнингового оборудования!
          </p>
        </div>
      </div>
    </div>
  );
}
