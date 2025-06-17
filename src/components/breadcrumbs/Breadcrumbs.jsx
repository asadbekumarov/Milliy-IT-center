import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    const getBreadcrumbName = (path) => {
        const names = {
            service: 'Xizmatlar',
            about: 'Biz haqimizda',
            communication: 'Aloqa',
            portfolio: 'Portfolio',
            blog: 'Blog',
            price: 'Narxlar',
            aboutPage: 'Kompaniya haqida',
            ourTeam: 'Bizning jamoa',
            news: 'Yangiliklar',
            partners: 'Hamkorlar'
        };
        return names[path] || path;
    };

    return (
        <nav className="bg-white py-3 px-4 shadow-sm">
            <div className="max-w-[1460px] mx-auto">
                <ol className="flex flex-wrap items-center space-x-2 text-sm">
                    <li>
                        <Link to="/" className="text-[#539c9f] hover:text-[#3b7f82]">
                            Bosh sahifaaaa
                        </Link>
                    </li>
                    {pathnames.map((value, index) => {
                        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                        const isLast = index === pathnames.length - 1;

                        return (
                            <li key={to} className="flex items-center">
                                <span className="mx-2 text-gray-500">/</span>
                                {isLast ? (
                                    <span className="text-gray-600 font-medium">
                                        {getBreadcrumbName(value)}
                                    </span>
                                ) : (
                                    <Link
                                        to={to}
                                        className="text-[#539c9f] hover:text-[#3b7f82]"
                                    >
                                        {getBreadcrumbName(value)}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </div>
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Bosh sahifa",
                                "item": "https://milliyitcenter.uz"
                            },
                            ...pathnames.map((value, index) => ({
                                "@type": "ListItem",
                                "position": index + 2,
                                "name": getBreadcrumbName(value),
                                "item": `https://milliyitcenter.uz/${pathnames.slice(0, index + 1).join('/')}`
                            }))
                        ]
                    })}
                </script>
            </Helmet>
        </nav>
    );
};

export default Breadcrumbs; 