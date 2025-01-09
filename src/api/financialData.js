import axios from "axios";


const BASE_URL = "http://127.0.0.1:5000/api/financial-data"; 

export const fetchCompanyIncomeStatements = async (symbol, filters) => {
  try {
    // Construct query parameters based on filters
    const params = new URLSearchParams(filters).toString();
    const response = await axios.get(`${BASE_URL}/${symbol}?${params}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data from backend:", error);
    return [];
  }
};
