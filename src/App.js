import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MasterLayout from "./layout/admin/MasterLayout";
import Home from './components/front-end/Home';
import Register from "./components/front-end/auth/Register";
import Login from "./components/front-end/auth/Login";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />

          <Route path="/admin" name="Admin" render={(props) => <MasterLayout {...props} />} />

        </Switch>
      </Router>

    </div>
  );
}

export default App;
