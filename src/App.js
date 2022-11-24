import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";
function App() {
  return (
    <>
      <BrowserRouter>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<LandingPage/>} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        </Routes>
        </UserAuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
