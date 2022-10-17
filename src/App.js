
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";


function App() {
  return (
    <div>
       <BrowserRouter>
       <Routes>
       <Route path="/home" element={<Home />} />
       <Route path="/profile/:name" element={<Profile />} />
       <Route path="/login" element={<Login />} />
       <Route path="/" element={<Register />} />
       </Routes>
       </BrowserRouter>
      
      

   
    </div>
  );
}

export default App;
