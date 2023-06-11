import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/main/Main';
import { Header } from './ui/header/Header';
import { Footer } from './ui/footer/Footer';
import { ContactsPage } from './pages/contacts/contacts';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/contacts" element={<ContactsPage />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
