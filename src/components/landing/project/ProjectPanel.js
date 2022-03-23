import { Controller, Scene } from 'react-scrollmagic';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Divider } from '@mui/material';
import { getProjects } from "../../../data/projectData";
import './../Landing.css';
import DisplayProjectInPanel from './DisplayProjectInPanel';

export default function ProjectPanel() {
    let projects = getProjects();
    return (
        <div id='project-panel' className='panel-bottom-padding'>
            <Controller>
                <Scene
                    duration={1}
                    pin={{ pushFollowers: true }}
                    triggerHook={0.75}
                    offset={300}
                >
                    <div className='project-panel-colour'>
                        <h1 className='highlight-project reveal'>Projects</h1>
                        <Container className='panel-container'>
                            {projects.map(project => (
                                <div>
                                    {project.id === 0 || project.id === 1 || project.id === 2
                                        ? 
                                        <div>
                                            <div className='reveal'>
                                                <DisplayProjectInPanel key={project.id} project={project} />
                                            </div>
                                            <Divider />
                                        </div>
                                        : <div></div>
                                    }
                                </div>
                            ))}
                        </Container>
                        <Button
                            variant="link"
                            as={Link}
                            to="/projects">
                            View More Projects
                        </Button>
                    </div>
                </Scene>
            </Controller>
        </div>
    )
}