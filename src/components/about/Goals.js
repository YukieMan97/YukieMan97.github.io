import { Scene } from 'react-scrollmagic';
import { Row } from 'react-bootstrap';

export default function Goals() {
    return (
        <Scene
            duration={350}
            pin={{ pushFollowers: true }}
            triggerHook={0.75}
            offset={300}
        >
            <Row className='about-section-padding'>
                <h3 className='highlight-about'>Goals for 2022!</h3>
                <ul>
                    <li>More backend experience - Set up backend and database for my upcoming project</li>
                    <li>Incorporate a project using <span className='highlight-about-dark'> SpringBoot</span></li>
                    <li>Create a project with <span className='highlight-about-dark'> Angular</span></li>
                    <li>Complete a personal project, inspired by working at Sakura Media - Customer Order Form</li>
                    <li>Exercising weekly, stretching daily</li>
                </ul>
            </Row>
        </Scene>
    )
}