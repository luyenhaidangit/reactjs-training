import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from './components/user/user';
import Admin from './components/admin/admin';
import Home from './components/home/home';
import DashBoard from './components/admin/Content/DashBoard';
import ManageUser from './components/admin/Content/ManageUser';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />}></Route>
          <Route path="user" element={<User />}></Route>
        </Route>
        {/* <Route path="/admin" element={<Admin />}></Route> */}
        <Route path="/admin" element={<Admin />}>
          <Route index element={<DashBoard />}></Route>
          <Route path="manage-user" element={<ManageUser />}></Route>
        </Route>
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();