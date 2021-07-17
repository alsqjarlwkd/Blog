import './App.css';
import Navbar from './Component/Navbar'
import Home from './Component/Home'
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
