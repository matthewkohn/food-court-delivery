import React from 'react'
import { formatDollar } from '../../../helpers/formatDollar'
import { TableRow, TableCell } from '@mui/material'


const Order = ({ order }) => {
  const createdAt = new Date(order.created_at)
  const newTotal = formatDollar(order.total)

  return (
    <TableRow >
      <TableCell>No. { order.id }</TableCell>
      <TableCell>{ createdAt.toLocaleString() }</TableCell>
      <TableCell>{ order.item_count } items</TableCell>
      <TableCell align="right">$ { newTotal }</TableCell>
    </TableRow>
  )
}

export default Order