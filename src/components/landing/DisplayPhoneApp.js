import { Row, Col } from 'react-bootstrap';
import { displayHDescription, displayFirstPlace } from '../../helpers';
import CarouselPhotos from './CarouselPhotos';
import './Landing.css'

export default function DisplayPhoneApp(props) {
    return (
        <div id={props.typeId}>
            <Row>
            {props.type === 'hackathon'
                ? displayFirstPlace()
                : <div></div>
            }
            </Row>
            <Row>
                <Col>
                    <CarouselPhotos 
                        images={props.images} 
                        imageTitles={props.imageTitles}
                        page='landing'
                    />
                </Col>
                <Col>
                    {displayHDescription(2, true)}
                </Col>
            </Row>
        </div>
    )
}