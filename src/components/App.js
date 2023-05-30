

import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import "../css/reset.css";
import '../css/inline.css';
import '../css/index.css';
import Home from "../router/Home.jsx";
import Detail from "../router/Detail.jsx";

function App() {
return (
<BrowserRouter>
  <Routes>
    <Route path="/" exact element={<Home />}></Route>
    <Route path="/:id" element={<Detail />}></Route>
  </Routes>
</BrowserRouter>
);
}
export default App;