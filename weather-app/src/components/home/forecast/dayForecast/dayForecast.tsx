import style from "./dayForecast.module.css"
import {forecastType} from "../../../../types/index"
import {countries} from 'country-data';


type Props = {
    data: forecastType
}

const Degree = ({temp}: {temp: number}) => (
    <span className={style.span}>
        {temp} <sup className={style.sup}>o</sup>
    </span>
)

const DayForecast = ({data}: Props) => {
    const today = data.list[0]

    return (
        <div className={style.wrapper}>
            <div className={style.mainDay}>
                <div className={style.leftMain}>
                    <p className={style.date}></p>
                    <p className={style.city}>{data.name}</p>
                    <p className={style.country}>{countries[`${data.country}`].name}</p>
                    <p className={style.temperature}><Degree temp={Math.round(today.main.temp)}/></p>
                    <p className={style.etc}>{Math.round(today.wind.speed)} km/h</p>
                    <p className={style.etc}>Humidity {today.main.humidity}%</p>
                    <img className={style.mainImg} src={require(`../../../../pics/weather/${today.weather[0].icon}.png`)}></img>
                </div>
            </div>
            <div className={style.rightMain}>
                {data.list.map((item, i) => (
                    <div className={style.rightBlocks}>
                        <p className={style.weatherHoursText}>{i === 0? 'Now' : `${new Date(item.dt * 1000).getHours()} hour`}</p>
                        <img alt={`weather-icon-${item.weather[0].description}`} className={style.weatherImg} src={require(`../../../../pics/weather/${item.weather[0].icon}.png`)}></img>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default DayForecast;