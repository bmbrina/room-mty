import React from 'react';
import bg from '../images/bg.jpg';
import instagram from '../images/instagram.svg';

// Since this component is simple and static, there's no parent container for it.
const Contact = () => {
  return (
    <div className="contact"  style={{backgroundImage: `url("${bg}")`}}>
      <div className="contact__content">
        <h2 className="contact__title">Contact</h2>
        <p>Marcela Torres +1 (956) 333 - 46 56</p>
        <p>Marcela Torres +1 (956) 333 - 46 56</p>
        <p>Marcela Torres +1 (956) 333 - 46 56/p>
        <a href="https://www.instagram.com/room_mty/" target="_blank" className="about__social hide-on-s">
          <img src={instagram}/>
        </a>
      </div>
    </div>
  );
};

export default Contact;
