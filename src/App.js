import { Route, Routes } from "react-router-dom";
import Signup from "./components/SignUp";
import Login from "./components/LogIn";

function App() {
  return (
    <div >
     <Routes>
      < Route path="/" element={<Signup/>}/>
      < Route path="/login" element={<Login/>}/>
     </Routes>
    </div>
  );
}

export default App;
