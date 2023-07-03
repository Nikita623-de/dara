import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Footer from './components/Footer';
import Header from './components/Header';
import { Modal } from './components/Modal';
import AboutPage from './pages/About';
import ContactsPage from './pages/Contacts';
import Home from './pages/Home';

import './scss/app.scss';
import AutoService from './pages/AutoService';
import TireService from './pages/TireService';
import TireStorage from './pages/TireStorage';
import TiresWheels from './pages/TiresWheels';
import AutoShop from './pages/AutoShop';
import ProductPage from './pages/ProductPage';
import Admin from './pages/Admin';
import DiskShop from './pages/DiskShop';
import DiskPage from './pages/DiskPage';
import { adminPasswordPageUrl, adminPasswordUrl } from './var';
import PageAdmin from './components/PageAdmin';

function App() {
  const [modalActive, setModalActive] = React.useState(false);
  return (
    <div className="site-container">
      <Helmet>
        <title>Шины и диски - купить в интернет магазине "Вам колёса"</title>
        <meta
          name="description"
          content="В интернет магазине 'Вам колёса' представлен огромный ассортимент шин и дисков. Техобслуживание и ремонт от профессиональных мастеров с гарантией."
        />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="%PUBLIC_URL%/favicon.ico" />
      </Helmet>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tire-service" element={<TireService setActive={setModalActive} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/service" element={<AutoService setActive={setModalActive} />} />
          <Route path="/tire-storage" element={<TireStorage setActive={setModalActive} />} />
          <Route path="/tire-wheels" element={<TiresWheels />} />
          <Route path="/auto-shop" element={<AutoShop />} />
          <Route path="/disk-shop" element={<DiskShop />} />
          <Route path="/product-info/:id" element={<ProductPage setActive={setModalActive} />} />
          <Route path="/disk-info/:id" element={<DiskPage setActive={setModalActive} />} />
          <Route path={`/${adminPasswordUrl}`} element={<Admin />} />
          <Route path={`/${adminPasswordPageUrl}`} element={<PageAdmin />} />
        </Routes>
      </main>
      <Footer />
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  );
}

export default App;
