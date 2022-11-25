// AddItemForm component
const itemCardCss = {
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
}

const titleCss = {
  fontStyle: 'italic',
  fontWeight: '900',
  margin: '0 0 10px',
  textAlign: 'center'
}

const itemDataCss = {
  margin: '10px',
}

// Item component
const itemContainerCss = {
  margin: '120px auto',
  border: '3px solid #DDC',
  borderRadius: '30px',
  height: '60vh'
}

const itemTitleCss = {
  textAlign: 'center',
  margin: '25px auto'
}

const itemBodyCss = {
  width: '80%',
  margin: '30px auto',
  display: 'flex',
  justifyContent: 'space-between'
}

const descriptionCss = {
  padding: '0 50px 0 0',
  minWidth: '50%'
}

const priceCss = {
  margin: '0 auto'
}

const sectionCss = {
  display: 'inherit',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '250px',
  margin: '0 15px'
}

const actionBtnCss = {
  padding: '20px',
  borderRadius: '50%',
  minWidth: '150px',
}

const orderBtnCss = {
  padding: '20px',
  borderRadius: '50%',
  minWidth: '150px',
}

const qtyCss = {
  width: '100px',
  height: '30px',
  padding: '15px',
  margin: '10px',
  textAlign: 'right',
  textDecoration: 'none',
  fontSize: '24px',
  borderRadius: '5px',
}


export { itemCardCss, titleCss, itemDataCss, itemContainerCss, itemTitleCss, itemBodyCss, descriptionCss, priceCss, sectionCss, actionBtnCss, orderBtnCss, qtyCss }