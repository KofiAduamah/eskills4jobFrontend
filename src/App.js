import logo from './logo.svg';
// import './App.css';
import"./components/SignUp.css";
import SignUp from './components/SignUp';
import Login from './components/Login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {

  return (
 <Router>
  <Routes>
    <Route path='/' element={<SignUp/>} />
    <Route path='/login' element={<Login/>} />
  </Routes>
 </Router>
 );
}


export default App;
