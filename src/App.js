import './App.css';
import {BrowserRouter as Router , Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <div className="App">

        <Router>

          <Navbar />
          <Sidebar>
            <Routes>
              <Route path="/" element={<Home />} /> 
            </Routes>
          </Sidebar>
          
        </Router>

      </div>
    </>
  );
}

export default App;
