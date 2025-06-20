//  * LazyLoad komponenti: 
//  * 
//  * Bu komponent React’ning `Suspense` va `lazy` funksiyalarini ishlatib, sahifalarni lazy loading
//     * (faqat kerak bo‘lganda yuklash) orqali optimallashtiradi.
//  * 
//  * Foydalanuvchi sahifani ochganda, kerakli komponentlar faqat o‘sha vaqtda yuklanadi. 
//  * Yuklanish jarayonida `Suspense` orqali foydalanuvchiga loading spinner ko‘rsatiladi. 
//  * Bu sahifa yuklanish vaqtini kamaytiradi va foydalanuvchi tajribasini yaxshilaydi.
//  * 
//  * Asosan, yirik loyihalarda saytning tez yuklanishiga va resurslarni samarali ishlatishga yordam beradi.

    import { Suspense, lazy } from 'react';

const LazyLoad = ({ children }) => {
    return (
        <Suspense fallback={
            <div className="flex items-center justify-center min-h-[200px]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#539c9f]"></div>
            </div>
        }>
            {children}
        </Suspense>
    );
};

// Lazy load components
export const LazyHome = lazy(() => import('../../pages/home/Home'));
export const LazyServices = lazy(() => import('../../pages/servicesPage/ServicesPage'));
export const LazyAbout = lazy(() => import('../../pages/weAbout/weAbout'));
export const LazyCommunication = lazy(() => import('../../pages/communication/Communication'));
export const LazyPortfolio = lazy(() => import('../../pages/portfolioPage/Portfolio'));
export const LazyBlog = lazy(() => import('../../pages/blogPage/Blog'));
export const LazyPrice = lazy(() => import('../../pages/pricePage/Price'));
export const LazyAboutPage = lazy(() => import('../../pages/aboutPage/AboutPage'));
export const LazyOurTeam = lazy(() => import('../../pages/ourTeam/OurTeam'));
export const LazyNews = lazy(() => import('../../pages/news/News'));
export const LazyPartners = lazy(() => import('../../pages/partners/Partners'));

export default LazyLoad; 