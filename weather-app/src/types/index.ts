export type optionType = {
    name: string
    lat: number
    lon: number
}

export type forecastType = {
    name: string
    country: string
    sunrise: number
    sunset: number
    list: [{
        dt: number
        main: {
            humidity: number
            temp: number
            tempMin: number
            tempMax: number
        }
        weather: [{
            main: string
            icon: string
            description: string
        }]
        wind: {
            speed: number
            gust: number
            deg: number
        }
        clouds: {
            all: number
        }
        pop: number
        visibility: number
    }]}