import { IconButton } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import { handleLink } from '../../helpers';

export default function EmailIconButton() {
    const handleEmailLink = () => {
        handleLink('mailto:yukie.man97@gmail.com');
      }
    return (
        <IconButton
            sx={{ "&:hover": { color: `rgb(30,144,255)` } }}
            aria-label="email"
            onClick={handleEmailLink}>
            <EmailIcon />
        </IconButton>
    )
}