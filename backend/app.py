from flask import Flask, request, jsonify
import requests
from flask_cors import CORS  # Import CORS
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# API key and base URL
API_KEY = os.getenv("API_KEY")
BASE_URL = "https://financialmodelingprep.com/api/v3/income-statement"

# Endpoint to fetch and filter financial data
@app.route('/api/financial-data/<string:symbol>', methods=['GET'])
def get_financial_data(symbol):
    api_url = f"{BASE_URL}/{symbol}?period=annual&apikey={API_KEY}"
    response = requests.get(api_url)
    if response.status_code != 200:
        return jsonify({"error": "Failed to fetch data from the external API"}), 500

    data = response.json()

    # Query parameters
    start_year = request.args.get('start_year', type=int)
    end_year = request.args.get('end_year', type=int)
    min_revenue = request.args.get('min_revenue', type=float)
    max_revenue = request.args.get('max_revenue', type=float)

    # Filter data
    filtered_data = []
    for record in data:
        year = int(record['date'][:4])
        if start_year and year < start_year:
            continue
        if end_year and year > end_year:
            continue
        if min_revenue and record['revenue'] < min_revenue:
            continue
        if max_revenue and record['revenue'] > max_revenue:
            continue
        filtered_data.append(record)

    return jsonify(filtered_data)


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)

