import c from './App.module.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Characters from '../Characters/Characters';
import classes from './App.module.scss';
import { routes } from '../../constants/constants';

const App = () => {
  return (
    <div className={classes.appWrap}>
    <Router>
    <div className={c.container}>
      <Header />
      <Switch>
      <Route path={routes.CHARACTERS} component={Characters} />
      </Switch>
    </div>
    </Router>
    </div>
  );
}

export default App;
