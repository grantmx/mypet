import { useEffect, useState } from "react";


export default function useCurrentLocation(){
    const [ location, setLocation ] = useState(null)

    function geoLocate(pos){
        const { latitude, longitude } = pos.coords

        setLocation({ 
            latitude, 
            longitude 
        })
    }


    function error(err){
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }


    useEffect(() => {
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        };

        navigator.geolocation.getCurrentPosition(geoLocate, error, options)

    }, [])


    return{
        ...location,
    }

}