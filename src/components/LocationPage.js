import React from 'react';
import GoogleMapReact from 'google-map-react';

// dirección  @25.6472439,-100.3592429,21z
// no se como poner el angulo o los grados que son 21

class LocationPage extends Component {
  static defaultProps = {
    center: {lat: 25.64, lng: -100.36},
    zoom: 11
  };
 
  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: [YOUR_KEY] }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={25.6472439}
          lng={-100.3592429}
          text={'Gomez Morin 404'}
        />
      </GoogleMapReact>
    );
  }
}
 
export default LocationPage;
