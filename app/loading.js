import { Card, CardContent, CardHeader, Grid, Skeleton } from "@mui/material";


function PageLoader(){
    return(
        <Grid container>
            <Grid xs={12}>
                <Card sx={{ maxWidth: 345, m: 2 }}>
                    <CardHeader 
                        avatar={<Skeleton animation="wave" variant="circular" width={40} height={40} />} 
                        title={<Skeleton
                                animation="wave"
                                height={10}
                                width="80%"
                                style={{ marginBottom: 6 }}
                            />}
                        subheader={<Skeleton animation="wave" height={10} width="40%" />}
                    />
                    <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />

                    <CardContent>
                        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                        <Skeleton animation="wave" height={10} width="80%" />
                    </CardContent>
                </Card>


                <Card sx={{ maxWidth: 345, m: 2 }}>
                    <CardHeader 
                        avatar={<Skeleton animation="wave" variant="circular" width={40} height={40} />} 
                        title={<Skeleton
                                animation="wave"
                                height={10}
                                width="80%"
                                style={{ marginBottom: 6 }}
                            />}
                        subheader={<Skeleton animation="wave" height={10} width="40%" />}
                    />
                    <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />

                    <CardContent>
                        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                        <Skeleton animation="wave" height={10} width="80%" />
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default PageLoader;