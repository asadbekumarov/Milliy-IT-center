import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Notfound from "./components/notFound/Notfound";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import AboutUs from "./components/aboutUs/aboutUs";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <>
              <Hero />
              <Services />
              <AboutUs />
              <Portfolio />
            </>
          }
        />
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  );
}

export default App;
