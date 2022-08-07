import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { getInvoices } from '../data'

const Invoices = () => {
  const invoices = getInvoices()
  return (
    <div style={{ display: 'flex' }}>
      <nav style={{ borderRight: 'solid 1px', paddingRight: '1rem' }}>
        <h2>Invoices</h2>
        <Link to="/">Home</Link>
        {invoices.map((invoice) => (
          <Link
            style={{ display: 'block', padding: '0.5rem' }}
            to={`/invoices/${invoice.number}`}
          >
            {invoice.name}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  )
}
export default Invoices
