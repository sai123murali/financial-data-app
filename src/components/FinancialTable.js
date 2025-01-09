import React, { useEffect, useState } from "react";
import { fetchCompanyIncomeStatements } from "../api/financialData";
import { useParams } from "react-router-dom";

const FinancialTable = () => {
  const { symbol } = useParams(); // Get company symbol from URL
  const [data, setData] = useState([]);
  const [minRevenue, setMinRevenue] = useState("");
  const [maxRevenue, setMaxRevenue] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const filters = {
        start_year: startYear || undefined,
        end_year: endYear || undefined,
        min_revenue: minRevenue || undefined,
        max_revenue: maxRevenue || undefined,
      };
      const result = await fetchCompanyIncomeStatements(symbol, filters);
      setData(result);
    };
    fetchData();
  }, [symbol, startYear, endYear, minRevenue, maxRevenue]);

  const handleFilter = () => {
    const filters = {
      start_year: startYear,
      end_year: endYear,
      min_revenue: minRevenue,
      max_revenue: maxRevenue,
    };
    fetchCompanyIncomeStatements(symbol, filters).then((filteredData) => setData(filteredData));
  };

  return (
    <div className="bg-gray-50 p-8 shadow-lg rounded-lg max-w-6xl mx-auto">
      <h2 className="text-center text-3xl font-bold text-gray-700 mb-8">{symbol} Financial Data</h2>

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
        <button className="bg-blue-600 text-white py-3 px-4 rounded-lg shadow-md" onClick={handleFilter}>
          Apply Filters
        </button>
      </div>

      <table className="table-auto w-full bg-white rounded-lg shadow-md">
        <thead className="bg-blue-200 text-gray-700">
          <tr>
            <th className="border px-4 py-3">Date</th>
            <th className="border px-4 py-3">Revenue</th>
            <th className="border px-4 py-3">Net Income</th>
            <th className="border px-4 py-3">Gross Profit</th>
            <th className="border px-4 py-3">EPS</th>
            <th className="border px-4 py-3">Operating Income</th>
          </tr>
        </thead>
        <tbody>
          {data.length ? (
            data.map((item, index) => (
              <tr key={index}>
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
              <td colSpan="6" className="text-center py-4">
                No data available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FinancialTable;
