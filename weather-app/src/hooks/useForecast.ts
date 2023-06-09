import {forecastType, optionType} from "../types";
import {API_KEY} from "../components/api";
import {ChangeEvent, useEffect, useState} from "react";

const useForecast = () => {

    const [term, setTerm] = useState<string>("")
    const [options, setOptions] = useState<[]>([])
    const [city, setCity] = useState<optionType | null>(null)
    const [forecast, setForecast] = useState<forecastType | null>(null)

    const getSearchOptions = (value: string) => {
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${term.trim()}&limit=7&appid=${API_KEY}`)
            .then(res => res.json())
            .then(data => setOptions(data))
    }

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.trim()
        setTerm(value)
        if (value === "") return
        getSearchOptions(value)
    }

    const getForecast = (city: optionType) => {
        fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                const forecastData = {
                    ...data.city,
                    list: data.list.slice(0,10),
                }
                setForecast(forecastData)})
    }

    const onOptionSelect = (option: optionType) => {
        setCity(option)
    }

    const onSubmit = () => {
        if (!city) return
        getForecast(city)
    }

    useEffect(() => {
        if (city) {
            setTerm(city.name)
            setOptions([])
        }
    }, [city])

    return {term, options, forecast, onInputChange, onOptionSelect, onSubmit}
}

export default useForecast;