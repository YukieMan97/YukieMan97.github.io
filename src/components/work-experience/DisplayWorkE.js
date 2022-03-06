import { Card, CardContent, Typography, Grid } from '@mui/material';
import { Row } from 'react-bootstrap';
import { displayWDescription } from '../../helpers';
import '../landing/Landing.css';
import '../project/Project.css';

export default function DisplayWorkE(props) {
    let work = props.work;
    return (
        <Row id={work.id} className={'scroll-header project-padding'}>
            <Card
                sx={{
                    display: 'flex', "&:hover": {
                        border: '1px solid rgb(177, 1, 104)',
                        boxShadow: '0 0 10px rgb(177, 1, 104)'
                    }
                }}
                className='project-card'>

                <Grid container spacing={2}>
                    {work.logo === ''
                        ? ""
                        :
                        <Grid item xs={3}>
                            <div className={'align-center we-img-page'}>
                                <img
                                    src={work.logo}
                                    alt={work.logoTitle}
                                />
                            </div>
                        </Grid>
                    }

                    <Grid item xs={work.logo === '' ? 12 : 9}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {work.workPlace}
                            </Typography>
                            <Typography gutterBottom variant="subtitle-1" component="div">
                                {work.date}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                {displayWDescription(work.id)}
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
        </Row>
    )
}