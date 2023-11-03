import logo from './logo.svg';
import './App.css';
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import Comp3 from './Comp3';


function App() {
  return (
    <div className="App">
     
      <img src={logo} className="App-logo" alt="logo" />

      <Comp1 name="Sam"/>

      <Comp1 name="Sam1"/>
      
      <Comp1 name="Sam2"/>

      <Comp2 name="Don"/>
      
      <Comp3 name="Joe"/>
    </div>
  );
}

export default App;
