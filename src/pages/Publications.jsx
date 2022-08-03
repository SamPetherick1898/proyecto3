import React,  { useEffect, useState }  from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Card1 from "../components/Cards/Card1";
import Card2 from "../components/Cards/Card2";


//CSS
import "../pages/Library.css";


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

function Publications() {
  const [publications, setPub] = useState([])

  useEffect(()=> {
    fetch("http://localhost:5005/api/publications")
    .then(data => data.json() )
    .then( publicaciones => {
      setPub(publicaciones)
    })
    .catch(console.log)
  }, [])

  return (
    <div>
        <h1>Publicaciones</h1>

  


        {
          publications.map((pub) => {
            return <div key={pub._id}>{pub.name} {pub.description } <img src={pub.image} alt="img"/></div>
          })
        }


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
    </div>
  )
}

//hacer los formularios
//hacer los formularios controlados
//states
//axios y/o fetch

export default Publications