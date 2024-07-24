import { BrowserRouter, Routes, Route } from "react-router-dom"
import TaskPage from './components/taskPage/taskPage';
import Signup from './components/authPage/signupPage';
import Login from './components/authPage/loginPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/task" element={<TaskPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
