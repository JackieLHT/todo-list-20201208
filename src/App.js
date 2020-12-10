import './App.css';
import ToDoList from './components/ToDoList';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DoneListContainer from './containers/DoneListContainer'
import NotFound from './components/NotFound'
import Navigation from './components/Navigation';
import EditTags from './components/EditTags';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello React</h1>
      </header>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/tags" component={EditTags}></Route>
          <Route exact path="/done" component={DoneListContainer}></Route>
          <Route exact path="/" component={ToDoList}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
