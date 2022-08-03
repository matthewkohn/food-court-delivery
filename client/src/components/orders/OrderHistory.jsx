import React, { useEffect, useState } from 'react'
import Order from './Order'
import { handleGET } from '../../helpers/fetchRequests'
import { Container, List, styled, Typography } from '@mui/material'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'


const OrderHistory = () => {
  const [orders, setOrders] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { user } = useContext(UserContext)

  useEffect(() => {
    setIsLoading(true)
    handleGET('/orders')
    .then((pastOrders) => {
      setOrders(pastOrders)
      setIsLoading(false)
    })
  }, [])

  const ordersList = orders.map((order) => (
    <Order key={ order.id } order={ order } />
  ))
  
  return (
    <HistoryContainer>
      <Typography variant="h5">{ user.username }'s Previous Orders:</Typography>
      { isLoading ? 
          <AlertMessage variant="h4">Preparing your Orders!</AlertMessage> 
        : 
          <OrderList>
            { orders.length > 0 ? ordersList : <AlertMessage variant="h5">No Orders Yet.</AlertMessage> }
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
  // border: '1px solid red',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})

const AlertMessage = styled(Typography)({
  margin: '100px 0',
  color: 'red',
  fontStyle: 'italic'
})
