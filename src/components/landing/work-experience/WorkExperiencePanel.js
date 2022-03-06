import FirstWork from './FirstWork';
import SecondWork from './SecondWork';
import { Container } from 'react-bootstrap';
import { Divider } from '@mui/material';
import './../Landing.css';

export default function WorkExperiencePanel() {
    return (
        <div className='panel-bottom-padding'>
            <div className='we-panel-colour'>
                <h1 className='highlight-we reveal'>Work Experience</h1>
                <Container>
                    <div className='reveal'>
                        <FirstWork />
                    </div>
                    <Divider />
                    <div className='reveal'>
                        <SecondWork />
                    </div>
                </Container>
            </div>
        </div>
    )
}