import { Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/homepage/homepage';
import { Register } from './pages/register/register';
import {Login} from './pages/login/login';
import { User } from './pages/user/user';

function App() {
  return (
    <div className="App">
      <Routes>
           <Route path="/" element={<Homepage />} />
           <Route path="/register" element={<Register />} />
           <Route path="/login" element={<Login />} />
           <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
