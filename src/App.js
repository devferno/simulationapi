import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import { CssBaseline } from "@mui/material";
import Credits from "./components/Credits";
import axios from "axios";
import Simuler from "./components/Simuler";
import Verifier from "./components/Verfier";
import { Outlet, Navigate } from "react-router-dom";
import Historique from "./components/Historique";

axios.defaults.baseURL = "https://simulation-credit.herokuapp.com/api/";

function PrivateOutlet() {
  const auth = localStorage.getItem("client");
  return auth ? <Outlet /> : <Navigate to="/signup" />;
}

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />

        <Route element={<PrivateOutlet />}>
          <Route path="/simuler" element={<Simuler />} />
          <Route path="/historique" element={<Historique />} />
          <Route path="/verifier" element={<Verifier />} />
        </Route>

        <Route path="/" element={<Credits />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
