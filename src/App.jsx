import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import VerifyEmail from "./pages/VerifyEmail";
import CreatePassword from "./pages/CreatePassword";
import SuccessPassword from "./pages/SuccessPassword";
import Header from "./components/Header";
import Home from "./pages/Home";
import Rider from "./pages/Rider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RideStatus from "./pages/RideStatus";
import Wallet from "./pages/Wallet";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
// import Map from './components/Map'
// import Modal from './components/Modal'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/email-verification" element={<VerifyEmail />} />
          <Route path="/create-password" element={<CreatePassword />} />
          <Route path="/" element={<Home />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/details" element={<Rider />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/notification" element={<Notifications />} />
          <Route path="/status" element={<RideStatus />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <ResetPassword/> */}
      {/* <VerifyEmail/> */}
      {/* <CreatePassword/> */}
      {/* <Home/> */}
      {/* <Rider/> */}
      {/* <SuccessPassword/> */}
      {/* <Header/>
  <Map/> */}
      {/* <Modal/> */}
    </>
  );
}

export default App;
