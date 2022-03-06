import { Card, Typography, CardContent, CardActions, CardMedia } from '@mui/material';
import profilePic from '../../assets/profile-pic.jpg';
import './Landing.css'
import GitHubButton from '../button/GitHubButton';
import LinkedInButton from '../button/LinkedInButton';
import EmailLink from '../button/EmailButton';
import '../button/Button.css'

export default function AboutPanel() {
    return (
            <div>
                <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                        <div className='align-center-pic'>
                            <CardMedia
                        className='profile-pic'
                        component="img"
                        sx={{ width: 140 }}
                        image={profilePic}
                        alt="Profile Picture"
                    />
                        </div>
                        <Typography className='align-center' gutterBottom variant="h5" component="div">
                            Yukie Man
                        </Typography>
                        <Typography className='align-center' variant="body" color="text.secondary">
                            UBC CS
                        </Typography>
                        <Typography className='align-center' variant="body2" color="text.secondary">
                            Expected May 2022
                        </Typography>
                        <br />
                        <Typography className='align-center' variant="subtitle" color="text.secondary" component="div">
                            <EmailLink type={'landing'}/>
                        </Typography>
                        <Typography className='align-center' variant="body2" color="text.secondary">
                            Burnaby, BC
                        </Typography>
                    </CardContent>
                    <CardActions className='align-center'>
                        <GitHubButton link={'https://github.com/YukieMan97'}/>
                        <LinkedInButton />
                    </CardActions>
                </Card>
            </div>
    )
}