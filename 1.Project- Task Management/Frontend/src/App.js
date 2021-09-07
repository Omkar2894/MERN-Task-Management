import { Route, Switch } from 'react-router';
import Login from './Components/Login';
import Home from './Components/Home';
import Register from './Components/Register';
import Header from './Components/Header';
import Addtasks from './Components/Addtasks';
import Edittask from './Components/Edittask';



function App() {
  return (
    <>
      <Header/>
      <Switch>   
        <Route exact path="/" component={Login}/>
        <Route path="/reg" component={Register}/>
        <Route path="/home" component={Home}/>
        <Route path="/add" component={Addtasks} />
        <Route path="/edit/:id" component={Edittask} />
      </Switch>
    </>
  );
}

export default App;
