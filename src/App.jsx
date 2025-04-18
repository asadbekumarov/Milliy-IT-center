import React from "react";
import { Route, Routes } from "react-router-dom";
import Notfound from "./components/notFound/Notfound";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ServicesPage from "./pages/servicesPage/ServicesPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="service" element={<ServicesPage />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
