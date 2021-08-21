import AppStyle from "./App.css"
import Login from "./pages/Login"
import UserList from "./pages/userList"
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


function App() {
 

  return (
    <div className="app">
  
  <Router>
    <Switch>
          <Route exact={true} path="/login">
            <Login />
          </Route>
          <Route exact={true} path="/userlist">
            <UserList />
          </Route>
          <Route render={()=> <Redirect to= {{pathname:"/login"}} />} >
          </Route>
          
        </Switch>
        </Router>
    </div>
  );
}

export default App;
