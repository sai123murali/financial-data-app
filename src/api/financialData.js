import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY; 
const BASE_URL = "https://financialmodelingprep.com/api/v3/income-statement";
//console.log(API_KEY)


export const fetchCompanyIncomeStatements = async (symbol) => {
  try {
    const response = await axios.get(`${BASE_URL}/${symbol}?period=annual&apikey=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
