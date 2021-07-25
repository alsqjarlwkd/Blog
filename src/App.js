import './App.css';
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import BlogCreate from './Component/BlogCreate';
import BlogDetails from './Component/BlogDetails';
import FixContent  from './Component/FixContent';
import CommentCreate from './Component/CommentCreate';
import NotFound from './Component/NotFound';
import FixComment from './Component/FixComment';
function App() {
  return (
    <Router>
      <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Switch>
        <Route exact path="/" component={Home}></Route>
          <Route path="/create" component={BlogCreate}></Route>
          <Route path="/blogs/:id" component={BlogDetails}></Route>
          <Route path="/FixContent/:id" component={FixContent}></Route>
          <Route path="/CommentCreate/:id" component={CommentCreate}></Route>
          <Route path="/FixComment/:id/:index" component={FixComment}></Route>
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
