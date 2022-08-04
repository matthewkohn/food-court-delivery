import React, { useContext, useEffect, useState } from 'react'
import Order from './Order'
import LoadingMessage from '../../messages/LoadingMessage'
import { UserContext } from '../../../context/UserContext'
import { LoadingContext } from '../../../context/LoadingContext'
import { handleGET } from '../../../helpers/fetchRequests'
import { Container, List, styled, Typography } from '@mui/material'


const OrderHistory = () => {
  const [orders, setOrders] = useState([])
  const { isLoading, setIsLoading } = useContext(LoadingContext)
  const { user } = useContext(UserContext)

  useEffect(() => {
    setIsLoading(true)
    handleGET('/orders')
    .then((pastOrders) => {
      setOrders(pastOrders)
      setIsLoading(false)
    })
  }, [setIsLoading])

  const ordersList = orders.map((order) => (
    <Order key={ order.id } order={ order } />
  ))
  
  return (
    <HistoryContainer>
      <Typography variant="h5">{ user.username }'s Previous Orders:</Typography>
      { isLoading ? 
          <LoadingMessage message="Preparing your orders!" />
        : 
          <OrderList>
            { orders.length > 0 ? ordersList : <LoadingMessage message="No orders yet." /> }
          </OrderList> 
      }
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
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})
