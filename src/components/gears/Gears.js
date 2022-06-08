import React, { useEffect, useState } from "react";

import "./Gears.scss";

function Gears() {
    const [position, setPosition] = useState(0);
    useEffect(() => {
        document.addEventListener("scroll", scrollHandler);
        return () => {
            document.removeEventListener("scroll", scrollHandler);
        };
    }, []);
    const scrollHandler = (e) => {
        setPosition(e.target.documentElement.scrollTop);
    };

    return (
        <div className="block-gears">
            <div
                className="service-gear1"
                style={{
                    backgroundImage: `url(/assets/image/VectorBig.png)`,
                    transform: `rotate(${position / 2}deg)`,
                }}
            ></div>
            <div
                className="service-gear2"
                style={{
                    backgroundImage: `url(/assets/image/VectorBig.png)`,
                    transform: `rotate(${position / 3}deg)`,
                }}
            ></div>
            <div
                className="service-gear3"
                style={{
                    backgroundImage: `url(/assets/image/VectorSmall.png)`,
                    transform: `rotate(${position / 2}deg)`,
                }}
            ></div>
            <div
                className="service-gear4"
                style={{
                    backgroundImage: `url(/assets/image/VectorSmall.png)`,
                    transform: `rotate(${position / 3}deg)`,
                }}
            ></div>
        </div>
    );
}

export default Gears;
