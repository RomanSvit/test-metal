import React, { useState, useEffect } from "react";
import "./Slider.scss";

const arrImg = [
    "/image/Rectangle.png",
    "/image/Rectangle25.png",
    "/image/Rectangle26.png",
];
const Slider = () => {
    const [activSlide, setActiveSlide] = useState(0);
    const [count, setCount] = useState(0);
    const [startAnimate, setStartAnimate] = useState(false);
    const handlerClick = (e) => {
        const activeItem = Number(e.target.dataset.id);
        if (activeItem < 3) {
            setCount(activeItem);
            setActiveSlide(activeItem);
        }
    };
    useEffect(() => {
        setStartAnimate(true);
    }, []);

    return (
        <>
            <div className="banner-slider">
                <div className="slider-traker">
                    {arrImg.map((elem, idx, arr) => {
                        return (
                            <div
                                key={elem}
                                style={
                                    activSlide === count && {
                                        backgroundImage:
                                            "url(" + arrImg[activSlide] + ")",
                                    }
                                }
                                className={
                                    startAnimate
                                        ? "header-Banner  fadeInDown"
                                        : " header-Banner"
                                }
                            >
                                <div className="block-description">
                                    <span className="block-description-text">
                                        Высокоточное изготовление изделий из
                                        металла по чертежам
                                    </span>
                                    <span className="line"></span>
                                </div>
                                <ul className="slider">
                                    <li
                                        className={
                                            activSlide !== 0
                                                ? "slider-item"
                                                : "slider-item active"
                                        }
                                        onClick={handlerClick}
                                        data-id="0"
                                    ></li>
                                    <li
                                        className={
                                            activSlide !== 1
                                                ? "slider-item"
                                                : "slider-item active"
                                        }
                                        onClick={handlerClick}
                                        data-id="1"
                                    ></li>
                                    <li
                                        className={
                                            activSlide !== 2
                                                ? "slider-item"
                                                : "slider-item active"
                                        }
                                        onClick={handlerClick}
                                        data-id="2"
                                    ></li>
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Slider;
