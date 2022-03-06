import { Scene } from 'react-scrollmagic';
import { Row, Col } from 'react-bootstrap';
import { skills } from '../../data/skillData';
import './About.css'

export default function Skills() {
    return (
        <Scene
            duration={350}
            pin={{ pushFollowers: true }}
            triggerHook={0.75}
            offset={300}
        >
            <div className='about-section-padding'>
                <Row>
                    <h3 className='highlight-about'>Summary of Skills</h3>
                </Row>
                <div className='margin-skills'>
                    {skills.map(skill => {
                        return (
                            <Row>
                                <Col xs={4} lg={2}>
                                    <p>{skill.skill}</p>
                                </Col>
                                <Col xs={8} lg={10}>
                                    <p>{skill.descrip}</p>
                                </Col>
                            </Row>
                        )
                    })}
                </div>
            </div>
        </Scene>
    )
}