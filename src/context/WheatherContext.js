import { createContext, useState } from "react"
import cities from "../db/cities.json"
const WhetherContext = createContext();

export const WhetherProvider = ({ children }) => {
    const [weather, setWeather] = useState([]);

    const [city, setCity] = useState(cities.find(item => item.id === 6));

    const days = [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
    ];

    const values = {
        city,
        setCity,
        cities,
        days,
        weather,
        setWeather,
    };
    return <WhetherContext.Provider value={values}>{children}</WhetherContext.Provider>
}

export default WhetherContext;
