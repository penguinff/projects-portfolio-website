import Header from './components/header/Header';
import LandingPage from './components/landing-page/LandingPage';
import AboutMe from './components/about-me/AboutMe';
import Skills from './components/skills/Skills';
import RecentProjects from './components/recent-projects/RecentProjects';
import Contact from './components/contact/Contact';

import { GlobalStyle } from './global.styles';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <LandingPage />
      <AboutMe />
      <Skills />
      <RecentProjects />
      <Contact />
    </div>
  );
}

export default App;
