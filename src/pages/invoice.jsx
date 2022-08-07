import React from 'react'
import { useParams } from 'react-router-dom'
import { getInvoice } from '../data'

const Invoice = () => {
  const { id } = useParams()
  const invoice = getInvoice(Number(id))
  return (
    <div style={{ display: 'block', padding: '1rem' }}>
      <h2>{invoice.name}</h2>
      <h2>{invoice.amount}</h2>
      <h2>{invoice.due}</h2>
    </div>
  )
}
export default Invoice
