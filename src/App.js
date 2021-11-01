import React from "react";

import { Counter } from "./features/counter/Counter";
import "./App.css";
import UserList from "./features/users/UserList";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddUser from "./features/AddUser";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <UserList />
          </Route>
          <Route exact path="/add_user">
            <AddUser />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
