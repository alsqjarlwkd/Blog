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
        <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/create">
            <BlogCreate></BlogCreate>
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails></BlogDetails>
          </Route>
          <Route path="/FixContent/:id">
            <FixContent></FixContent>
          </Route>
          <Route path="/CommentCreate/:id">
            <CommentCreate></CommentCreate>
          </Route>
          <Route path="/FixComment/:id/:index">
            <FixComment></FixComment>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
