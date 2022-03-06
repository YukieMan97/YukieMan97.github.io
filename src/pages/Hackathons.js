import { Col, Row } from 'react-bootstrap';
import './../components/project/Project.css';
import DisplayProject from '../components/project/DisplayProject';
import { getHackathons } from '../data/hackathonData';
import RepoButton from '../components/button/RepoButton';
import 'animate.css';

export default function Projects() {
    let hackathons = getHackathons();
    return (
        <div className='project-margin'>
            <h1 className='animate__animated animate__fadeInDown highlight-hackathon'>Hackathons</h1>
            <Col>
                {hackathons.map(project => {
                    return (
                        <DisplayProject 
                            key={project.id} 
                            project={project} 
                            type={"hackathon"} />
                    )
                })}
            </Col>
            <Row>
            <RepoButton link='https://github.com/YukieMan97?tab=repositories'/>
            </Row>
        </div>
    )
}