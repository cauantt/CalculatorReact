import Button from "./Button";
import './Calc.css';


    
    
    
    
    function Calc() {
      return (
        <div className="geral">
          <div className="coluna">
            <div className="buttons">
              <Button text="C" />
              <Button text="&lt;" />
              <Button text="/" />
              <Button text="7" />
              <Button text="8" />
              <Button text="9" />
              <Button text="4" />
              <Button text="5" />
              <Button text="6" />
              <Button text="1" />
              <Button text="2" />
              <Button text="3" />
            </div>
            <div className="inferiores">
              <button className="zero">0</button>
              <Button text="." />
            </div>
          </div>
          <div className="laterais">
            <div className="lateral">
              <div className="lat1">
                <Button text="X" />
              </div>
              <div className="lat2">
                <Button text="-" />
              </div>
              <div className="lat3">
                <Button text="+" />
              </div>
            </div>
            <div className="diventer">
              <button className="enter">=</button>
            </div>
          </div>
        </div>
      );
    }
    
    
    



export default Calc;
