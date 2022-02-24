import React, { Component } from "react";
import weatherRepository from "../repository/weatherRepository";
import '../assets/css/icone.css';
import hot from "../assets/img/hot.png";
import cold from "../assets/img/cold.png";
import wind from "../assets/img/wind.png";

class InfoSup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            weatherStatut: null
        };
    }

    async componentDidMount() {
        navigator.geolocation.getCurrentPosition(async (position) => {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;
            const weatherStatut = await weatherRepository.getWeather(lat, long);
            this.setState({ weatherStatut: weatherStatut })
        });
    }

    degreesMinWithoutDecimal() {
        const degDec = this.state.weatherStatut.main.temp_min;
        const deg = Math.trunc(degDec);
        return deg
    }
    degreesMaxWithoutDecimal() {
        const degDec = this.state.weatherStatut.main.temp_max;
        const deg = Math.trunc(degDec);
        return deg
    }
    sunsetHour(){
        const degDec = this.state.weatherStatut.main.temp_max;
        const deg = Math.trunc(degDec);
        return deg
    }
    sunriseHour(){
        const degDec = this.state.weatherStatut.main.temp_max;
        const deg = Math.trunc(degDec);
        return deg
    }

    render() {
        return (
            <div className="secondBlockWeather">
                {this.state.weatherStatut && (
                    <div>
                        
                            <div className="infoPlus">
                                <img src={wind} alt="" className="ltlIcon" />
                                <h4>Vitess du vent : </h4> {this.state.weatherStatut.wind.speed + ' ' + 'km/h'}
                            </div>
                            <div className="infoPlus pt-2">
                                <img src={hot} alt="" className="ltlIcon" />
                                <h4>Temperature max : </h4>{this.degreesMaxWithoutDecimal() + ' ' + '°C'}
                            </div>
                            <div className="infoPlus pt-2">
                                <img src={cold} alt="" className="ltlIcon" />
                                <h4>Temperature min : </h4> {this.degreesMinWithoutDecimal() + ' ' + '°C'}
                            </div>
                            <div className="infoPlus pt-2">
                                <img src={cold} alt="" className="ltlIcon" />
                                <h4>Levé du soleil</h4> {this.sunriseHour() + ' ' + '°C'}
                            </div>
                            <div className="infoPlus pt-2">
                                <img src={cold} alt="" className="ltlIcon" />
                                <h4>Coucher du soleil :  </h4> {this.sunsetHour() + ' ' + '°C'}
                            </div>
                        
                    </div>
                )}
            </div>

        );
    }
}

export default InfoSup;
