"use client"

import { useEffect, useRef } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import useCurrentLocation from "@/hooks/useCurrentLocation";


function GoogleMap(props){
    const locate = useCurrentLocation()

    return(
        <Wrapper apiKey={process.env.google.apiKey}>
            <Map 
                center={{
                    lat: locate?.latitude,
                    lng: locate?.longitude
                }} 
            />
        </Wrapper>
    )
}



function Map({ center = { lat: -33.977074, lng: 22.457581 }, zoom = 17, className }) {
	const mapRef = useRef(null);

	useEffect(() => {
        if( window.google.maps !== undefined ){
            const map = new window.google.maps.Map(mapRef.current, {
                center,
                zoom,
            });

            // const marker = new google.maps.marker.Marker({
            //     map,
            //     position: center,
            // });
        }

	}, []);


	return(
        <div 
            id="map" 
            ref={mapRef} 
            className={className}
            style={{ width: "100%", height: "800px" }}
        />
    )
}

export default GoogleMap;
