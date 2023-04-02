import {Route, Routes} from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import Layout from "./components/Layout ";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Profile from "./components/Profile";

function App() {

  return (
    <main className="h-screen bg-gray-800 items-center">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="signup" element={<Register/>}/>
          <Route path="signin" element={<Login/>}/>
          <Route element={<RequireAuth/>}>
            <Route path="profile" element={<Profile/>}/>
          </Route>
        </Route>
      </Routes>
    </main>
  )
}

export default App
