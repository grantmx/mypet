import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import fluffy from "@/public/fido.jpg"
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import avatar from "@/public/300-6.jpg";
import Avatar from "@mui/material/Avatar";
import VaccinesIcon from '@mui/icons-material/Vaccines';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';

function Pet() {
    return (
        <Card sx={{ width: "100%", marginBottom: 8 }} elevation={0}>
            <CardMedia
                sx={{ height: 500 }}
                image={fluffy.src}
                title="green iguana"
            />

            <CardContent>
                <Typography gutterBottom variant="h4" component="h1" >
                    Snoopy <small style={{ fontSize: "14px" }}>(Beagle)</small>
                </Typography>

                <Stack direction="row" spacing={1} sx={{ margin: "20px 0" }}>
                    <Chip label="Age: 2" color="warning" />
                    <Chip label="Gender: Male" color="primary" />
                    <Chip label="Weight: 3.5 kg" color="secondary" />
                    <Chip label="Vaccine: Yes" color="success" />
                </Stack>


                <Stack spacing={2} direction="row" alignItems="center" sx={{ marginBottom: "20px" }}>
                    <Stack>
                        <Avatar alt="Natacha" src={avatar.src} sx={{ width: 56, height: 56 }}/>
                    </Stack>

                    <Stack sx={{ minWidth: 0 }}>
                        <Typography noWrap variant="h6" sx={{ marginBottom: 0 }}>
                            Remy Sharp
                        </Typography>
                        <Typography noWrap variant='subtitle2'>
                            Owner
                        </Typography>
                    </Stack>
                </Stack>

    
                <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                </Typography>
            </CardContent>

            <CardActions>
                <Button size="small" startIcon={<BloodtypeIcon />}>
                    Pedigree
                </Button>

                <Button size="small" startIcon={<VaccinesIcon />}>
                    Vaccinations
                </Button>
            </CardActions>
        </Card>
    )

}

export default Pet;