import React, {useState} from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { 
    GoogleMapDiv
} from './GooglemapElements';

/*const locations ={
    address: '5295 Lakeshore Rd, Burlington, ON L7L 1C7',
    lat: 43.36727,
    lng: -79.73381,
}*/

const Googlemap = () => {
    const mapStyles = {        
        height: "60vh",
        width: "60%"};
      
    const defaultCenter = {
        lat: 43.367271, lng: -79.73381
      }
    
    const [selectedCenter, setSelectedCenter] = useState(null);

  
      return (
        <GoogleMapDiv>
         <LoadScript
           googleMapsApiKey='AIzaSyAew_tll3wtDkMaZuDlhvCG3a8iV8ibt4s'>
            <GoogleMap
              mapContainerStyle={mapStyles}                             
              zoom={15}
              center={defaultCenter}
            >
            <Marker 
              position={defaultCenter} onClick={() => {
              setSelectedCenter(defaultCenter)}} title= "Pretty Nails and Spa" 
            />   
           
          {selectedCenter && (
          /*anchor:marker,map or add an anchor to another element.*/
            <InfoWindow 
                onCloseClick={() => {
                  setSelectedCenter(null);
                }}
                position={defaultCenter}
                options={{pixelOffset: new window.google.maps.Size(0,-30)}}
             
            >
              <div>
                <h3 >Pretty Nails & Spa </h3>
                <p>  5295 Lakeshore Rd, Burlington, ON L7L 1C7 </p>
                <p> (905) 632-2727 </p>
              </div>
            </InfoWindow>
          )}
               
            </GoogleMap>
            
         </LoadScript>  
         </GoogleMapDiv>
      )
    }
    
    
export default Googlemap;
