import { Scene } from 'react-scrollmagic';
import { Row, Col } from 'react-bootstrap';
import profilePic from '../../assets/profile-pic.jpg'
import logo from '../../assets/yukie-logo.png'
import GitHubButton from '../button/GitHubButton';
import LinkedInButton from '../button/LinkedInButton';
import EmailLink from '../button/EmailButton';
import '../landing/Landing.css'
import 'animate.css';
import './About.css'

export default function Intro() {
    return (
        <Scene
            duration={200}
            pin={{ pushFollowers: true }}
            triggerHook={0.75}
            offset={500}
        >
            <div>
                <div className='animate__animated animate__fadeInDown highlight-project align-center about-me-padding'>
                    <Row>
                        <Col className='first-intro-spacing'>
                            <img
                                className="profile-pic-about"
                                src={profilePic}
                                alt="Profile Pic"
                            />
                        </Col>
                        <Col className='intro-spacing'>
                            <h1 className='highlight-about'>Yukie Man</h1>
                            <p>She/Her</p>
                            <h6><EmailLink type={'about'} /></h6>
                            <h6>Burnaby, BC</h6>
                            <br />
                            <p>Connect with me!</p>
                            <GitHubButton link={'https://github.com/YukieMan97'} />
                            <LinkedInButton />
                        </Col>
                        <Col className='intro-spacing'>
                            <img
                                className="logo-about"
                                src={logo}
                                alt="logo"
                            />
                        </Col>
                    </Row>
                </div>
            </div>
        </Scene>
    )
}