import React, {Component} from 'react';
import '../App.css';
import home from '../assets/img/home.png';
import favoris from '../assets/img/favoris.png';
import search from '../assets/img/search.png';
import { Link } from 'react-router-dom';


class Footer extends Component{
  render(){
    return(
      <div>
        <footer className='footer'>
          <nav >
          <Link to='home'><img src={home} alt="homme" className='icone'/></Link>
          <Link to='city'><img src={search} alt="city" className='icone'/></Link>
          <Link to='favoris'><img src={favoris} alt="favoris" className='icone'/></Link> 
          </nav>
      </footer>
</div>
    )
  }
}

export default Footer;
