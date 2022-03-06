import { displayPDescription, displayHDescription, displayFirstPlace } from '../../helpers';
import CarouselPhotos from './CarouselPhotos';
import './Landing.css'

export default function DisplayWebApp(props) {

    return (
        <div id={props.typeId}>
            {props.type === 'hackathon'
                ? displayFirstPlace()
                : ""
            }
            <CarouselPhotos 
                images={props.images} 
                imageTitles={props.imageTitles}
                page='landing'
            />
            {props.type === 'project'
                ? displayPDescription(props.typeId, true)
                : displayHDescription(props.typeId, true)
            }
        </div>
    )
}