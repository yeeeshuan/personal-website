import './App.css';
import { Navbar } from './components/common';
import {Projects} from './components/common';

function App() {
  return (
    <div className="App">
      <div className = "Page">
      <div className = "nav">
        <Navbar />
      </div>
      <div className= "intro">
        <p>
        Hi! My name is Ethan Huang and I am currently a Design student at Carnegie Mellon University
        with a minor in Human-Computer-Interaction. I am interested in exploring the intersection 
        of computation and design to create meaningful interactions. 
        </p>
      </div>
      <div>
        <Projects />
      <div className = "footer">
        <p>
          @2022 Ethan Huang 
        </p>
      </div>
      </div>
      </div>
    </div>
    
  );
}

export default App;
