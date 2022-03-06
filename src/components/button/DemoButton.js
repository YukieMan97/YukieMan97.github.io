import { Button } from '@mui/material'
import { handleLink } from '../../helpers';
export default function DemoButton(props) {
    let link = props.link;
    const handleDemoLink = () => {
        handleLink(link);
      }
    
    return (
        <Button
            sx={{"&:hover": { color: `rgb(30,144,255)` } }}
            aria-label="demo"
            onClick={handleDemoLink} > Demo
        </Button>
    )
}