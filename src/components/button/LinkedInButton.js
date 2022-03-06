import { IconButton } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { handleLink } from '../../helpers';

export default function LinkedInButton() {
    const handleLinkedInLink = () => {
        handleLink('https://www.linkedin.com/in/yukieman/');
    }

    return (
        <IconButton
            sx={{ "&:hover": { color: `rgb(30,144,255)` } }}
            aria-label="linked-in"
            onClick={handleLinkedInLink}>
            <LinkedInIcon />
        </IconButton>
    )
}