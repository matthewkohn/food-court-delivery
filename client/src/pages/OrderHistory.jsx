import React, { useEffect, useState } from 'react'
import Order from '../components/orders/Order'
import { Container, List, styled, Typography } from '@mui/material'

const OrderHistory = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetch("/orders")
      .then((res) => res.json())
      .then(setOrders)
  }, [])

  const ordersList = orders.map((order) => (
    <Order key={order.id} order={order} />
  ))
  
  return (
    <HistoryContainer>
      <Typography variant="h5">Your Previous Orders:</Typography>
      <OrderList>
        { ordersList }
      </OrderList>
    </HistoryContainer>
  )
}

export default OrderHistory


const HistoryContainer = styled(Container)({
  height: '70vh',
  width: '80%',
  overflow: 'auto',
  border: '4px solid black',
  borderRadius: '25px',
  margin: '140px auto 0',
  padding: '30px',
  textAlign: 'center',
})

const OrderList = styled(List)({
  border: '1px solid red',
  display: 'flex',
  flexDirection: 'column',
})