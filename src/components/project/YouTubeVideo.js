import '../landing/Landing.css';
import './Project.css';

export default function YouTubeVideo(props) {
    let youtube = props.youtube
    return (
        <div className='videoWrapper'>
            <iframe title='youtube-video' className='youtube-video'
                src={youtube}>
            </iframe>
        </div>
    )
}