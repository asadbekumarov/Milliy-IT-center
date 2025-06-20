//  * AnalyticsWrapper komponenti:
//  * 
//  * Bu komponent Google Analytics'ni sahifalarga tashrif buyurish uchun ishlatadi. 
//  * Foydalanuvchi sahifaga har safar o‘tganida, sahifa ko‘rinishlari (`pageview`) Analytics 
//  * tizimiga yuboriladi.
//  * 
//  * `useLocation` hooki yordamida, foydalanuvchi sahifasini o‘zgartirganida har safar 
//  * `analytics.page()` orqali yangi sahifa ko‘rinishini Google Analyticsga yuboradi.


import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Analytics from 'analytics';
import googleAnalytics from '@analytics/google-analytics';

// Initialize analytics
const analytics = Analytics({
    app: 'Milliy IT Center',
    plugins: [
        googleAnalytics({
            measurementIds: ['G-XXXXXXXXXX'],
        })
    ]
});

const AnalyticsWrapper = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        analytics.page();
    }, [location]);

    return children;
};

export default AnalyticsWrapper;
