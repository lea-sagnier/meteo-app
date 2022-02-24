import React, {Component} from 'react';
import '../App.css';
import Geolocalisation from '../Component/Geolocalisation';
import InfoSup from '../Component/InfoSup'

class Home extends Component {
    render(){

    return (
        <div className='headerHome'>
            <Geolocalisation/>
            <InfoSup/>
        </div>
        )
    }
}
    export default Home;
