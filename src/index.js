import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import CustomThemeProvider from "./providers/CustomThemeProvider";
import Courses from "./views/Courses/Courses";
import Course from "./views/Course/Course";

ReactDOM.render(
  <React.StrictMode>
      <CustomThemeProvider>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Navigate to={'/courses'} />} />
                  <Route path="courses" element={<Layout><Courses /></Layout>}/>
                  <Route path="courses/:courseId" element={<Layout><Course /></Layout>} />
              </Routes>
          </BrowserRouter>
      </CustomThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
