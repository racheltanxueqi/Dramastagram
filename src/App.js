import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from './pages/dashboard';
import Profile from './pages/profile';

import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login';

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>    
  );
}

export default App;
