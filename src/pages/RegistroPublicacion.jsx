import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Container from "@mui/material/Container";
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

//CSS
import "../pages/auth.css";

function RegistroLibro() {
  const [name, setName] = React.useState("")
  const [url, setUrl] = React.useState("")
  const [pages, setPages] = React.useState("")
  const [editorial, setEditorial] = React.useState("")
  const [year, setYear] = React.useState("")
  const [acceso, setAcceso] = React.useState("")

  function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary">
        {'Copyright © '}
        <Link color="inherit" href="https://www.facebook.com/SamuelMaganaCultura/?ref=pages_you_manage" target="_blank">
          Samuel Ignacio Magaña Fuentes
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const test = () => {
    const bookObject = {
      name: name,
      url: url,
      pages: pages,
      editorial: editorial,
    }
   // fetch('http://localhost:5005/api/books/post-book', {
     // method: "POST",
      //body: JSON.stringify(bookObject),
      //headers:{"Content-Type" : "application/json"}
    //})
    //.then(res => res.json())
    //.then(data => console.log(data))
    //.catch(console.log)
  }

  const onChange = (event) => {
    if (event.target.name === "Name") {
      setName(event.target.value)
    }
    if (event.target.name === "Description") {
      setUrl(event.target.value)
    }
    if (event.target.name === "Image") {
      setPages(event.target.value)
  }
}


  return (
    <Container>
        <h1>Registro de publicación</h1>
        <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="Name"
            name="name"
            label="Nombre"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            onChange={(e) => onChange(e)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="Description"
            name="Description"
            label="Descripción"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            onChange={(e) => onChange(e)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="Image"
            name="Image"
            label="Imagen"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            onChange={(e) => onChange(e)}
          />
        </Grid>
       
      </Grid>
    </React.Fragment>

    <div className='add-Button'>
    <button onClick={test}>Añadir</button>
    </div>

    <img 
         className="flag" 
         src="/Images/flag.png"
        alt="Second Mexican Empire Flag"
    />
     <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
          <b>Lo que no beneficia al enjambre, tampoco beneficia a la abeja.</b>
          </Typography>
          <Copyright />
        </Container>
      </Box>

    </Container>


 
  )
}

export default RegistroLibro;