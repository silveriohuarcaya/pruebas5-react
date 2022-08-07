import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './App.css'

const App = () => (
  <div className="App">
    <h1>BookKeeeper</h1>
    <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
      <Link to="/invoices">Invoices</Link> |{' '}
      <Link to="/expenses">Expenses</Link>
    </nav>
    <Outlet />
  </div>
)
export default App
