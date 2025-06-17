import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Analytics from 'analytics';
import googleAnalytics from '@analytics/google-analytics'; // <-- bu qator yetishmayapti

// Initialize analytics
const analytics = Analytics({
    app: 'Milliy IT Center',
    plugins: [
        googleAnalytics({
            measurementIds: ['G-XXXXXXXXXX'], // Google Analytics ID ni to‘g‘ri kiriting
        })
    ]
});

const AnalyticsWrapper = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        analytics.page(); // Har safar sahifa o‘zgarganda page view yuboradi
    }, [location]);

    return children;
};

export default AnalyticsWrapper;
