import Gears from "../gears/Gears";
import "./Services.scss";

const ids = require("short-id");

function Services({ data }) {
    const { sectionServices } = data.data;

    return (
        <div className="service">
            <h2 className="sections-title">{sectionServices.section}</h2>
            <Gears />
            <ul className="service-block container">
                {sectionServices.titles.map((title, i) => {
                    return (
                        <li
                            key={ids + title}
                            className="service-block_item"
                            style={{
                                backgroundImage: `url(
                                        ${sectionServices.img[+i] + ".png"}
                                    )`,
                            }}
                        >
                            <div className="service-block_item-wrap">
                                <span className="service-block_item-wrap__title">
                                    {title}
                                </span>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <button className="calc-price-btn">
                {sectionServices.priceCalc}
            </button>
        </div>
    );
}

export default Services;
