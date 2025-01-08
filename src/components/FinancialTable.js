import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCompanyIncomeStatements } from "../api/financialData";

const FinancialTable = () => {
  const { symbol } = useParams(); // Get the company symbol from the URL
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [minRevenue, setMinRevenue] = useState("");
  const [maxRevenue, setMaxRevenue] = useState("");
  const [minNetIncome, setMinNetIncome] = useState("");
  const [maxNetIncome, setMaxNetIncome] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const result = await fetchCompanyIncomeStatements(symbol); // Fetch financial data for the selected company
      setData(result);
      setFilteredData(result);
      setLoading(false);
    };
    loadData();
  }, [symbol]);

  const handleFilter = () => {
    let filtered = data;
    if (startYear && endYear) {
      filtered = filtered.filter(
        (item) =>
          new Date(item.date).getFullYear() >= startYear &&
          new Date(item.date).getFullYear() <= endYear
      );
    }
    if (minRevenue) filtered = filtered.filter((item) => item.revenue >= minRevenue);
    if (maxRevenue) filtered = filtered.filter((item) => item.revenue <= maxRevenue);
    if (minNetIncome) filtered = filtered.filter((item) => item.netIncome >= minNetIncome);
    if (maxNetIncome) filtered = filtered.filter((item) => item.netIncome <= maxNetIncome);
    setFilteredData(filtered);
  };

  const handleSort = (field, order) => {
    const sorted = [...filteredData].sort((a, b) => {
      if (field === "date") {
        const dateA = new Date(a[field]);
        const dateB = new Date(b[field]);
        return order === "asc" ? dateA - dateB : dateB - dateA;
      } else {
        return order === "asc" ? a[field] - b[field] : b[field] - a[field];
      }
    });
    setFilteredData(sorted);
  };

  return (
    <div className="bg-gray-50 p-8 shadow-lg rounded-lg max-w-6xl mx-auto">
      {/* Display company title only once */}
      <h2 className="text-center text-3xl font-bold text-gray-700 mb-8">
        {symbol.toUpperCase()} Financial Data
      </h2>

      {loading ? (
        <p className="text-center text-xl font-semibold">Loading...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <input
              type="number"
              placeholder="Start Year"
              className="border p-3 rounded-lg w-full"
              value={startYear}
              onChange={(e) => setStartYear(e.target.value)}
            />
            <input
              type="number"
              placeholder="End Year"
              className="border p-3 rounded-lg w-full"
              value={endYear}
              onChange={(e) => setEndYear(e.target.value)}
            />
            <input
              type="number"
              placeholder="Min Revenue"
              className="border p-3 rounded-lg w-full"
              value={minRevenue}
              onChange={(e) => setMinRevenue(e.target.value)}
            />
            <input
              type="number"
              placeholder="Max Revenue"
              className="border p-3 rounded-lg w-full"
              value={maxRevenue}
              onChange={(e) => setMaxRevenue(e.target.value)}
            />
            <input
              type="number"
              placeholder="Min Net Income"
              className="border p-3 rounded-lg w-full"
              value={minNetIncome}
              onChange={(e) => setMinNetIncome(e.target.value)}
            />
            <input
              type="number"
              placeholder="Max Net Income"
              className="border p-3 rounded-lg w-full"
              value={maxNetIncome}
              onChange={(e) => setMaxNetIncome(e.target.value)}
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg shadow-md transition-all" onClick={handleFilter}>
              Apply Filters
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-between mb-6">
            <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg shadow-md transition-all" onClick={() => handleSort("date", "asc")}>
              Sort Date Asc
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg shadow-md transition-all" onClick={() => handleSort("revenue", "desc")}>
              Sort Revenue Desc
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg shadow-md transition-all" onClick={() => handleSort("netIncome", "asc")}>
              Sort Net Income Asc
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="table-auto border-collapse w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr className="bg-blue-200 text-gray-700">
                  <th className="border px-4 py-3 text-left">Date</th>
                  <th className="border px-4 py-3 text-left">Revenue</th>
                  <th className="border px-4 py-3 text-left">Net Income</th>
                  <th className="border px-4 py-3 text-left">Gross Profit</th>
                  <th className="border px-4 py-3 text-left">EPS</th>
                  <th className="border px-4 py-3 text-left">Operating Income</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length > 0 ? (
                  filteredData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-100 transition-all">
                      <td className="border px-4 py-3">{item.date}</td>
                      <td className="border px-4 py-3">{item.revenue?.toLocaleString()}</td>
                      <td className="border px-4 py-3">{item.netIncome?.toLocaleString()}</td>
                      <td className="border px-4 py-3">{item.grossProfit?.toLocaleString()}</td>
                      <td className="border px-4 py-3">{item.eps?.toFixed(2) || "N/A"}</td>
                      <td className="border px-4 py-3">{item.operatingIncome?.toLocaleString()}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-6 text-gray-600">
                      No data available for the selected filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default FinancialTable;
