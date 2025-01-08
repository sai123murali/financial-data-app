import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCompanyIncomeStatements } from "../api/financialData";
import FinancialTable from "../components/FinancialTable";

const CompanyDetailsPage = () => {
  const { symbol } = useParams();
  const [companyData, setCompanyData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchCompanyIncomeStatements(symbol);
      setCompanyData(data);
      setLoading(false);
    };
    loadData();
  }, [symbol]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-4">{symbol} Financial Data</h1>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <FinancialTable data={companyData} />
      )}
    </div>
  );
};

export default CompanyDetailsPage;
