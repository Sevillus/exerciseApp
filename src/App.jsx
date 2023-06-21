import {Box, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
import CalculatorForm from "./components/CalculatorForm.jsx";


function App() {


  return (
    <Container>
        <Typography variant={'h1'} sx={{my:4}}>Hello world!</Typography>
           <CalculatorForm />


    </Container>
  )
}

export default App
