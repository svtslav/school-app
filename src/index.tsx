import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter,   
  Routes,
  Route 
} from "react-router-dom";

import './index.css';
import reportWebVitals from './reportWebVitals';
import MainPage from './routes/main';
import StaffList from './routes/staff/list';
import Staff from './routes/staff/element';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/staff" element={<StaffList />} />
        <Route path="/staff/:username" element={<Staff />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
