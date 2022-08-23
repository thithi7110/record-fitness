import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Components/Home';
import Record from './Components/Record';
import RecordCount from './Components/RecordCount';

function App() {

  return (
    <>
      <Router>
        <div>
          <Link to={"/Home"}>Home</Link>
          <Link to={"/Record"}>今日の記録</Link>
        </div>
        <Switch>
          <Route exact path={"/Home"} component={Home}></Route>
          <Route exact path={"/Record"} component={Record}></Route>
          <Route exact path={"/RecordCount"} component={RecordCount}></Route>
        </Switch>
      </Router>
    </>);
}

export default App;
