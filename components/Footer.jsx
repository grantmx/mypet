"use client"

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PetsIcon from '@mui/icons-material/Pets';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { useEffect, useState } from 'react';
import { Paper } from '@mui/material';
import { usePathname } from 'next/navigation';


function Footer(){
    const pathname = usePathname()
    const [value, setValue] = useState(0);

    useEffect(() => {
        let index = null;

        switch(pathname){
            case "/": index = 0; break;
            case "/pet": index = 1; break;
            case "/insurance": index = 2; break;
            case "/finder": index = 3; break;
        }

        setValue(index);

    }, [ pathname ])


    return(
        <footer>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={0}>
                <BottomNavigation
                    showLabels
                    value={value}
                >
                    <BottomNavigationAction 
                        href="/"
                        label="My Pet" 
                        icon={<PetsIcon />} 
                    />

                    <BottomNavigationAction  href="/pet" label="Care" icon={<LocalHospitalIcon />} />
                    <BottomNavigationAction href="/insurance" label="Coverage" icon={<BeachAccessIcon />} />
                    <BottomNavigationAction href="/finder" label="Finder" icon={<LocationOnIcon />} />
                </BottomNavigation>
            </Paper>
        </footer>
    )
}

export default Footer;