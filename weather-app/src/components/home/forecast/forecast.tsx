import style from "./forecast.module.css"
import {forecastType} from "../../../types";
import DayForecast from "./dayForecast/dayForecast";

type Props = {
    data: forecastType
}
const Forecast = ({data}: Props) => {

    return (
       <div className={style.wrapper}>
           <DayForecast data={data}/>
       </div>
    )

}

export default Forecast;