import './App.css';
import Game from './components/Game/Game';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Game />
          </Route>
        </Switch>
      </Router>
    </div>
    </>
  );
}

export default App;
