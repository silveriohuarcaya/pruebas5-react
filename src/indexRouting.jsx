import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import Invoices from './pages/invoices'
import Expenses from './pages/expenses'
import Invoice from './pages/invoice'

const Routing = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="invoices" element={<Invoices />}>
          <Route path=":id" element={<Invoice />} />
        </Route>
        <Route path="expenses" element={<Expenses />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
)
