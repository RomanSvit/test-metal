import "./CarouselBox.scss";
import React, { useState, useEffect, useCallback } from "react";

const PAGE_WIDTH = 1360;

function CarouselBox({ data }) {
    const [offset, setOffset] = useState(0);

    const timer = useCallback(() => {
        setOffset(offset - PAGE_WIDTH);
    }, [offset]);

    useEffect(() => {
        if (offset === -4080) {
            setOffset(0);
        }
        const id = setInterval(timer, 6000);
        return () => clearInterval(id);
    }, [timer, offset]);

    return (
        <div className="carousel-block">
            <div
                className="carousel"
                style={{
                    transform: `translateX(${offset}px)`,
                }}
            >
                <div className="carousel-item picture1"></div>
                <div className="carousel-item picture2"></div>
                <div className="carousel-item picture3"></div>
            </div>
            <div className="banner">
                <p className="banner-text">{data.data.banner}</p>
            </div>
            <ul className="block-slide">
                <li
                    className={
                        offset === 0
                            ? "block-slide-indicator active-slide"
                            : "block-slide-indicator"
                    }
                    onClick={() => setOffset(0)}
                ></li>
                <li
                    className={
                        offset === -1360
                            ? "block-slide-indicator active-slide"
                            : "block-slide-indicator"
                    }
                    onClick={() => setOffset(-1360)}
                ></li>
                <li
                    className={
                        offset === -2720
                            ? "block-slide-indicator active-slide"
                            : "block-slide-indicator"
                    }
                    onClick={() => setOffset(-2720)}
                ></li>
            </ul>
        </div>
    );
}

export default CarouselBox;
