import React from "react";
import './contacts.css'
import 'animate.css';

import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export function ContactsPage() {
    const defaultState = {
        center: [44.0455121, 42.8575232],
        zoom: 10,
    };

    return (
        <div className="contacts-page">
            <div className="contacts-container">
                <div className="map-container">
                    <YMaps>
                        <Map defaultState={defaultState} width={390} height={240} >
                            <Placemark geometry={[44.0455121, 42.8575232]} />
                        </Map>
                    </YMaps>
                </div>
                <div className="contacts-info-container">
                    <p className="contacts-phone-label">Телефон:</p>
                    <p className="contacts-phone-number">+7-909-00-18-90</p>
                    <div className="social-media-container">
                        <img className="telegram-sc" src="" alt="" />
                        <img className="whatsapp-sc" src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}