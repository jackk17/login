import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';

function App() {
  return ( 
   <BrowserRouter>
    <Login/>
   <div className="App">
       <h1>Hello world!!</h1>
   </div>
  </BrowserRouter>
  );
}

export default App;
