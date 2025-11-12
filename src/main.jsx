import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Store from "./pages/Store.jsx";
import Mac from "./pages/Mac.jsx";
import Ipad from "./pages/Ipad.jsx";
import Support from "./pages/Support.jsx";
import Navbar from "./components/Navbar.jsx";

createRoot(document.getElementById("root")).render(
  <Router>
    <Navbar />
    <Routes>
      <Route path={"/"} element={<App />} />
      <Route path={"/store"} element={<Store />} />
      <Route path={"/mac"} element={<Mac />} />
      <Route path={"/ipad"} element={<Ipad />} />
      <Route path={"/support"} element={<Support />} />
    </Routes>
  </Router>
);
