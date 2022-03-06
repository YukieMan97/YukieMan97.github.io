import { Route, Routes } from 'react-router-dom'
import App from './App';
import Projects from './pages/Projects'
import Project from './pages/Project'
import Hackathon from './pages/Hackathon'
import Hackathons from './pages/Hackathons'
import WorkExperiences from './pages/WorkExperiences'
import About from './pages/About';
import ScrollToTop from './components/ScrollToTop';
import './components/landing/Landing.css';

export const RouteDirectory = () => {
    return (
        <div>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />}>
                    <Route path=":projectId" element={<Project />} />
                </Route>
                <Route path="/hackathons" element={<Hackathons />}>
                    <Route path=":hackathonId" element={<Hackathon />} />
                </Route>
                <Route path="/work-experience" element={<WorkExperiences />}>
                </Route>
                <Route path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>Oops! There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
        </div>
    )
}

export default (RouteDirectory)