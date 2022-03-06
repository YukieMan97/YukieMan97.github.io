import { Button } from '@mui/material'
import { handleLink } from '../../helpers';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../landing/Landing.css';
export default function RepoButton(props) {
    let link = props.link;
    const handleRepoLink = () => {
        handleLink(link);
      }
    
    return (
        <Button
            sx={{"&:hover": { color: `rgb(30,144,255)` } }}
            aria-label="repo"
            onClick={handleRepoLink} > 
            <GitHubIcon className='button-space'/> View More on GitHub
        </Button>
    )
}