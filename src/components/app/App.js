import { Component } from "react";
import Header from "../header/Header";
import "./App.scss";
import data from "../../data.json";
import Services from "../sectionServices/Services";
import SectionCompany from "../sectionCompany/SectionCompany";
import Footer from "../footer/Footer";

class App extends Component {
    state = {
        data: data[0],
        arrLang: [
            { lang: "assets/image/flags/Flag_RUS.png", alt: "ru", id: 1 },
            { lang: "assets/image/flags/Flag_UA.png", alt: "ua", id: 2 },
            { lang: "assets/image/flags/Flag_UK.png", alt: "uk", id: 3 },
        ],
        isLang: false,
    };
    handleLangs = () => {
        this.setState({
            isLang: !this.state.isLang,
        });
    };

    handleLangChoose = (e) => {
        const { arrLang } = this.state;
        const chooseLang = data.find((elem) => elem.lang === e.target.alt);
        const beginnerFlag = arrLang.find(
            (elem) => elem.alt === chooseLang.lang
        );
        const array = arrLang;
        const filterArray = array.filter((elem) => elem.id !== beginnerFlag.id);
        this.setState({
            data: chooseLang,
            arrLang: [beginnerFlag, ...filterArray],
        });
        this.handleLangs();
    };
    render() {
        // console.log("it's me!!!",this.state.data);
        return (
            <>
                <Header
                    data={this.state}
                    handleLang={this.handleLangChoose}
                    handleLangs={this.handleLangs}
                />
                <Services data={this.state} />
                <SectionCompany data={this.state} />
                <Footer data={this.state} />
            </>
        );
    }
}

export default App;
