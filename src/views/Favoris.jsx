import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import Card from '../Component/card/Card';

class Favoris extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfCity: [],
        }
    }

    componentDidMount = () => {
        //console.log(this.props)
        this.setState({ listOfCity: this.props.listOfCity });
    }

    render() {
        return (
            <main>
                {this.state.listOfCity.length > 0 && (
                    <div className='brick'> 
                        {this.state.listOfCity.map((city, weatherTemp)=> {
                        return <Card key={city.city} city={city.city} weatherTemp={city.weatherTemp}/>
                    })}
                    </div>
                )
                }

            </main>
        );
    }
}

const mapStateToProps = state => {
    return {
        listOfCity: state.city.listOfCity
    }
}
export default connect(mapStateToProps)(Favoris);
