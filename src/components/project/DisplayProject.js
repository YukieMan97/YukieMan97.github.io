import { Card, CardContent, Typography, CardActions, Grid } from '@mui/material';
import { Row } from 'react-bootstrap';
import { displayPDescription, displayHDescription, displayYoutubeWithLink } from '../../helpers';
import YouTubeButton from '../button/YouTubeButton';
import DevPostButton from '../button/DevPostButton';
import DemoButton from '../button/DemoButton';
import CarouselPhotos from '../landing/CarouselPhotos';
import '../landing/Landing.css';
import GitHubButton from '../button/GitHubButton';
import { displayFirstPlace } from '../../helpers';

export default function DisplayProject(props) {
    let project = props.project;
    let type = props.type;
    return (
        <Row id={project.id} className={'scroll-header project-padding'}>
            <Card
                sx={
                    type === "project"
                        ?
                        {
                            display: 'flex', "&:hover":
                            {
                                border: '1px solid rgb(30,144,255)',
                                boxShadow: '0 0 10px rgb(30,144,255)'
                            }
                        }
                        :
                        {
                            display: 'flex', "&:hover":
                            {
                                border: '1px solid rgb(1, 177, 30)',
                                boxShadow: '0 0 10px rgb(1, 177, 30)'
                            }
                        }
                }
                className='project-card'>
                <Grid container spacing={2}>
                    {project.images.length <= 1
                        ? displayYoutubeWithLink(project.youtube, project.images)
                        :
                        <Grid item xs={12} lg={4}>
                            <CarouselPhotos
                                images={project.images}
                                imageTitles={project.imageTitles}
                                type='page'
                            />
                        </Grid>
                    }
                    <Grid item 
                        xs={12}
                        lg={project.display ? 8 : 12}
                    >
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {project.title}
                            </Typography>
                            <Typography gutterBottom variant="subtitle-1" component="div">
                                {project.role} | {project.date} {project.year}
                            </Typography>
                            <Typography gutterBottom variant="subtitle-2" component="div">
                                {project.tools}
                            </Typography>
                            {project.place === 'first'
                                ? displayFirstPlace()
                                : ""
                            }
                            <Typography variant="body1">
                                {type === 'project'
                                    ? displayPDescription(project.id)
                                    : displayHDescription(project.id)}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            {project.projectLink === ""
                                ? ""
                                : <DemoButton key={project.id} link={project.projectLink} />}
                            {project.github === ""
                                ? ""
                                : <GitHubButton key={project.id} link={project.github} />
                            }
                            {project.devpost === ""
                                ? ""
                                : <DevPostButton key={project.id} link={project.devpost} />
                            }
                            {project.youtube === ""
                                ? ""
                                : <YouTubeButton key={project.id} link={project.youtube} />
                            }
                        </CardActions>
                    </Grid>
                </Grid>
            </Card>
        </Row>
    )
}