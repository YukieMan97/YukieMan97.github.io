import { Scene } from 'react-scrollmagic';
import { Row, Col } from 'react-bootstrap';

export default function Experience() {
    return (
        <Scene
            duration={350}
            pin={{ pushFollowers: true }}
            triggerHook={0.75}
            offset={300}
        >
            <Row className='about-section-padding'>
                <h3 className='highlight-about'>I've had experience with...</h3>

                <Col>
                    <h4>Languages</h4>
                    <ul>
                        <li>Java</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>Python</li>
                        <li>SQL</li>
                    </ul>
                </Col>

                <Col>
                    <h4>Tools</h4>
                    <ul>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                        <li>Heroku</li>
                        <li>Postman</li>
                        <li>MS Excel</li>
                    </ul>
                </Col>

                <Col>
                    <h4>Frameworks/Libraries</h4>
                    <ul>
                        <li>ReactJS</li>
                        <li>Git</li>
                        <li>NodeJS</li>
                        <li>Express</li>
                    </ul>
                </Col>
            </Row>
        </Scene>
    )
}