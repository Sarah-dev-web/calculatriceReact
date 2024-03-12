import './App.css';
import BtnOp from './Components/btnOp/btnOp';
import Numberinput from './Components/numberinput/numberinput';

function App() {
  return (
    <div className="App">
      <h1>Premier projet</h1>
      <div className='buttons'>
        <BtnOp bgcl="green" op="+"/>
        <BtnOp bgcl="green" op="-"/>
        <BtnOp bgcl="green" op="/"/>
        <BtnOp bgcl="green" op="*"/>
        </div>
        <BtnOp bgcl="blue" op="+"/>
        <div className='inputs'>
          <Numberinput/>
          <Numberinput/>
        </div>
        <div className='result'>
          100
        </div>
        <BtnOp bgcl="grey" op="="/>
    </div>
  );
}



export default App;
