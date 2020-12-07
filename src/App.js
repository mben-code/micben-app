import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import Header from './components/header/header.component';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './pages/home/home.page';
import About from './pages/about/about.page';
import Projects from './pages/projects/projects.page';
import Skills from './pages/skills/skills.page';
import Contact from './pages/contact/contact.page';

import './App.css';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Route
        render={({ location }) => {
          const { key } = location;

          return (
            <TransitionGroup>
              <CSSTransition key={key} classNames="page" timeout={500}>
                <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/projects" component={Projects} />
                  <Route path="/skills" component={Skills} />
                  <Route path="/contact" component={Contact} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          );
        }}
      />
    </ThemeProvider>
  );
};

export default App;
