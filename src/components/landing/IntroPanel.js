import { Scene, Controller } from 'react-scrollmagic';
import { Button, Container } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import 'animate.css';
import './Landing.css'
import AboutPanel from './AboutPanel';
import { Grid } from '@mui/material';

export default function IntroPanel() {
    return (
        <Controller>
            <Scene
                duration={'40%'}
                pin={{ pushFollowers: false }}
                triggerHook={0.25}
                offset={400}
            >
                <div className='panel-padding'>
                    <Grid container spacing={2}>
                        <Grid className='img-center' item lg={3}>
                            <div className='about-card'>
                                <AboutPanel />
                            </div>
                        </Grid>
                        <Grid item lg={9}>
                            <div className='info-panel'>
                                <h1 className='animate__animated animate__fadeInDown highlight-project'>Hello, I'm Yukie!</h1>
                                <h2 className='animate__animated animate__fadeInDown highlight-hackathon'>
                                    Explore my projects, hackathons, and work experiences!
                                </h2>
                                <br />
                                <Container className='animate__animated animate__fadeIn animate__delay-1s'>
                                    <div className='intro-padding'>
                                        <h3 className='highlight-we'>A little bit about myself...</h3>
                                        <p>I will be graduating <span className='highlight-project'> May 2022 </span>
                                            at <span className='highlight-project'> UBC with a </span>
                                            <span className='highlight-project'>BSc in Computer Science</span>. I met and
                                            teamed up with many amazing peers through classes, hackathons, and mutuals.
                                            Hoping to find a great work environment where I can grow further as a
                                            developer.
                                        </p>
                                        <p> Although my main focus is backend, I've recently been working with
                                            <span className='highlight-project'> React/JavaScript </span>
                                            and enjoy it a lot! Since I didn't have any frontend experience 
                                            at the time and my teammates wanted to work on the backend, 
                                            I decided to learn React. 
                                        </p>
                                        <p>
                                            In my current project, I'm working on the backend
                                            with <span className='highlight-project'> Java </span> and
                                            <span className='highlight-project'> Spring Boot</span>.
                                            <span className='highlight-project'> Java </span> has always been my favourite
                                            programming language because of its organized structure, garbage collector, and
                                            ability to handle exceptions.
                                        </p>

                                        <p>Some other languages and tools I'm familiar with are...</p>
                                        <ul>
                                            <li>Python</li>
                                            <li>TypeScript</li>
                                            <li>MongoDB</li>
                                            <li>Visual Studio Code</li>
                                        </ul>
                                    </div>
                                </Container>
                                <br />
                                <Button
                                    className='highlight-about animate__animated animate__fadeIn animate__delay-1s'
                                    variant="link"
                                    as={Link}
                                    to="/about">
                                    Read more about me!
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                    <div className='arrow-margin'>
                        <HashLink
                            className='img-center'
                            to={`/#project-panel`}
                            scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: "start" })}
                        >
                            <KeyboardArrowDownIcon
                                fontSize='large'
                                className='animate__animated
                    animate__fadeInDown 
                    animate__infinite
                    animate__slower
                    highlight-project
                    ' />
                        </HashLink>
                    </div>
                </div>
            </Scene>
        </Controller >
    )
}