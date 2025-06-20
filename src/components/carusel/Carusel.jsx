import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";

const Carousel = () => {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get("https://api.milliyitcenter.uz/api/companies", {
                headers: {
                    "ngrok-skip-browser-warning": "true",
                },
            })
            .then((response) => {
                setClients(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading clients</div>;

    return clients.length > 0 ? (
        <Slider {...settings}>
            {clients.map((client) => (
                <div key={client.id} className="px-2 pt-10">
                    <div className="h-full flex flex-col">
                        <img
                            src={client.logo}
                            alt="Client"
                            className="rounded-md object-contain max-w-[200px] py-3"
                        />
                    </div>
                </div>
            ))}
        </Slider>
    ) : (
        <div>No clients found.</div>
    );
};

export default Carousel;
