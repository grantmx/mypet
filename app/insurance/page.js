import { Divider, Grid, Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import Image from "next/image";
import insuranceAd from "@/public/petsure-ad.jpg"


// 488245019

function Insurance(){
    return(
        <Grid container sx={{ marginBottom: 8 }}>
            <Grid xs={12} sx={{ p: 2 }}>
                <Image 
                    src={insuranceAd}
                    width={400}
                    height={225}
                    alt="ad"
                    style={{ objectFit: "contain", width: "100%", height: "auto", borderRadius: 10 }}
                />
            </Grid>



			<Grid xs={12} sx={{ p: 2 }}>
                <Typography variant="h4">
                    Insurance History
                </Typography>
            </Grid>

            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <FolderIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Veterinary Visit" secondary="Jan 9, 2018" />
                </ListItem>

                <Divider component="li" />
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <FolderIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Veterinary Visit" secondary="Jan 7, 2016" />
                </ListItem>

                <Divider component="li" />
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <FolderIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Vaccination" secondary="July 20, 2015" />
                </ListItem>

                <Divider component="li" />
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <FolderIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Veterinary Visit" secondary="July 20, 2014" />
                </ListItem>

                <Divider component="li" />
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <FolderIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Vaccination" secondary="July 20, 2013" />
                </ListItem>

                <Divider component="li" />
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <FolderIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Veterinary Visit" secondary="July 20, 2012" />
                </ListItem>

                <Divider component="li" />
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <FolderIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Veterinary Visit" secondary="July 20, 2011" />
                </ListItem>
            </List>
        </Grid>
    )
}

export default Insurance;


