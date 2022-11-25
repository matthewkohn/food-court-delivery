// Error component
const errorBoxCss = {
  color: 'red',
  backgroundColor: 'lightblue',
  margin: '2px auto',
  padding: '5px 15px',
  borderRadius: '10px',
  fontStyle: 'italic'
}

// LoginForm component
const loginBoxCss = {
  display: 'flex',
  flexDirection: 'column'
}

const credentialCss = {
  background: '#DDC',
  borderRadius: '5px',
  margin: '0 auto 15px'
}

const submitBtnCss = {
  color: '#DDC',
  margin: '23px auto',
  padding: '20px',
  border: '1px solid #666',
  borderRadius: '15px',
  '&:hover': {
    backgroundColor: 'blue'
  }
}

// SignIn component
const signInContainerCss = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '20px',
  textAlign: 'center',
  color: '#DDC',
  width: 500,
  minHeight: 585,
  borderRadius: '20px',
  margin: '100px auto',
  backgroundColor: 'darkgreen',
  '&:hover': {
    backgroundColor: 'green',
    opacity: [0.9, 0.8, 0.7]
  }
}

const logoCss = {
  margin: '20px auto',
  fontStyle: 'italic',
  letterSpacing: '2px'
}

const titleCss = {
  margin: '20px 0 30px'
}

const toggleBtnCss = {
  color: 'blue',
  '&:hover': {
    backgroundColor: 'lightblue'
  }
}

// LoadingMessage component
const messageCss = {
  margin: '100px 0',
  color: 'red',
  fontStyle: 'italic',
  textAlign: 'center'
}


export { errorBoxCss, loginBoxCss, credentialCss, submitBtnCss, signInContainerCss, logoCss, titleCss, toggleBtnCss, messageCss }