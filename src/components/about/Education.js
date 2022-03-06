import { Scene } from 'react-scrollmagic';
import { Row, Col } from 'react-bootstrap';
import '../landing/Landing.css'
import './About.css'

export default function Education() {
    return (
        <Scene
            duration={350}
            pin={{ pushFollowers: true }}
            triggerHook={0.75}
            offset={300}
        >
            <div className='align-center about-section-padding'>
                <Row>
                    <h3 className='highlight-about'>Education</h3>
                    <Col md={6}>
                        <h2>University of British Columbia</h2>
                        <p>Bachelor of Science in Computer Science</p>
                        <p>Expected Graduation: May 2022</p>
                    </Col>
                    <Col md={1}></Col>
                    <Col md={4}>
                        <h2>Langara College</h2>
                        <p>Associate of Science: General Science</p>
                        <p>Sep 2016 - Apr 2017</p>
                    </Col>
                </Row>
            </div>
        </Scene>
    )
}