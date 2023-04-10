import style from "./header.module.css"
import DropdownSearch from "../dropdownSearch/dropdownSearch"
import cloud from "../../../pics/headerPics/clouds.png"
import headerStar from "../../../pics/headerPics/headerStar.png"
import geoPoint from "../../../pics/headerPics/geoPoint.png"
import {forecastType, optionType} from "../../../types";
import {ChangeEvent} from "react";
import forecast from "../forecast/forecast";

type Props = {
    term: string
    options: []
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    onOptionSelect: (option: optionType) => void
    onSubmit: () => void
    data: forecastType | null
}

const Header = ({term, data, options, onInputChange, onOptionSelect, onSubmit}: Props) => {

    return (
        <div className={style.wrapper}>
            <img className={style.cloudImg} src={cloud}></img>
            <img className={style.star} src={headerStar}></img>
            <h1 className={style.headerText}>SkyLine</h1>
            <DropdownSearch term={term} options={options}
                            onInputChange={onInputChange} onOptionSelect={onOptionSelect} onSubmit={onSubmit}/>
            <img className={style.geoPoint} src={geoPoint}></img>
            <p className={style.cityName}>{data === null? "" : data.name}</p>
        </div>
    );
}

export default Header;