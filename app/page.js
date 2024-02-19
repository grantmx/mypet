import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ad from "@/public/home-ad.png"
import Image from 'next/image';
import { Avatar, Button, Container, Divider, Stack, Typography } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import DirectionsIcon from '@mui/icons-material/Directions';
import vet from "@/public/2023-04-13.jpg";
import ContentCutOutlinedIcon from '@mui/icons-material/ContentCutOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import { blue, orange, green, pink } from '@mui/material/colors';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';


export default function Home() {
	return (
		<>
			<Box sx={{ flexGrow: 1, p: 2 }}>
				<Grid container spacing={2}>
					<Grid xs={12}>
						<Paper elevation={0}>
							<Image 
								src={ad} 
								alt="Home Ad" 
								width='534' 
								height="386" 
								style={{ objectFit: "contain", width: "100%", height: "auto" }}
							/>
						</Paper>
					</Grid>
				</Grid>
			</Box>


			<Container maxWidth="sm">
				<Grid container spacing={2}>
					<Grid xs={12}>
						<Stack spacing={2} direction="row" alignItems="center" sx={{ marginBottom: "40px" }}>
							<Stack sx={{ minWidth: 0 }}>
								<Typography noWrap variant='subtitle2' sx={{ marginBottom: 0 }} color="grey">
									<small>Nearest Vet</small>
								</Typography>
								<Typography noWrap variant="h6" sx={{ marginBottom: 0 }}>
									Vitalvet - Animal Medical Centre
								</Typography>
								<Typography noWrap variant='subtitle2' sx={{ marginBottom: 1.5 }}>
									10 Knysna Rd, George
								</Typography>

								<Stack direction="row" spacing={2}>
									<Button size="small" variant="outlined" startIcon={<CallIcon />}>
										Call
									</Button>

									<Button size="small" variant="outlined" startIcon={<DirectionsIcon />}>
										Directions
									</Button>
								</Stack>
								
							</Stack>

							<Stack>
								<Avatar src={vet.src} alt="Natacha" sx={{ width: 75, height: 75 }}/>
							</Stack>
						</Stack>
					</Grid>
				</Grid>

				<Divider sx={{ margin: "0 0 30px 0" }} />

				<Grid container spacing={2}>
					<Grid xs={4}>
						<Stack spacing={2} alignItems="center">
							<Avatar sx={{ width: 75, height: 75, bgcolor: orange[500] }}>
								<ContentCutOutlinedIcon fontSize='large' />
							</Avatar>

							<Typography noWrap variant='subtitle2'>
								Groomers
							</Typography>
						</Stack>
					</Grid>

					<Grid xs={4}>
						<Stack spacing={2} alignItems="center">
							<Avatar sx={{ width: 75, height: 75, bgcolor: blue[500] }}>
								<SchoolOutlinedIcon fontSize='large' />
							</Avatar>

							<Typography noWrap variant='subtitle2'>
								Education
							</Typography>
						</Stack>
					</Grid>
					
					<Grid xs={4}>
						<Stack spacing={2} alignItems="center">
							<Avatar sx={{ width: 75, height: 75, bgcolor: green[500] }}>
								<PetsOutlinedIcon fontSize='large' />
							</Avatar>

							<Typography noWrap variant='subtitle2'>
								Supplies
							</Typography>
						</Stack>
					</Grid>
				</Grid>

				<Divider sx={{ margin: "30px 0 30px 0" }} />

				<Grid container spacing={2}>
					<Grid xs={12}>
						<Button 
							variant="contained" 
							size="large" 
							color='error' 
							sx={{ width: "100%", p: 2, mb: 1 }} 
							endIcon={<ArrowCircleRightOutlinedIcon fontSize='large' />}
						>
							<Typography noWrap variant='h6'>
								Found a stray?
							</Typography>
						</Button>
						
						<Typography noWrap variant='subtitle2' sx={{ textAlign: "center" }}>
							Report a stray pet to get it home safe.
						</Typography>
					</Grid>
				</Grid>

			</Container>
			
		</>
  	);
}
