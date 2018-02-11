import React from 'react';
import { NavLink } from 'react-router-dom';
import bg from '../images/bg.jpg';
import instagram from '../images/instagram.svg';

const HomePage = () => {
  return (
    <div className="home" style={{backgroundImage: `url("${bg}")`}}>
      <div className="home__menu">
        <NavLink exact to="/">
          <p>shop</p>
        </NavLink>
        <NavLink exact to="/about">
          <p>about us</p>
        </NavLink>
        <NavLink exact to="/about">
          <p>contact</p>
        </NavLink>
        <NavLink exact to="/about">
          <p>location</p>
        </NavLink>
      </div>
      <a href="https://www.instagram.com/room_mty/" target="_blank" className="home__social">
        <img src={instagram}/>
      </a>
    </div>
  );
};

export default HomePage;
