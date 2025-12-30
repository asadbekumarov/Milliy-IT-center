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

const AnalyticsWrapper = ({ children, measurementIds }) => {
    const location = useLocation();

    const isValidIds = Array.isArray(measurementIds) && measurementIds.length > 0 &&
        measurementIds.every((id) => typeof id === 'string' && id.startsWith('G-') && id !== 'G-XXXXXXXXXX');

    useEffect(() => {
        if (!isValidIds) return;
        const analytics = Analytics({
            app: 'Milliy IT Center',
            plugins: [
                googleAnalytics({ measurementIds })
            ]
        });
        analytics.page();
    }, [location, isValidIds, measurementIds]);

    return children;
};

export default AnalyticsWrapper;
