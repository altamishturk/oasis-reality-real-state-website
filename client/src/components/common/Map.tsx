import React from 'react';
import {Box} from "@mui/material";
import GoogleMapReact from 'google-map-react';
import PushPinIcon from '@mui/icons-material/PushPin';

function Map() {
    
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
    };
    

    const handleApiLoaded = (map: any, maps: any) => {
        // use map and maps objects
        // console.log(map,maps);
        
    }

      return (
        // Important! Always set the container height explicitly
        <Box
        sx={{width: "100%",height: "100%"}}
        >
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyA1LKUQ856m-uNMW71MMNmeXKZy1MRVWz4" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
          >
            <LocationMarker lat={59} lng={30}/>
          </GoogleMapReact>
        </Box>
      );
}

export default Map;



interface MyInt {
    lat: number,
    lng: number
}

function LocationMarker({lat,lng}: MyInt)  {

    return (
        <div style={{ color: 'red', fontSize: '20px' }}>
      <PushPinIcon/>
    </div>
    )
};
  
