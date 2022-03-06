import './../components/project/Project.css';
import  './../components/landing/Landing.css';
import { Col, Row } from 'react-bootstrap';
import DisplayProject from '../components/project/DisplayProject';
import { getProjects } from '../data/projectData';
import RepoButton from '../components/button/RepoButton';
import 'animate.css';

export default function Projects() {
    let projects = getProjects();

    return (
        <div className='project-margin'>
            <h1 className='animate__animated animate__fadeInDown highlight-project'>Projects</h1>
            <Col>
                {projects.map(project => {
                    return (
                        <DisplayProject
                            key={project.id} 
                            project={project} 
                            type={"project"} />
                    )
                })}
            </Col>
            <Row>
            <RepoButton link='https://github.com/YukieMan97?tab=repositories'/>
            </Row>
        </div>
    )
}