import style from "./dropdownSearch.module.css"
import {optionType} from "../../../types";
import searchIcon from "../../../pics/headerPics/search.png"
import {ChangeEvent} from "react";

type Props = {
    term: string
    options: []
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    onOptionSelect: (option: optionType) => void
    onSubmit: () => void
}

const DropdownSearch = ({term, options, onInputChange, onOptionSelect, onSubmit}: Props) => {

    return (
        <div className={style.wrapper}>
            <input className={style.myInput}
                   value={term}
                   onChange={onInputChange}
                   placeholder="Name of city"
            />
            <button className={style.searchButton} onClick={onSubmit}>
                <img className={style.searchIcon} src={searchIcon}></img>
            </button>
            {term !== "" && (
                <ul className={style.list}>
                    {Array.isArray(options) && options.map((option: optionType, index: number) => (
                        <li className={style.liElem} key={option.name + '-' + index}>
                            <button onClick={() => onOptionSelect(option)} className={style.buttons}>
                                {option.name}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )

}

export default DropdownSearch;
