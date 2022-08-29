import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Home from "./components/Home";
import ListEmployees from "./components/Employees/ListEmployees";
import About from "./components/About";
import AppNavbar from "./components/AppNavbar";
import EditEmployee from "./components/Employees/EditEmployee";
import SignUp from "./components/SignUp";
import NewEmployee from "./components/Employees/NewEmployee";

function App() {
  return (
    <div className='App'>
      <AppNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='employees' element={<ListEmployees />} />
        <Route path='employees/new' element={<NewEmployee />} />
        <Route path='employees/:id' element={<EditEmployee />} />
      </Routes>
    </div>
  );
}

export default App;
