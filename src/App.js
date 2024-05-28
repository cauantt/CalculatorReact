import logo from './logo.svg';
import './App.css';
import Calc from './components/Calc';


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="black">
          
          <div className="title"><h1>Calculadora</h1></div>
          <div className="screen"></div>
          <div className="touch">
           <Calc />
          

          </div>

          </div>


      




      </div>
      
    </div>
  );
}

export default App;
