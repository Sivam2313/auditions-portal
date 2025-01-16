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
import UpdatesList from './Components/Updates/UpdatesList';
import FAQsList from './Components/FAQs/FAQsList';
import Results from './Components/Results/Results';

function App() {
  return (
    <>
      <Routes>
        {/* publc route */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/updates" element={<UpdatesList />} />
        <Route path="/form" element={<Form />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/updates" element={<UpdatesList />} />
        <Route path="/FAQs" element={<FAQsList />} />
        <Route path="/results" element={<Results />} />
        {/* private route */}
        <Route element={<RequireAuth />}>
          <Route path="/protected" element={<Protected />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/candidate/:candidateId" element={<Candidate />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
