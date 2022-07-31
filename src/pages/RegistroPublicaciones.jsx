import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Container from "@mui/material/Container";

function RegistroPublicaciones() {
  return (
    function RegistroLibro() {
      return (
        <Container>
            <h1>Registro</h1>
            <React.Fragment>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="Name"
                label="Name"
                fullWidth
                autoComplete="cc-name"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="URL"
                label="URL"
                fullWidth
                autoComplete="cc-number"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="Pages"
                label="Pages"
                fullWidth
                autoComplete="cc-exp"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="Editorial"
                label="Editorial"
                helperText="Last three digits on signature strip"
                fullWidth
                autoComplete="cc-csc"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                label="Remember credit card details for next time"
              />
            </Grid>
          </Grid>
        </React.Fragment>
    
        <img 
             className="flag" 
             src="https://www.ecured.cu/images/c/c2/Bandera_del_Segundo_Imperio_Mexicano_%281864-1867%29.png"
            alt="Second Mexican Empire Flag"
        />
    
        </Container>
      )
    }
  )
}

export default RegistroPublicaciones