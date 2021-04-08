import LandingPage from './components/landing-page/LandingPage';
import Skills from './components/skills/Skills';
import RecentProjects from './components/recent-projects/RecentProjects';
import Header from './components/header/Header';

import { GlobalStyle } from './global.styles';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <LandingPage />
      <Skills />
      <RecentProjects />
    </div>
  );
}

export default App;
