import './App.css';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {Home} from './Home';
import {Navbar} from './Navbar';
import {Sidebar} from './Sidebar';

function App() {
  return (
    <>

      <div className="App">

        <Route path="/">
          <Navbar />
          <Sidebar />
          <Home />
        </Route>

      </div>
    </>
  );
}

export default App;
