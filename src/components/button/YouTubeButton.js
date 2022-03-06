import { IconButton } from '@mui/material'
import YouTubeIcon from '@mui/icons-material/YouTube';
import { handleLink } from '../../helpers';

export default function YouTubeButton(props) {
    let link = props.link;
    const handleYoutubeLink = () => {
        handleLink(link);
      }
    
    return (
        <IconButton
            sx={{ "&:hover": { color: `rgb(30,144,255)` } }}
            aria-label="youtube"
            onClick={handleYoutubeLink}>
            <YouTubeIcon />
        </IconButton>
    )
}