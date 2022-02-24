import React, { Component } from "react";
import '../assets/css/icone.css';
import weatherRepository from "../repository/weatherRepository";

function Date({prenom, nom}){
    const[job,setJob] = useState("");
    useEffect(() => {
        setJob('Tech Lead')
    }, [])

    return (
        <div className="styleCard">
           <div className="card">
               <img src={profiles} alt="img profil" className="icon" />
                <h4>
                   <b>{prenom + " " + nom}</b>
               </h4>
                <p>{job}</p>
            </div>
        </div>
)
}
export default Card;

class Date extends Component {
    constructor(props) {
        super(props);
        this.state = {
          weatherStatut : null
        };
      }

    dateOfToday() {
        const days = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
        const months = ["Jan", "Fév", "Mars", "Avril", "Mai", "Juin", "Juil", "Août", "Sept", "Oct", "Nov", "Déc"];
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
        navigator.geolocation.getCurrentPosition(async (position) => {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;
            const weatherStatut = await weatherRepository.getWeather(lat, long);
            this.setState({ weatherStatut: weatherStatut })
        });
    }

    render() {
        return (
            <div>
                    <div>
                        {this.dateOfToday()}
                    </div>
            </div>
        );

    }
}

export default Date;
