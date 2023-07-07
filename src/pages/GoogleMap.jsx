import React from 'react';
import { GoogleMap, IFrame } from 'react-google-maps';


const GoogleMapembedd = () => {
    const mapContainerStyle = {
      position: 'relative',
      textAlign: 'right',
      width: '100%',
      height: '472px',
    };
    const YOUR_LATITUDE=30.32748;
    const YOUR_LONGITUDE=78.048446
  
    const mapEmbedUrl = 'https://maps.google.com/maps?width=1017&amp;height=472&amp;hl=en&amp;q=camera+Market+Dehradun&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed';
  
    return (
      <div style={mapContainerStyle}>
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={{ lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE }}
          zoom={19}
        >
          <IFrame
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: '0' }}
            allowFullScreen
          />
        </GoogleMap>
      </div>
    );
  };
  
  export default GoogleMapembedd;
  