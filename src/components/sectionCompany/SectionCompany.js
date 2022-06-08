import "./SectionCompany.scss";

function SectionCompany({ data }) {
    const { sectionCompany } = data.data;
    return (
        <div className="section-company">
            <h2 className="sections-title">{sectionCompany.section}</h2>
            <div className="block-company">
                <div
                    className="block-company-item "
                    style={{
                        backgroundImage: `url(/assets/image/Rectangle25.png)`,
                    }}
                >
                    <div className="company-block left-block">
                        <span className="company-block_title">
                            {sectionCompany.titles[0]}
                        </span>
                        <p className="company-block_description">
                            {sectionCompany.description}
                        </p>
                    </div>
                </div>
                <div
                    className="block-company-item "
                    style={{
                        backgroundImage: `url(/assets/image/Rectangle26.png)`,
                    }}
                >
                    <div className="company-block right-block">
                        <span className="company-block_title">
                            {sectionCompany.titles[1]}
                        </span>
                        <p className="company-block_description">
                            {sectionCompany.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionCompany;
