import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Swap from "./pages/swap/Swap";

export default function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Routes>
          <Route element={<NavBar />}>
            <Route path="/" element={<Swap />} />
          </Route>
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
}
