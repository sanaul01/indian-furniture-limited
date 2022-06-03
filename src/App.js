
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Home/Login/Login/Login';
import Register from './Components/Home/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
