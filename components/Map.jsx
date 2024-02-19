"use client"

import { useEffect, useRef } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import useCurrentLocation from "@/hooks/useCurrentLocation";
import { renderToString } from 'react-dom/server';
import { Avatar, Backdrop, Box, Container, Grid, Stack } from "@mui/material";
import fluffy from "@/public/fido.jpg"
import CircularProgress from '@mui/material/CircularProgress';


function GoogleMap(){
    const locate = useCurrentLocation()


    function render(status){
        switch(status){
            case Status.LOADING:
                return(
                    <Container maxWidth="sm">
                        <Backdrop open={true}>
                            <CircularProgress  color="inherit" />
                        </Backdrop>
                    </Container>
                )

            case Status.SUCCESS:
                return(
                    <Map 
                        center={{
                            lat: locate?.latitude,
                            lng: locate?.longitude
                        }} 
                    />
                )
        }
    }


    return(
        <Wrapper 
            apiKey={process.env.NEXT_PUBLIC_GoogleAMapsAPI}
            render={render}
        />   
    )
}

export default GoogleMap;






const InfoWindow = () => {
    return(
        <Grid container spacing={2}>
			<Grid xs={12} style={{ display: "flex" }}>
                <Avatar alt="Natacha" src={fluffy.src} style={{ width: 100, height: 100 }}/>
            
                <Grid xs={12} style={{ display: "flex", width: 200, flexDirection: "column", paddingLeft: 10 }}>
                    <h2 style={{ marginBottom: 0 }}>
                        Snoopy
                    </h2>

                    <p style={{ margin: "0 0 10px 0", fontSize: 14 }}>
                        Owner: Remy Sharp
                    </p>

                    <p>
                        <a 
                            href="tel:0630705752" 
                            style={{ padding: 10, background: "rgb(244, 67, 54)", border: "none", color: "#fff", textDecoration: "none" }}
                        >
                            <strong>Contact Owner</strong>
                        </a>
                    </p>
                </Grid>
            </Grid>
        </Grid>
    )
}



function Map({ center = { lat: -33.977074, lng: 22.457581 }, zoom = 19, className }) {
	const mapRef = useRef(null);

	useEffect(() => {
        if( window.google.maps !== undefined ){
            const map = new window.google.maps.Map(mapRef.current, {
                center,
                zoom,
            });

            const marker = new window.google.maps.Marker({
                map,
                position: center,
            });

            const infoWindow = new google.maps.InfoWindow({
                content:  renderToString(<InfoWindow />),
                ariaLabel: "Snoopy's Location",
            });

            infoWindow.open({
                anchor: marker,
                map
            })
        }

	}, [ center, zoom ]);


	return(
        <div 
            id="map" 
            ref={mapRef} 
            className={className}
            style={{ width: "100%", height: "800px" }}
        />
    )
}
