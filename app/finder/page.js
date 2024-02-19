import GoogleMap from "@/components/Map";
import Grid from '@mui/material/Unstable_Grid2';



function Finder(){

    return(
        <Grid container spacing={2}>
			<Grid xs={12}>
                <GoogleMap />
            </Grid>
        </Grid>
    )
}

export default Finder;