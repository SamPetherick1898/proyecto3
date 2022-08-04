import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { Paper, Grid } from '@mui/material';
//CSS
import "../App.css";

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

function HomePage() {
  return (
  <Grid sx={{margin: 0, }}>
      <Typography
        variant="h3"
        component="h1"
        sx={{
          marginTop: 4,
          marginBottom: 4,
          variant: "container",
        }}
      >
        Historiador Samuel Ignacio Magaña Fuentes
      </Typography>
        
      <Paper
        sx={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(/Images/spqr1.jpeg)`,
          height: "120vh",
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          display: "flex",
          flexDirection: "row",
          justifyContent:"flex-end",
          fontStyle: 'italic'
          
        }}
        elevation={2}
        
      >
        
         <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'center',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h2" >
            Ven y conoce 
            </Typography>
            <Typography component="h1" variant="h2"  gutterBottom>
            nuestro trabajo
            </Typography>

            <Typography paragraph variant="h5" component="h1" gutterBottom >
              No solo hacemos historia. Creamos experiencias para todo el público. Nuestro país requiere de jóvenes y lideres entusiastas y, en Senātus Populusque Rōmānus, los asesoramos para crear nuevas generaciones políticas con valores, ética y humanismo.
            </Typography>
            
          </Box>
        </Grid>
      </Grid>
       
            
      
          
        
      </Paper>
      
       
      <Grid className='boxes'>


        <Typography paragraph>
          ¡Cuidado!  
        </Typography>

        <Typography paragraph>
          No te conviertas en un César, no te tiñas siquiera, porque suele ocurrir. Mantente, por tanto, sencillo, bueno, puro, respetable, sin arrogancia, amigo de lo justo, piadoso, benévolo, afable, firme en el cumplimiento del deber. Lucha por conservarte tal cual la filosofía ha querido hacerte. Respeta a los dioses, ayuda a salvar a los hombres. Breve es la vida. El único fruto de la vida terrena es una piadosa disposición y actos útiles a la comunidad.
        </Typography>

        <Typography paragraph>
          Marco Aurelio, Meditaciones, Libro VI, (30)
        </Typography>
         
      </Grid>

          <div className="video">
              <h2>Meditaciones, Emperador Marco Aurelio</h2>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/wXAeQSxX_7w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>


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
          <Typography variant="body1">
          <b>Lo que no beneficia al enjambre, tampoco beneficia a la abeja.</b>
          </Typography>
          <Copyright />
      
      </Box>

    </Grid>

    
      
  );
}

export default HomePage;
