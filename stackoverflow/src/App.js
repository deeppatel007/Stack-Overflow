import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Header from "./Header";
import Login from "./Login";
import AddQuestion from './AddQuestion';
import 'bootstrap/dist/css/bootstrap.min.css';
import Output from "./Output";
import AddAns from "./AddAns";
import Answer from "./Answer";
import Signup from "./Signup";
import  LoginState from './controller/LoginState';
function App() {
  return (
    <>
     <LoginState>
     <BrowserRouter>
        <Header/>
        <Switch>
        <Route exact path='/' component={Output} />
          <Route exact path='/Signup' component={Signup} />
          <Route exact path='/Login' component={Login} />
          <Route exact path='/AddQuestion' component={AddQuestion} />
          <Route exact path='/AddAns' component={AddAns} />
          <Route exact path='/Answer' component={Answer} />
          {/* <Route exact path='/Upload' component={Upload} /> */}
        </Switch>
      </BrowserRouter>
      </LoginState>
  </>
  );
}

export default App;
