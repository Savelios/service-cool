import React from "react";
import './main.css'
import miner from "../../assets/miner.png";


export function MainPage() {
    return (
        <div className="main">
            <div className="img-container">
                <img src={miner} className="miner-logo" alt="miner" />
            </div>
            <div className="text-container">
                <p className="text">Погрузитесь в мир передовых технологий охлаждения с нашим водяным блоком "AquaCooler Pro".<br></br> <br></br> Разработанный для максимальной эффективности и производительности, этот блок предлагает непревзойденные возможности охлаждения для вашего ASIC-майнера.<br></br>

                    "AquaCooler Pro" является вершиной инженерного искусства. <br></br><br></br>Он оборудован высокоплотной медной основой, специально разработанной для оптимального теплопередачи. Благодаря своей инновационной конструкции и точным рассеивающим каналам, блок обеспечивает эффективное удаление тепла, позволяя вашему ASIC-майнеру работать на пиковой производительности.<br></br><br></br>

                    Выберите "AquaCooler Pro" и дайте вашему ASIC-майнеру мощный и надежный инструмент охлаждения. Расширьте возможности вашего майнинга, повысьте эффективность и снизьте риски перегрева с нашим передовым водяным блоком "AquaCooler Pro". Будьте уверены в стабильной и продуктивной работе вашего майнингового оборудования!</p>
            </div>
        </div>
    );
}