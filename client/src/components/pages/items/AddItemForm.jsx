import React from 'react'
import { Box, Button, Card, FormControl, styled, TextField, Typography } from '@mui/material'


const AddItemForm = ({ newItem, handleNewItem, onSubmit }) => {

  const handleChange = (e) => {
    const name = e.target.name
    let value = e.target.value
    handleNewItem({
      ...newItem,
      [name]: value
    })
  }

  return (
    <ItemCard>
      <Title variant="body">New Item:</Title>
      <Box 
        component="form"
        onSubmit={ (e) => onSubmit(e) }
      >
        <FormControl>
          <ItemData 
            required
            autoFocus
            label="name"
            name="name"
            type="text"
            variant="outlined"
            size="small"
            value={ newItem.name } 
            onChange={ (e) => handleChange(e) } 
          />
        </FormControl>
        <FormControl>
          <ItemData
            required
            label="price" 
            name="price"
            type="number"
            variant="outlined"
            size="small"
            value={ newItem.price } 
            onChange={ (e) => handleChange(e) } 
          />
        </FormControl>
        <FormControl>
          <ItemData 
            required
            label="description"
            name="description"
            type="text"
            variant="outlined"
            size="small"
            value={ newItem.description } 
            onChange={ (e) => handleChange(e) } 
          />
        </FormControl>
        <SubmitBtn variant="contained" type="submit">Submit</SubmitBtn>

      </Box>
    </ItemCard>
  )
}

export default AddItemForm


const ItemCard = styled(Card)({
  background: '#DDC',
  display: 'flex',
  flexDirection: 'column',
  margin: '10px',
  padding: '20px',
  width: '200px',
  borderRadius: '15px',
  '&:hover': {
    backgroundColor: 'blue',
    color: '#DDC'
  }
})

const Title = styled(Typography)({
  fontStyle: 'italic',
  fontWeight: '900',
  margin: '0 0 10px',
  textAlign: 'center'
})

const ItemData = styled(TextField)({
  margin: '10px',

})

const SubmitBtn = styled(Button)({

})