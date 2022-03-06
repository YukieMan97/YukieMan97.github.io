import { Row } from 'react-bootstrap';
import { Avatar } from '@mui/material'
import image from '../../../assets/sakura-media.jpg';
import { HashLink } from 'react-router-hash-link';
import './../Landing.css'
import { sakuraMediaDescription } from '../../../workEConstants';

export default function FirstWork() {
    return (
        <Row className='top-bot-padding'>
            <div className='title-info'>
            <div className='align-logo-text'>
                <Avatar
                    alt="Sakura Media Logo"
                    src={image}
                    sx={{ width: 56, height: 56 }}
                />
                    <h3 className='highlight-we padding-left'>Sakura Media @ Metrotown</h3>
            </div>
                <span className='float-right italics'>May 2019 - Present</span>
            </div>

            {sakuraMediaDescription()}
            <HashLink
                className='img-center'
                to={`/work-experience#${0}`}
                scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'start' })}
            >Learn More</HashLink>
        </Row>
    )
}