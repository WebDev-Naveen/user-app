import React from "react";

import { Counter } from "./features/counter/Counter";
import "./App.css";
import UserList from "./features/users/UserList";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import AddUser from "./features/users/AddUser";

import UserProfileApp from "./features/UserProfile";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <Switch>
          <Route exact path="/">
            <UserList />
          </Route>
          <Route exact path="/add_user">
            <AddUser />
          </Route>
          <Route exact path="/:id">
            <UserProfileApp />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
