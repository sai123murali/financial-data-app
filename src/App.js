import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CompanyDetailsPage from "./pages/CompanyDetailsPage";

function App() {
  return (
    <Router>
      <div className="App bg-gray-50 min-h-screen p-5">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/company/:symbol" element={<CompanyDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
