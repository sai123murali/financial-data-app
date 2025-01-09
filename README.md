# **Financial Data Dashboard**

This is a web application that displays financial data for popular companies, allowing users to filter and sort data by revenue, net income, and date.

---

## **Table of Contents**

1. [Getting Started](#getting-started)  
2. [Frontend (FE) Setup](#frontend-fe-setup)  
3. [Backend (BE) Setup](#backend-be-setup)  
4. [Application Overview](#application-overview)  
5. [Tech Stack](#tech-stack)  
6. [Deployment](#deployment)  
7. [Links](#links)  

---

## **Getting Started**

To run the full project locally, ensure you have:

- **Node.js** installed (for frontend)
- **Python** installed (for backend)
- `npm` (Node Package Manager)
- `pip` (Python Package Installer)

Clone the project:
```bash
git clone <your-repository-link>


Frontend (FE) Setup
Commands to Run Frontend:
Navigate to the project root:

bash
Copy code
cd financial-data-app
Install dependencies:

bash
Copy code
npm install
Start the frontend (development mode):

bash
Copy code
npm start
Open http://localhost:3000 to view it in your browser.

Build for Production:

bash
Copy code
npm run build
This command creates an optimized production build in the build/ folder.

Backend (BE) Setup
Commands to Run Backend:
Navigate to the backend/ folder:
bash
Copy code
cd backend
Create and activate a Python virtual environment:
bash
Copy code
python -m venv venv
source venv/bin/activate  # For Linux/Mac
.\venv\Scripts\activate  # For Windows
Install dependencies:
bash
Copy code
pip install -r requirements.txt
Create a .env file in the backend/ folder:
makefile
Copy code
API_KEY=your_financial_api_key_here
Run the backend server:
bash
Copy code
python app.py
The backend runs at http://localhost:5000.
Application Overview
This dashboard displays financial data for major companies:

Included Companies:
Amazon (AMZN)
Apple (AAPL)
Google (GOOGL)
Netflix (NFLX)
Meta (META)
Features:
Filtering:
Filter data by start and end years.
Apply minimum and maximum revenue values.
Sorting:
Sort by Date (ascending/descending).
Sort by Revenue (ascending/descending).
Sort by Net Income (ascending/descending).
Tech Stack
Frontend (FE):
React (JavaScript framework)
Tailwind CSS (for styling)
Axios (for API calls)
Backend (BE):
Flask (Python web framework)
Requests (for fetching external API data)
Gunicorn (for production-ready deployment)
API Used:
Financial Modeling Prep API
Deployment
Frontend:
Platform: Netlify
Frontend URL: https://your-frontend-url.netlify.app
Backend:
Platform: Render
Backend URL: https://financial-data-app-4lt9.onrender.com
Links
GitHub Repository: Your GitHub Link
Frontend Deployed Site: Netlify URL
Backend API: Render URL