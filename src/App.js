import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import Header from './components/header/header.component';
import Home from './pages/home/home.page';
import About from './pages/about/about.page';
import Work from './pages/work/work.page';
import Contact from './pages/contact/contact.page';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/work" component={Work} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
