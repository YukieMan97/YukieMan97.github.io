import { Row } from 'react-bootstrap';
import DisplayWebApp from '../DisplayWebApp';
import './../Landing.css';
import { HashLink } from 'react-router-hash-link';

export default function DisplayProjectInPanel(props) {
    let project = props.project;

    return (
        <Row className='top-bot-padding'>
            <div className='title-info'>
                <h3 className='highlight-project'>{project.title}</h3>
                <span className='float-right italics'>{project.role} | {project.date} {project.year}</span>
            </div>
            <h6 className='tool-p'>{project.tools}</h6>
            <DisplayWebApp
                type="project"
                typeId={project.id}
                images={project.images}
                imageTitles={project.imageTitles}
            />
            <HashLink
                className='img-center'
                to={`/projects#${project.id}`}
                scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: "start"})}
            >Learn More</HashLink>
        </Row>
    )
}