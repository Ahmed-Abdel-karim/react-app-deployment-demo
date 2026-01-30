import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from "react-router";
import Expenses from './routes/expenses.tsx';
import Invoices from './routes/invoices.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App />} />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/invoices" element={<Invoices />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
