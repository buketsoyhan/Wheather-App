import React, { useContext, useEffect } from 'react'
import WhetherContext from '../context/WheatherContext'
import axios from 'axios';

function Main() {
    const { days, weather, setWeather, city, setCity, cities } = useContext(WhetherContext)

    const changeCity = (e) => {
        cities.filter((item) => {
            if (item.name === e.target.value) {
                setCity(item);
            }
        });
    }

    useEffect(() => {
        const api_key = '779c271986d91ab4f86362ce5d62e73c';
        const getData = async () => {
            const res = axios(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${city.latitude}&lon=${city.longitude}&exclude={part}&appid=${api_key}`,
            );
            console.log((await res).data.daily)
            setWeather((await res).data.daily);
        };
        getData();
    }, [city, setWeather]);

    return (
        <div>
            <div className="select-box">
                <select
                    name='city'
                    id='city'
                    value={city.name}
                    onChange={changeCity}
                >
                    {
                        cities.map((city, idx) => {
                            return (
                                <option key={idx} value={city.name}>
                                    {city.name}
                                </option>
                            )
                        })
                    }
                </select>
            </div>
            <div>
                <div className="days">
                    {weather.map((item, idx) => {
                        return (
                            <div className="day" key={idx}>
                                <div className="day-title">
                                    {days[
                                        new Date(item.dt * 1000).getDay()
                                    ]}
                                </div>
                                <img
                                    className="day-img"
                                    src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                                    alt={item.weather[0].description}
                                />
                                <div className="day-deg">
                                    <span className="tmp-high">
                                        {Math.round(item.temp['max'] - 273.15)}
                                        &deg;
                                    </span>
                                    <span>
                                        {Math.round(item.temp['min'] - 273.15)}
                                        &deg;
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Main