import { Carousel } from 'react-bootstrap';
import './Landing.css';
import '../project/Project.css';

export default function CarouselPhotos(props) {
    let images = props.images;

    return (
    <Carousel variant="dark" fade>
                        {images.map(image => {
                        return (
                            <Carousel.Item className='carousel-item' interval={2000}>
                            <div className='img-center'>
                                <img
                                    className={props.type === 'landing' 
                                        ? 'carousel-img' 
                                        : 'carousel-img-page'}
                                    src={image.loc}
                                    alt={image.title}
                                />
                            </div>
                            <Carousel.Caption>
                                <p>{image.title}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        )
                    })}
                    </Carousel>
    )
}