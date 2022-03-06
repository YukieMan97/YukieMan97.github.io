import './Button.css'
export default function EmailLink(props) {
    let type = props.type;
    return (
        <div>
            {type === 'landing'
                ? <a className='landing'
                    sx={{ "&:hover": { color: `rgb(30,144,255)` } }}
                    aria-label="email"
                    href="mailto:yukie.man97@gmail.com" >
                    yukie.man97@gmail.com
                </a>
                : <a className='about'
                    sx={{ "&:hover": { color: `rgb(30,144,255)` } }}
                    aria-label="email"
                    href="mailto:yukie.man97@gmail.com" >
                    yukie.man97@gmail.com
                </a>
            }
        </div>

    )
}