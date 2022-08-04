import React from 'react'
import { formatDollar } from '../../../helpers/formatDollar'
import { ListItem, Paper, styled, Typography } from '@mui/material'


const Order = ({ order }) => {
  const createdAt = new Date(order.created_at)
  const newTotal = formatDollar(order.total)

  return (
    <ListItem>
      <OrderSummary>
        <Detail variant="body2">Order #{ order.id }: placed on: { createdAt.toLocaleString() }</Detail>
        <Detail variant="body2">{ order.item_count } items, total: ${ newTotal }</Detail>
      </OrderSummary>
    </ListItem>
  )
}

export default Order

const OrderSummary = styled(Paper)({
  display: 'flex',
  flexDirection: 'row',
  padding: '15px 20px',
  margin: 'auto',
  width: '100%',
  justifyContent: 'space-between'
})

const Detail = styled(Typography)({
  margin: '0 20px'
})