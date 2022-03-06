import { IconButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import { handleLink } from '../../helpers';

export default function GitHubButton(props) {
    let link = props.link;
    const handleGitHubLink = () => {
        handleLink(link);
      }
    return (
        <IconButton
            sx={{ "&:hover": { color: `rgb(30,144,255)` } }}
            aria-label="github"
            onClick={handleGitHubLink}>
            <GitHubIcon />
        </IconButton>
    )
}