import { ListItem, Paper, styled, Typography } from '@mui/material'
import React from 'react'

const Order = ({ order }) => {

  console.log("Order from ORDER: ", order)

  const createdAt = new Date(order.created_at)


  return (
    <ListItem>
      <OrderSummary>
        <Detail variant="body2">Order #{order.id}: placed on: {createdAt.toLocaleString()}</Detail>
        <Detail variant="body2">{order.item_count} items, total: ${order.total}</Detail>
      </OrderSummary>
    </ListItem>
  )
}

export default Order

const OrderSummary = styled(Paper)({
  display: 'flex',
  flexDirection: 'row',
  padding: '15px 20px',
  margin: 'auto'
})

const Detail = styled(Typography)({
  margin: '0 20px'
})