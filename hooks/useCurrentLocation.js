import { useEffect } from "react";


export default function useCurrentLocation(){
    function geoLocate(pos){
        const { latitude, longitude } = pos.coords

        return { 
            latitude, 
            longitude 
        }
    }


    function error(err){
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }


    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(geoLocate, error, options)

    }, [])

}