import React, { useEffect, useState } from "react";
// import './styles.css';
import { Card } from 'semantic-ui-react';
import moment from 'moment';


const Weather = () => {
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function(position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });

            await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
                .then(res => res.json())
                .then(result => {
                    setData(result)
                    console.log(result);
                });
        }
        fetchData();
    }, [lat,long])

    return (
        <Card>
            <Card.Content>
                <Card.Header className="header">City Name: {data.name}</Card.Header>
                <p>Temperature: {data.main.temp} &deg;C</p>
                <p>Sunrise: {new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                <p>Sunset: {new Date(data.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
                <p>Description: {data.weather[0].main}</p>
                <p>Humidity: {data.main.humidity} %</p>
            </Card.Content>
        </Card>
    )
}

export default Weather;