import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { green, orange, red, yellow } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Rating from "../Rating/Rating"

//CSS
import "./Cards.css"

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
       /* avatar={
          <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
            GP
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        } */
        title="Los cangrejos"
        subheader="26 de julio, 2022"
      />
      <CardMedia
        component="img"
        height="350"
        image="https://www.eleconomista.com.mx/__export/1644467471967/sites/eleconomista/img/2022/02/09/guillermo-prieto-cortesia.png_2062789929.png"
        alt="James grave"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <b>Guillermo Prieto
          <br/>
          (1818-1897) </b>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Rating/>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className='card1'>
          <Typography paragraph><b>Información:</b></Typography>
          <Typography paragraph>
            <i>Sabías qué...</i>
          </Typography>
          <Typography paragraph>
          El escritor, periodista y político, don Guillermo Prieto, escribió una sátira
        que se popularizó por todo México en 1854, la cual se burlaba del partido 
        conservador/clerical, llamada "Los cangrejos". En su sátira acusaba a los 
        conservadores de ir en retroceso, quienes no buscaban el progreso y bienestar
        de México y de los mexicanos, sino el de sus propios intereses. El nacimiento
        de estos versos se remonta a la dimisión del presidente Mariano Arista, 
        ocasionada por hombres ricos, especialmente hacendados, comerciantes y clérigos
        con el Plan del Hospicio, el cual trajo de vuelta al escenario político al General
         Antonio López de Santa Anna, quien se encontraba exiliado en Colombia.
          </Typography>
          <Typography paragraph>
          Las coplas hacen referencia a los conservadores como cangrejos, quienes nunca
        iban hacia adelante, sino hacia los lados, interpretado hacia atrás, hacia el 
        retroceso político y social. La influencia que ejercía el Ejército y la Iglesia 
        sobre este partido era enorme, cuestión por la cual se dice en las coplas: Casacas
        y sotanas dominan donde quiera... y el holgorio de jesuita, y el guardia de garita,
        y el fuero militar. Ante esta forma de gobierno, los liberales responden en la canción
        con burla: ¡Zuz, ziz, zaz!  ¡Viva la Libertad!  ¿Quieres Inquisición?
        ¡Ja-ja-ja-ja-ja-ja!  Vendrá “Pancho membrillo” (chinaco ficticio) y los azotará.
          </Typography>
          <Typography>
          Los versos se convirtieron en canción, la cual fue bien recibida entre los liberales.
            Su popularidad se incrementó tras la llegada de Maximiliano a México (1864), puesto
            que el pueblo que apoyaba a Juárez y a la República veía cómo "Los cangrejos" querían
            volver al pasado del yugo extranjero. Está canción, junto con el "Adiós, mamá Carlota"
            (1866) del general Vicente Riva Palacio, se cantaron a lo largo de toda la guerra,
            especialmente en el Sitio de Querétaro y la entrada triunfal de Juárez a la capital.
            <br/>
            <br/>
            Letra de la versión original de "Los cangrejos":
            Cangrejos, al combate, 
            cangrejos, a compás;
            un paso pa’ delante, 
            doscientos para atrás.
            <br/>
            <br/>
            Casacas y sotanas 
            dominan donde quiera, 
            los sabios de Montera
            felices nos harán. 
            <br/>
            <br/>
            Maldita federata
            que oprobios nos recuerda...
            <br/>
            <br/>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}


/* 



const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function HoverRating() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}

*/