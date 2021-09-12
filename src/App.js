import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { Provider } from 'react-redux';
import routes from './configs/routes';
import store from './configs/store';
import './App.css';

function App() {
  return (
    <Provider data-testid="provider" store={store}>
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} exact={route.exact}>
              {route.component}
            </Route>)
          )}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
