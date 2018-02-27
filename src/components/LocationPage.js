import React from 'react';
import loadGoogleMapsAPI from 'load-google-maps-api';
import bg from '../images/bg.jpg';
import instagram from '../images/instagram.svg';

class LocationPage extends React.Component {

  componentDidMount() {
    const location = { lat: 25.6471924, lng: -100.3612981 };
    loadGoogleMapsAPI({key:'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo', language: 'en'}).then( googleMaps => {
      new googleMaps.Map( this.refs.map, {
        zoom: 16,
        center: location
      });
    });
  }

  render() {
    return (
      <div className="location" style={{backgroundImage: `url("${bg}")`}}>
        <div className="location__content">
          <h2 className="location__title">Location</h2>
          <p className="location__desc">Plaza 404 <br/>
            Av. Gómez Morín #404
            Col. Villas del Aragón
            entre Magnolia y Privada Cristal</p>
          <div ref="map" className="map" />
          <a href="https://www.instagram.com/room_mty/" target="_blank" className="location__social hide-on-s">
            <img src={instagram}/>
          </a>
        </div>

      </div>
    );
  }
}

export default LocationPage;
