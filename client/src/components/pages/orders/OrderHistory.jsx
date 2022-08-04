import React, { useContext, useEffect, useState } from 'react'
import Order from './Order'
import LoadingMessage from '../../messages/LoadingMessage'
import { UserContext } from '../../../context/UserContext'
import { LoadingContext } from '../../../context/LoadingContext'
import { handleGET } from '../../../helpers/fetchRequests'
import { Paper, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'


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
    <HistoryContainer component={Paper}>
      <Typography variant="h5">{ user.username }'s Previous Orders:</Typography>
      { isLoading ? 
          <LoadingMessage message="Preparing your orders!" />
        : 
          orders.length === 0 ?
            <LoadingMessage message="No orders yet..." />
            :
            <OrderTable size='medium'>
              <TableHead>
                <TableRow>
                  <TableCell>Food Court Order Number</TableCell>
                  <TableCell>Placed On</TableCell>
                  <TableCell>Number of Items</TableCell>
                  <TableCell align="right">Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{ ordersList }</TableBody>     
            </OrderTable>
      }
    </HistoryContainer>
  )
}

export default OrderHistory


const HistoryContainer = styled(TableContainer)({
  height: '70vh',
  width: '80%',
  overflow: 'auto',
  border: '4px solid black',
  borderRadius: '25px',
  margin: '140px auto 0',
  padding: '30px',
  textAlign: 'center',
})

const OrderTable = styled(Table)({
  minWidth: '650',
  margin: '10px 0'
})