import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Notfound from "./components/notFound/Notfound";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ScrollToTopButton from "./components/scrollToTopButton/ScrollToTopButton";
import ScrollToTop from "./components/scrollToTopButton/ScrollToTop";
import AnalyticsWrapper from "./components/analytics/Analytics";
import LazyLoad, {
  LazyHome,
  LazyServices,
  // LazyAbout,
  LazyCommunication,
  LazyPortfolio,
  LazyBlog,
  LazyPrice,
  LazyAboutPage,
  LazyOurTeam,
  LazyNews,
  LazyPartners
} from "./components/lazyLoad/LazyLoad";

function App() {
  return (
    <HelmetProvider>
      <AnalyticsWrapper measurementIds={['G-XXXXXXXXXX']}>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={
            <LazyLoad>
              <LazyHome />
            </LazyLoad>
          } />
          <Route path="service" element={
            <LazyLoad>
              <LazyServices />
            </LazyLoad>
          } />
          <Route path="communication" element={
            <LazyLoad>
              <LazyCommunication />
            </LazyLoad>
          } />
          <Route path="portfolio" element={
            <LazyLoad>
              <LazyPortfolio />
            </LazyLoad>
          } />
          <Route path="blog" element={
            <LazyLoad>
              <LazyBlog />
            </LazyLoad>
          } />
          <Route path="price" element={
            <LazyLoad>
              <LazyPrice />
            </LazyLoad>
          } />
          <Route path="aboutPage" element={
            <LazyLoad>
              <LazyAboutPage />
            </LazyLoad>
          } />
          <Route path="ourTeam" element={
            <LazyLoad>
              <LazyOurTeam />
            </LazyLoad>
          } />
          <Route path="news" element={
            <LazyLoad>
              <LazyNews />
            </LazyLoad>
          } />
          <Route path="partners" element={
            <LazyLoad>
              <LazyPartners />
            </LazyLoad>
          } />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <ScrollToTopButton />
        <Footer />
      </AnalyticsWrapper>
    </HelmetProvider>
  );
}

export default App;
