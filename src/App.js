import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';


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

// In order to reuse the component in other files 
export default App;
