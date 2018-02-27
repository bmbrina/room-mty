import React from 'react';
import bg from '../images/bg.jpg';
import instagram from '../images/instagram.svg';

const ContactPage = () => {
  return (
    <div className="contact"  style={{backgroundImage: `url("${bg}")`}}>
      <div className="contact__content">
        <h2 className="contact__title">Contact Us</h2>
        <p className="contact__subtitle">Email</p>
        <a className="contact__info" href="mailto:room.mt.mx@gmail.com?Subject=Room-Mty%20Contact">contact@room-mty.com</a>
        <p className="contact__subtitle">Phone</p>
        <p className="contact__info">+1 (956) 333 - 46 56</p>
        <a href="https://www.instagram.com/room_mty/" target="_blank" className="contact__social">
          <img src={instagram}/>
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
