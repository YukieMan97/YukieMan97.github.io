import { reveal } from './helpers';
import IntroPanel from './components/landing/IntroPanel';
import ProjectPanel from './components/landing/project/ProjectPanel';
import HackathonPanel from './components/landing/hackathon/HackathonPanel';
import WorkExperiencePanel from './components/landing/work-experience/WorkExperiencePanel';
import './components/landing/Landing.css';

function App() {
  window.addEventListener("scroll", reveal);
  return (
    <div >
      <IntroPanel />
      <ProjectPanel />
      <HackathonPanel />
      <WorkExperiencePanel />
    </div>
  );
}

export default App;
