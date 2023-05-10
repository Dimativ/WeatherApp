import style from "./home.module.css"
import useForecast from "../../hooks/useForecast"
import Forecast from "./forecast/forecast";
import Header from "./header/header";
import Footer from "./footer/footer";

const Home = () => {
    const {term, options, forecast, onInputChange, onOptionSelect, onSubmit} = useForecast()

    return (
        <div className={style.wrapper}>
            <Header term={term} options={options}
                        onInputChange={onInputChange} onOptionSelect={onOptionSelect} onSubmit={onSubmit} data={forecast}/>
            {forecast && (
                <Forecast data={forecast}/>
                )}
            <Footer/>
        </div>
    );
}

export default Home;