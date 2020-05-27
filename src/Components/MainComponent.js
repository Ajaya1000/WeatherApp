import React, { Component } from 'react';
import FromComp from './FormComponent';
import Weather from './WeatherComponent';
import Titles from './TitlesComponent';
const API_KEY = 'b9c633e4e967c403065bfffb0126bdf0';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: undefined,
        }
    }

    getWeather = async (e) => {
        e.preventDefault();

        // console.log(e.target.elements);

        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
        const data = await api_call.json();
        console.log(data);

        if (city && data.main !== undefined) {
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: undefined,
            });
        }
        else {
            var msg;
            if (data.message !== undefined) {
                msg = data.message;
            }
            else if (city === undefined || city === "") {
                msg = "Enter the city name";
            }
            else {
                msg = "Something's wrong";
            }
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: msg,
            });

        }
    }

    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="main">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 col-md-5 title-container">
                                    <Titles />
                                </div>
                                <div className="col-12 col-md-7 form-container">
                                    <FromComp getWeather={this.getWeather} />
                                    <Weather
                                        temperature={this.state.temperature}
                                        city={this.state.city}
                                        country={this.state.country}
                                        humidity={this.state.humidity}
                                        description={this.state.description}
                                        error={this.state.error}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}