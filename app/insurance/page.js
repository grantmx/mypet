import { Divider, Grid, Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';



function Insurance(){
    return(
        <Grid container>
			<Grid xs={12} sx={{ p: 2 }}>
                <Typography variant="h4">
                    Coverage & History
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


