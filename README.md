# Financial Data Dashboard

This is a web application that displays financial data for popular companies, allowing users to filter and sort data by revenue, net income, and date.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Frontend (FE) Setup](#frontend-fe-setup)
3. [Backend (BE) Setup](#backend-be-setup)
4. [Application Overview](#application-overview)
5. [Tech Stack](#tech-stack)
6. [Deployment](#deployment)

## Getting Started

To run the full project locally, ensure you have:

- **Node.js** installed (for frontend)
- **Python** installed (for backend)
- `npm` (Node Package Manager)
- `pip` (Python Package Installer)

Clone the project:
```bash
git clone https://github.com/sai123murali/financial-data-app.git
```

## Frontend (FE) Setup

### Commands to Run Frontend:

1. Navigate to the project root:
```bash
cd financial-data-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the frontend (development mode):
```bash
npm start
```

Open http://localhost:3000 to view it in your browser.

4. Build for Production:
```bash
npm run build
```

## Backend (BE) Setup
### Commands to Run Backend:
1. Navigate to the backend/ folder:
```bash
cd backend
```
2. Create and activate a Python virtual environment:
```bash 
python -m venv venv
source venv/bin/activate  # For Linux/Mac
.\venv\Scripts\activate  # For Windows
```
3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Create a .env file in the backend/ folder:
```bash
API_KEY=jbevvYnOiIDMelb3znyLnTM5NjzKMZ2H
```

5. Run the backend server:
```bash
python app.py
```
The backend runs at http://localhost:5000.

## **Application Overview**  
This dashboard displays financial data for major companies:

### **Included Companies:**  
- Amazon (AMZN)  
- Apple (AAPL)  
- Google (GOOGL)  
- Netflix (NFLX)  
- Meta (META)  

### **Features:**  
- **Filtering:**  
  - Filter data by start and end years.  
  - Apply minimum and maximum revenue values.  

- **Sorting:**  
  - Sort by **Date** (ascending/descending).  
  - Sort by **Revenue** (ascending/descending).  
  - Sort by **Net Income** (ascending/descending).  

---

## **Tech Stack**  

### **Frontend (FE):**  
- **React** (JavaScript framework)  
- **Tailwind CSS** (for styling)  
- **Axios** (for API calls)  

### **Backend (BE):**  
- **Flask** (Python web framework)  
- **Requests** (for fetching external API data)  
- **Gunicorn** (for production-ready deployment)  

### **API Used:**  
- **Financial Modeling Prep API**  

---

## **Deployment**  

### **Frontend:**  
- **Platform:** Netlify  
- **Frontend URL:** [https://financialdatalist.netlify.app](https://financialdatalist.netlify.app)  

### **Backend:**  
- **Platform:** Render  
- **Backend URL:** [https://financial-data-app-4lt9.onrender.com](https://financial-data-app-4lt9.onrender.com)  

---



