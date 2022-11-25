import React from 'react'
import { Box, Button, Card, FormControl, styled, TextField, Typography } from '@mui/material'
import { itemCardCss, itemDataCss, titleCss } from '../../../styles/itemsCss'


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
        <Button variant="contained" type="submit">Submit</Button>

      </Box>
    </ItemCard>
  )
}

export default AddItemForm


const ItemCard = styled(Card)(itemCardCss);
const Title = styled(Typography)(titleCss);
const ItemData = styled(TextField)(itemDataCss);