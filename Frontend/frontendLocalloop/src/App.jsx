import "./App.css";
import { Routes, Route } from "react-router-dom";
import Signup from "./app/signup/signup";
import Login from "./app/login/login";
import Home from "./app/home/Home";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;