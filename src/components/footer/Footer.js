import "./Footer.scss";
function Footer({ data }) {
    const { sectionServices, footer } = data.data;
    return (
        <footer className="footer">
            <div className="footer-wrap container">
                <div className="footer-block-about">
                    <span className="footer-titles">{footer.titleAbout}</span>
                    <ul className="list-about list">
                        {footer.about.map((elem, i) => {
                            return (
                                <li className="list-about-item" key={elem + i}>
                                    <span className="list-about-item-text list-text">
                                        {elem}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="footer-block-service">
                    <span className="footer-titles">
                        {sectionServices.section}
                    </span>
                    <ul className="list-service ">
                        {sectionServices.titles.map((title, i) => {
                            return (
                                <li
                                    key={title + i}
                                    className="list-service-item"
                                >
                                    <span className="list-text">{title}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="footer-block-info">
                    <span className="footer-titles add-style">
                        {footer.title}
                    </span>
                    <ul className="list-info list">
                        <li className="list-info-item">{footer.address}</li>
                        <li className="list-info-item">{footer.schedule}</li>
                        <li className="list-info-item">{footer.phone}</li>
                        <li className="list-info-item social-block">
                            <div
                                className="social-block-item"
                                style={{
                                    backgroundImage:
                                        " url(assets/image/social/fecebook.svg)",
                                }}
                            ></div>
                            <div
                                className="social-block-item"
                                style={{
                                    backgroundImage:
                                        " url(assets/image/social/inst.svg)",
                                }}
                            ></div>
                            <div
                                className="social-block-item"
                                style={{
                                    backgroundImage:
                                        " url(assets/image/social/youtube.svg)",
                                }}
                            ></div>
                        </li>
                    </ul>
                </div>
            </div>
            <span className="bottom-text">
                Developed by <b>Stubbs</b>
            </span>
        </footer>
    );
}

export default Footer;
