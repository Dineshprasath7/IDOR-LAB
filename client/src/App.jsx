import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import { useCookies } from "react-cookie";

function App() {
  const [cookie]=useCookies(['id']);
  const isCookieSet=cookie.id?true:false
  return (
      <Routes> 
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={isCookieSet? <Navigate to="/profile"/>: <Navigate to="/register"/>}/>
      </Routes>
    
  );
}

export default App;
