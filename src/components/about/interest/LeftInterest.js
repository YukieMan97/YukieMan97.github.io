import { Row, Col } from 'react-bootstrap';
import { Grid } from '@mui/material';
import '../About.css';
import '../../landing/Landing.css';
import '../../project/Project.css';

export default function LeftInterest(props) {
    let interest = props.interest;
    return (
        <div className='reveal margin-interest-l'>
            <Row>
                <Col xs={3}>
                    <div className='interest-margin'>
                        <p>{interest.title}</p>
                        <p>{interest.descrip}</p>
                    </div>
                </Col>
                <Col xs={9}>
                    <Grid container>
                        <Grid item container direction="row">
                        {interest.images.map((image) => {
                            return (
                                <Grid item xs={12} md={6}>
                                    <div className={'noncarousel-img-page'}>
                                    <img
                                        className='interest-pic margin-img-l'
                                        src={image.loc}
                                        alt={image.title} />
                                    </div>
                                </ Grid>
                            )
                        })}
                         </Grid>
                    </Grid>
                </Col>
            </Row>
        </div>
    )
}