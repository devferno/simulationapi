import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import { CssBaseline } from "@mui/material";
import Profile from "./components/Profile";
import Credits from "./components/Credits";
import axios from "axios";
import Simuler from "./components/Simuler";
import Verifier from "./components/Verfier";
import { Outlet } from "react-router-dom";
import Historique from "./components/Historique";

axios.defaults.baseURL = "https://simulation-credit.herokuapp.com/api/";

function PrivateRoute() {
  return localStorage.getItem("client") ? <Outlet /> : <Signup />;
}

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />

        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/simuler" element={<Simuler />} />
          <Route path="/verifier" element={<Verifier />} />
          <Route path="/historique" element={<Historique />} />
        </Route>
        <Route path="/" element={<Credits />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
