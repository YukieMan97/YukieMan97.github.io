import './../components/project/Project.css';
import './../components/landing/Landing.css';
import { Col, Row } from 'react-bootstrap';
import DisplayWorkE from '../components/work-experience/DisplayWorkE';
import { getWorkExperience } from '../data/workExperienceData';
import '../components/landing/Landing.css';
import EmailButton from '../components/button/EmailButton';
import 'animate.css';

export default function WorkExperiences() {
    let works = getWorkExperience();
    return (
        <div className='project-margin'>
            <h1 className='animate__animated animate__fadeInDown highlight-we'>Work Experience</h1>
            <Row className='animate__animated animate__fadeIn animate__slower network-spacing'>
                <h3 className='img-center highlight-we'>Open to network!</h3>
                <h5 className='img-center'>Feel free to email me
                    <EmailButton />
                </h5>
            </Row>
            <Col>
                {works.map(work => {
                    return (
                        <DisplayWorkE
                            key={work.id}
                            work={work} />
                    )
                })}
            </Col>
        </div>
    )
}