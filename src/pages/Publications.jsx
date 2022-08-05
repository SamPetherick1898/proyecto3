import React,  { useEffect, useState }  from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import CardPublications from "../components/Cards/CardPublications"

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
    fetch(`${process.env.REACT_APP_SERVER_URL}/publications`)
    .then(data => data.json() )
    .then( publicaciones => {
      console.log(publicaciones)
      setPub(publicaciones)
    })
    .catch(console.log)
  }, [])

  return (
    <div>

        <h1>Publicaciones</h1>

      <Box sx={{ 

        display: "flex",
        flexWrap: "wrap",
        padding: "20px 50px",
        justifyContent: "space-between",
        margin: "5%"

       }}>
        {
          publications.map((pub) => {
            return <CardPublications key={pub._id} name={pub.name} description={pub.description } image={pub.image} id={pub._id} alt="img"/>
          })
        }
      </Box>

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
              ? theme.palette.error.dark[200]
              : theme.palette.error.dark[200],
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

export default Publications