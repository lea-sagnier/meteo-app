import React, { Component } from "react";
import weatherRepository from "../repository/weatherRepository";
import '../assets/css/icone.css';
import local from "../assets/img/local.png";


class Geolocalisation extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      weatherStatut : null
    };
  }
  dateOfToday(){
    const days = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
    const months = ["Jan", "Fév", "Mars", "Avril", "Mai", "Juin", "Juil", "Août","Sept", "Oct", "Nov", "Déc"];
    let offset = this.state.weatherStatut.timezone;
    let d = new Date(new Date().getTime() + (offset * 1000));
    let day = days[d.getUTCDay() - 1];
    let numDay = d.getUTCDate();
    let month = months[d.getUTCMonth()];
    let year = d.getUTCFullYear(); 
    const date = `${day} ${numDay} ${month} ${year}`;
    return date;
  }

  async componentDidMount() {
    navigator.geolocation.getCurrentPosition (async (position) => {
        let lat =  position.coords.latitude; 
        let long = position.coords.longitude;
         const weatherStatut = await weatherRepository.getWeather(lat, long); 
         this.setState({ weatherStatut : weatherStatut })
        });
  }
  
  degreesWithoutDecimal(){
    const degDec = this.state.weatherStatut.main.temp;
    const deg = Math.trunc(degDec);
    return deg
  }

  render() {
    return (
      <div className="firstBlockWeather">     
          {this.state.weatherStatut && (
            <div>
              <div className="d-flex">
                <h2 className="title">Aujourd'hui</h2>
                <p className="date">
                  {this.dateOfToday()}
                </p>
              </div>
              <div className="d-flex">
                <div className="deg">
                  {this.degreesWithoutDecimal() +'°C'}
                </div>
                <div className={`weather_${this.state.weatherStatut.weather[0].icon}`}></div>

              </div>
              <div className="city">
                <img src={local} alt="" className="local"/>
                <h2>{this.state.weatherStatut.name + ' '}</h2>
                
              </div>
           
            </div>
            )}
      </div>
    );
  }
}

export default Geolocalisation;
