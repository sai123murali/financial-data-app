import axios from "axios";

const BASE_URL = "https://financial-data-app-4lt9.onrender.com/api/financial-data";  // Updated URL

export const fetchCompanyIncomeStatements = async (symbol, filters) => {
  try {
    const params = new URLSearchParams(filters).toString();
    const response = await axios.get(`${BASE_URL}/${symbol}?${params}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data from backend:", error);
    return [];
  }
};
