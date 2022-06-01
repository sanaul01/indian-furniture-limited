import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Home/Login/Login/Login';
import Register from './Components/Home/Login/Register/Register';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
