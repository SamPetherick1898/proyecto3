import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

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
    <div>

        <h1>Historiador Samuel Ignacio Magaña Fuentes</h1>

        <img
            className="spqr"
            src="/Images/spqr.jpeg"
            alt="SPQR"
          />

        <p className="textHeader">
          <b>¡Cuidado!</b> No te conviertas en un César, no te tiñas siquiera, porque suele ocurrir. Mantente, por tanto, sencillo, bueno, puro, respetable, sin arrogancia, amigo de lo justo, piadoso, benévolo, afable, firme en el cumplimiento del deber. Lucha por conservarte tal cual la filosofía ha querido hacerte. Respeta a los dioses, ayuda a salvar a los hombres. Breve es la vida. El único fruto de la vida terrena es una piadosa disposición y actos útiles a la comunidad.
          <br/><br/>
          <div className="emperator"><b>Marco Aurelio, Meditaciones, Libro VI, (30)</b></div>
        </p>

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
  );
}

export default HomePage;
