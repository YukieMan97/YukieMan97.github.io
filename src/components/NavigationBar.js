import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link, NavLink } from "react-router-dom";
import './landing/Landing.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import yukieLogo from '../assets/yukie-logo.png';
import './about/About.css';
import GitHubButton from './button/GitHubButton';
import LinkedInButton from './button/LinkedInButton';
import Scroll from 'react-scroll';

export default function NavigationBar() {

    return (
        <div>
            <Container>
                <Navbar variant="light" className='nav-bar-padding nav-bar-bg-white' expand="lg" fixed="top">
                    <div>
                        <Navbar.Brand
                            onClick={() => Scroll.scrollTo('/', {
                                smooth: true,
                                offset: -70,
                                duration: 500,
                            })}
                            as={Link}
                            to="/">
                            <img
                                src={yukieLogo}
                                width="70"
                                height="70"
                                className="d-inline-block align-top margin-img-l"
                                alt="Yukie logo"
                            />
                        </Navbar.Brand>
                    </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='me-auto nav-bar-padding'>
                            <Nav.Item className='about link-margin'>
                                <NavLink
                                    onClick={() => Scroll.scrollTo('about', {
                                        smooth: true,
                                        offset: -70,
                                        duration: 500,
                                    })}
                                    className='link-colour'
                                    to="/about">About</NavLink>
                            </Nav.Item>
                            <Nav.Item className='project link-margin'>
                                <NavLink
                                    onClick={() => Scroll.scrollTo('projects', {
                                        smooth: true,
                                        offset: -70,
                                        duration: 500,
                                    })}
                                    className='link-colour'
                                    to="/projects">Projects</NavLink>
                            </Nav.Item>
                            <Nav.Item className='hackathon link-margin'>
                                <NavLink
                                    onClick={() => Scroll.scrollTo('hackathons', {
                                        smooth: true,
                                        offset: -70,
                                        duration: 500,
                                    })}
                                    className='link-colour'
                                    to="/hackathons"> Hackathons </NavLink>
                            </Nav.Item>
                            <Nav.Item className='work-experience link-margin'>
                                <NavLink
                                    onClick={() => Scroll.scrollTo('work-experience', {
                                        smooth: true,
                                        offset: -70,
                                        duration: 500,
                                    })}
                                    className='link-colour'
                                    to="/work-experience"> Work Experience </NavLink>
                            </Nav.Item>
                        </Nav>
                        <GitHubButton link='https://github.com/YukieMan97' />
                        <LinkedInButton link='https://www.linkedin.com/in/yukieman/' />
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    )
}