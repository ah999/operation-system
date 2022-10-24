import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DepartmentsPage from './pages/DepartmentsPage';
import OperationRoomsPage from './pages/OperationRoomsPage';
import OperationPage from './pages/OperationPage';
import CreateOperation from './pages/CreateOperation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/oprooms" element={<OperationRoomsPage />} />
      <Route path="/deps" element={<DepartmentsPage />} />
      <Route path="/ops/:id" element={<OperationPage />} />
      <Route path="/op/new" element={<CreateOperation />} />
      <Route path="/op/error" element={<ErrorPage />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
