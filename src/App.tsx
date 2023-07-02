import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './ui/header/Header';
import { Footer } from './ui/footer/Footer';
import { ContactsPage } from './pages/contacts/contacts';
import './App.css'
import "./assets/fonts/fonts.css";
import "./index.css";
import "./assets/fonts/FuturaNewLight-Reg.woff";
import "./assets/fonts/FuturaNewLight-Reg.ttf";
import { AboutPage } from './pages/about/about-page';
import { GalleryPage } from './pages/gallery/gallery-page';
import { GalleryView } from './components/view/gallery/gallery-view';
import { AboutView } from './components/view/about/about-view';
import { MainPage } from './pages/main/main-page';
import OrderForm from './components/form/order-form';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/main" element={<MainPage />} />\
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        {/* Views */}
        <Route path="/gallery-view" element={<GalleryView />} />
        <Route path="/contacts-view" element={<AboutView />} />
        {/* Forms */}
        <Route path="/order-form" element={<OrderForm onCloseModal={handleCloseModal} />} />

      </Routes>
      <Footer onOpenModal={handleOpenModal} route={""} />
      {isModalOpen && <OrderForm onCloseModal={handleCloseModal} />}

    </BrowserRouter>
  );
}

export default App;
