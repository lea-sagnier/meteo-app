import React, { Component } from 'react';
import '../App.css';
import '../assets/css/icone.css'
import weatherRepository from "../repository/weatherRepository";
import { Input } from 'antd';
import { Button } from 'antd';
import fav from '../assets/img/favIcone.png'
import {connect} from 'react-redux';
import { addCity } from '../store/reducers/cityReducer';

const { Search } = Input;

class City extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            cityName: '',
            cityWeather: null,
            weatherTemp: '',
            weatherdesc: null,
            weatherIcon: null,
            listOfCity:[]
        }
    }

    submitFavoris() {
        console.log(this.props)
        this.props.addCity({city: this.state.cityName, weatherTemp: this.state.weatherTemp})
       };

    onSearch = async (city) => {
        const cityWeather = await weatherRepository.getCity(city);
        let lat = cityWeather[0].lat;
        let long = cityWeather[0].lon;
        const cityName = cityWeather[0].name;
        const weatherStatut = await weatherRepository.getWeather(lat, long);
        const weatherTemp = Math.trunc(weatherStatut.main.temp);
        const weatherdesc = weatherStatut.weather[0].description;
        const weatherIcon = weatherStatut.weather[0].icon;

        this.setState({ cityName: cityName, weatherTemp: weatherTemp, weatherdesc: weatherdesc, weatherIcon: weatherIcon })
    };


    render() {
        return (
            <div>
                <Search placeholder="Search city" allowClear onSearch={this.onSearch} style={{ width: 200 }} />
                <div>
                    {this.state.cityName && (
                    <div className='idCity'>
                        <h2 className='title'>{this.state.cityName}</h2>
                        <div className='d-flex'>                        
                            <div className='deg'>{this.state.weatherTemp + '°C'}</div>
                            <div className={`weather_${this.state.weatherIcon}`}></div>
                        </div>
                        <Button className='d-flex-mauto' onClick={() => this.submitFavoris()}><img src={fav} alt="" className='icone2 mr-2'/> Ajouter aux favoris</Button>

                    </div>
                )}
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return{
        addCity : (favoris)=> dispatch(addCity(favoris))
    }
  }
  const mapStateToProps = state => {
    return {
        listOfCity: state.city.listOfCity
    }
}
  
export default connect(mapStateToProps,mapDispatchToProps)(City);
