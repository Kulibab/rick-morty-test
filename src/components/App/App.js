import c from './App.module.scss';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Characters from '../Characters/Characters';
import classes from './App.module.scss';
import { routes } from '../../constants/constants';
import Episodes from '../Episodes/Episodes';
import Locations from '../Locations/Locations';
import MyWatchList from '../MyWatchList/MyWatchList';

const App = () => {
  return (
    <div className={classes.appWrap}>
    <Router>
    <div className={c.container}>
      <Header />
      <Switch>
      <Route path={routes.CHARACTERS} component={Characters} />
      <Route path={routes.EPISODES} component={Episodes} />
      <Route path={routes.LOCATIONS} component={Locations} />
      <Route path={routes.MY_WATCH_LIST} component={MyWatchList} />
      <Redirect from='/' to={routes.CHARACTERS}/>
      </Switch>
    </div>
    </Router>
    </div>
  );
}

export default App;
