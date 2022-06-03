
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Home/Login/Login/Login';
import Register from './Components/Home/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Home from './Components/Home/Home/Home';
import Navbar from './Components/Home/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
