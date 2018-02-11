import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../images/bg.jpg';
import instagram from '../images/instagram.svg';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <div className="about"  style={{backgroundImage: `url("${bg}")`}}>
      <div className="about__content">
        <h2 className="about__title">About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar fermentum augue in lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In ornare neque congue nibh dictum venenatis. Mauris vitae orci semper, faucibus dui non, feugiat nulla.</p>
        <p>Nam ac massa iaculis, rhoncus neque sit amet, suscipit libero. Nulla non iaculis risus. Maecenas sagittis vulputate urna, sit amet ultricies orci convallis nec. Vestibulum vel malesuada quam. Donec mauris odio, finibus nec semper vel, aliquet et justo. Integer iaculis velit tincidunt ultrices vehicula.</p>
        <p>Nam ac massa iaculis, rhoncus neque sit amet, suscipit libero. Nulla non iaculis risus. Maecenas sagittis vulputate urna, sit amet ultricies orci convallis nec. Vestibulum vel malesuada quam. Donec mauris odio, finibus nec semper vel, aliquet et justo. Integer iaculis velit tincidunt ultrices vehicula.</p>
        <a href="https://www.instagram.com/room_mty/" target="_blank" className="about__social hide-on-s">
          <img src={instagram}/>
        </a>
      </div>
    </div>
  );
};

export default AboutPage;
