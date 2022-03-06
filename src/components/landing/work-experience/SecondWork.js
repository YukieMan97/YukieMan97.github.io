import { Row } from 'react-bootstrap';
import './../Landing.css'
import { mtnDescription } from '../../../workEConstants';
import { HashLink } from 'react-router-hash-link';

export default function SecondWork() {
    return (
        <Row className='top-bot-padding'>
            <div className='title-info'>
            <h3 className='highlight-we'>Math Tutor Network</h3>
                <span className='float-right italics'>Nov 2018 - Present</span>
            </div>
            {mtnDescription()}
            <HashLink
                className='img-center'
                to={`/work-experience#${1}`}
                scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'start' })}
            >Learn More</HashLink>
        </Row>
    )
}