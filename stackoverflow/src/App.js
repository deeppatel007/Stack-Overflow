import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Header from "./Header";
import Login from "./Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from "./Signup";
function App() {
  return (
    <>
     <BrowserRouter>
        <Header/>
        <Switch>
          {/* <Route exact path='/' component={/} /> */}
          <Route exact path='/Signup' component={Signup} />
          <Route exact path='/Login' component={Login} />
          {/* <Route exact path='/Update' component={Update} /> */}
          {/* <Route exact path='/Upload' component={Upload} /> */}
        </Switch>
      </BrowserRouter>
  </>
  );
}

export default App;
