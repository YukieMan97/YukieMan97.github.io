import { HashLink } from 'react-router-hash-link';
import '../landing/Landing.css';

export default function LearnMoreButton(props) {

    return (
        <HashLink
                className='align-center'
                to={`/${props.type}#${props.id}`}
                scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}
            >Learn More</HashLink>
    )
}