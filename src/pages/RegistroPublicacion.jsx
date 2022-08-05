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
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom"

//CSS
import "../pages/auth.css";

function RegistroPublicacion() {
  const [name, setName] = React.useState("")
  const [image, setImage] = React.useState("")
  const [description, setDescription] = React.useState("")
  const navi= useNavigate()

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
    const publicationObject = {
      name: name,
      description: description,
      image: image,
    }
   fetch(`${process.env.REACT_APP_SERVER_URL}/publications/post-new`, {
      method: "POST",
      body: JSON.stringify(publicationObject),
      headers:{"Content-Type" : "application/json"}
    })
    .then(res => res.json())
    .then(data => navi("/Publications"))
    .catch(console.log)
  }

  const onChange = (event) => {
    if (event.target.name === "name") {
      setName(event.target.value)
    }
    if (event.target.name === "description") {
      setDescription(event.target.value)
    }
    if (event.target.name === "image") {
      setImage(event.target.value)
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
            value={name}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="Description"
            name="description"
            label="Descripción"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            onChange={(e) => onChange(e)}
            value={description}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="Image"
            name="image"
            label="Imagen"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            onChange={(e) => onChange(e)}
            value={image}
          />
        </Grid>
       
      </Grid>
    </React.Fragment>

    <div className='add-Button'>
   
    <Button onClick={test} variant="contained">Añadir</Button>
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

export default RegistroPublicacion;