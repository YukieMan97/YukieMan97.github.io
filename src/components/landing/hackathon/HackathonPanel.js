import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Divider } from '@mui/material';
import DisplayHackathonInPanel from './DisplayHackathonInPanel';
import 'animate.css';
import '../Landing.css'
import { getHackathons } from '../../../data/hackathonData';

export default function HackathonPanel() {
    let hackathons = getHackathons();
    return (
        <div className='panel-bottom-padding'>
            <div className='hackathon-panel-colour'>
                <h1 className='highlight-hackathon reveal'>Hackathons</h1>
                <Container className='panel-container'>
                    {hackathons.map(hackathon => (
                        <div>
                            {hackathon.id === 1 || hackathon.id === 2
                            ? <div>
                                <div className='reveal'>
                                    <DisplayHackathonInPanel
                                        key={hackathon.id}
                                        hackathon={hackathon} />
                                </div>
                                <Divider />
                            </div>
                            : <div></div>
                            }
                        </div>
                    ))}
                </Container>
                <Button
                    className='view-more-link'
                    variant="link"
                    as={Link}
                    to="/hackathons">
                    View More Hackathons
                </Button>
            </div>
        </div>
    )
}