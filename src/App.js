import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/SignUp/Signup';
import Protected from './Components/Protected';
import RequireAuth from './Components/RequireAuth';

function App() {
  return (
    <>
      <Routes>
        {/* publc route */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        {/* private route */}
        <Route element={<RequireAuth />}>
          <Route path="/protected" element={<Protected />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
