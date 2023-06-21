import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
    palette:{
        primary: {
            main: "#278e9b"
        },
        secondary: {
            main: "#029zca9"
        }
    },
    typography:{
        h1:{
            fontSize:"3rem",
            fontWeight:600
        },
        h2:{
            fontSize:"1.75rem",
            fontWeight:600
        }
    }
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <App />
      </ThemeProvider>
  </React.StrictMode>,
)
