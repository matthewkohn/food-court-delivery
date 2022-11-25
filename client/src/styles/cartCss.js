// Cart component
const cartContainerCss = {
  margin: '120px auto',
  border: '3px solid #DDC',
  borderRadius: '30px',
  height: '50vh',
  width: '100%',
  overflow: 'unset',
}

const cartListCss = {
  margin: '0 100px 60px',
  height: '35vh',
  overflow: 'auto',
}

const titleCss = {
  textAlign: 'center',
  margin: '15px 0 0'
}

const messageCss = {
  textAlign: 'center',
  color: '#F55',
  fontStyle: 'italic',
  opacity: '0.5'
}

// CartItem component
const itemAccordionCss = {
  width: '100%',
  padding: '0 10px',
  display: 'flex',
  flexDirection: 'column',
}

const infoCss = {
  padding: '5px',
  color: '#777',
  width: '100%',
}

const infoDetailsCss = {
  display: 'inherit',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
}

const detailsCss = {
  display: 'inherit',
  flexDirection: 'row',
  width: '40%',
  padding: '5px',
  justifyContent: 'space-between',
  color: '#777',
}

const itemAccordionDetailsCss = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#EEF',
  padding: '0 30px',
}

const qtyCss = {
  width: '100px',
  height: '30px',
  padding: '15px',
  margin: '10px 50px 10px 7px',
  textAlign: 'right',
  textDecoration: 'none',
  fontSize: '24px',
  borderRadius: '5px',
  background: 'white'
}

// CartSummary component
const summaryCss = {
  display: 'flex',
  justifyContent: 'space-around',
  width: '100%',
  margin: 'auto',
  padding: '30px 0'
}

const backToMenusBtnCss = {
  borderRadius: '20px',
  padding: '0 30px',
  '&:hover': {
    backgroundColor: '#BA5421',
    color: '#DDC',
    fontSize: '16px',
    padding: '0 21.5px',
  }
}

const totalCss = {
  fontStyle: 'italic',
  fontWeight: 'bolder',
  color: '#BA5421',
  background: '#BCEACB',
  padding: '15px',
  borderRadius: '10px',
  width: '200px',
  textAlign: 'center',
}

const submitBtnCss = {
  borderRadius: '20px',
  padding: '0 30px',
  '&:hover': {
    backgroundColor: '#21BA54',
    color: '#DDC',
    fontSize: '16px',
    padding: '0 22px',
  }
}


export { cartContainerCss, cartListCss, titleCss, messageCss, itemAccordionCss, infoCss, infoDetailsCss, detailsCss, itemAccordionDetailsCss, qtyCss, summaryCss, backToMenusBtnCss, totalCss, submitBtnCss }