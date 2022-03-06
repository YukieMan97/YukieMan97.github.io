import { IconButton } from '@mui/material'
import { handleLink } from '../../helpers';
import { Icon } from '@iconify/react';

export default function DevPostButton(props) {
    let link = props.link;
    const handleDevPostLink = () => {
        handleLink(link);
      }
    
    return (
        <IconButton
            sx={{"&:hover": { color: `rgb(30,144,255)` } }}
            aria-label="devpost"
            onClick={handleDevPostLink} >
                <Icon icon="simple-icons:devpost" />
        </IconButton>
    )
}