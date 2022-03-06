
import { Controller } from 'react-scrollmagic';
import { Container } from 'react-bootstrap';
import Education from '../components/about/Education';
import Intro from '../components/about/Intro';
import Experience from '../components/about/Experience';
import Skills from '../components/about/Skills';
import Goals from '../components/about/Goals';
import Interests from '../components/about/interest/Interests';
import { reveal } from '../helpers';
import 'animate.css';

export default function About() {
    window.addEventListener("scroll", reveal);
    return (
        <div>
            <h1 className='
                animate__animated 
                animate__fadeInDown 
                highlight-project 
                highlight-about 
                project-margin'>More about me!</h1>
            <Container>
                <Controller>
                    <Intro />
                    <Education />
                    <Experience />
                    <Skills />
                    <Goals />
                    <Interests />
                </Controller>
            </Container>
        </div>
    )
}