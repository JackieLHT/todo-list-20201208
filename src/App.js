import './App.css';
import ToDoList from './components/ToDoList';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import DoneListContainer from './containers/DoneListContainer'
import NotFound from './components/NotFound'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello React</h1>
      </header>
      <BrowserRouter>
        <ul style={{textAlign: "left"}}>
          <li><Link to="/">go to list</Link></li>
          <li><Link to="/done">go to done list</Link></li>
        </ul>
        <Switch>
          <Route exact path="/done" component={DoneListContainer}></Route>
          <Route exact path="/" component={ToDoList}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
