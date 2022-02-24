import { API_BASE_URL } from "../services/constant";

const weatherRepository = {
    async getWeather(lat, long) {
        try {
            const httpCall = await fetch(`${API_BASE_URL}/data/2.5/weather?lat=${lat}&lon=${long}&appid=f156a1d2ffdaa87f039614954d49d386&lang=fr&units=metric`);
            const weatherStatut = await httpCall.json();
            return weatherStatut;
        }
        catch (err) {
            console.log('error : ', err);
        }
    },
    async getCity(city) {
        try {
            const httpCall = await fetch(`${API_BASE_URL}/geo/1.0/direct?q=${city}&limit=1&appid=f156a1d2ffdaa87f039614954d49d386&lang=fr`);
            const cityWeather = await httpCall.json();
            return cityWeather;
        }
        catch (err) {
            console.log('error : ', err);
        }
    },
    async getPrevision(lat, long) {
        try {
            const httpCall = await fetch(`${API_BASE_URL}/data/2.5/onecall?lat=${lat}&lon=${long}&appid=f156a1d2ffdaa87f039614954d49d386&lang=fr`);
            const predictionWeather = await httpCall.json();
            return predictionWeather;
        }
        catch (err) {
            console.log('error : ', err);
        }
    },
    async forcastWeatherByHour(lat, long) {
        try {
            const httpCall = await fetch(API_BASE_URL + `/data/2.5/onecall?lat=${lat}&lon=${long}&appid=f156a1d2ffdaa87f039614954d49d386&lang=fr&units=metric`);
            return await httpCall.json();
        } catch (err) {
            console.log("error : ", err)
        }
    }
};
//const usersRepository ={
//async getPosition(){},
//async getweather(){},};
export default weatherRepository