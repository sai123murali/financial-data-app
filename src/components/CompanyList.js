import React from "react";
import { useNavigate } from "react-router-dom";

const companies = [
  { name: "Meta (Facebook)", symbol: "META" },
  { name: "Apple", symbol: "AAPL" },
  { name: "Amazon", symbol: "AMZN" },
  { name: "Netflix", symbol: "NFLX" },
  { name: "Google (Alphabet)", symbol: "GOOGL" },
];

const CompanyList = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-center text-4xl font-extrabold mb-10 text-gray-800">Select a Company</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
        {companies.map((company) => (
          <div
            key={company.symbol}
            className="group bg-white p-8 rounded-lg shadow-md text-center cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r from-blue-500 to-purple-500"
            onClick={() => navigate(`/company/${company.symbol}`)}
          >
            <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-white">{company.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyList;
