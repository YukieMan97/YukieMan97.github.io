import { Row } from 'react-bootstrap';
import DisplayWebApp from '../DisplayWebApp';
import DisplayPhoneApp from '../DisplayPhoneApp';
import './../Landing.css'
import { HashLink } from 'react-router-hash-link';

export default function DisplayHackathonInPanel(props) {
    let hackathon = props.hackathon;
    return (
        <Row className='top-bot-padding'>
            <div className='title-info'>
                <h3 className='highlight-hackathon'>{hackathon.title}</h3>
                <span className='float-right italics'>{hackathon.role} | {hackathon.date} {hackathon.year}</span>
            </div>
            <h6 className='tool-p'>{hackathon.tools}</h6>
            {props.hackathon.id === 1
                ? <DisplayWebApp 
                type="hackathon"
                typeId={hackathon.id}
                images={hackathon.images} 
                imageTitles={hackathon.imageTitles}
            />
             : <DisplayPhoneApp 
                type="hackathon"
                typeId={hackathon.id}
                images={hackathon.images} 
                imageTitles={hackathon.imageTitles}
         />
             }
            <HashLink
                className='img-center'
                to={`/hackathons#${hackathon.id}`}
                scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: "start"})}
            >Learn More</HashLink>
        </Row>
    )
}