import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"; /* se agrega */
import { BrowserRouter } from "react-router-dom"; /* se agrega */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* se agrega BrowserRouter */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
