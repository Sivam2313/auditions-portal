import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/SignUp/Signup';
import Protected from './Components/Protected';
import RequireAuth from './Components/RequireAuth';
import Dashboard from './Components/Dashboard/Dashboard';
import Candidate from './Components/CandidateDetails/Candidate';
import Form from './Components/Form/Form';
import About from './Components/About/About';

function App() {
  return (
    <>
      <Routes>
        {/* publc route */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* private route */}
        <Route element={<RequireAuth />}>
          <Route path="/protected" element={<Protected />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/candidate/:candidateId" element={<Candidate />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
