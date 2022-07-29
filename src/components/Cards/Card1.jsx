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
        /*avatar={
          <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
            JH
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        } */
        title="Extranjeros en México"
        subheader="12 de abril, 2022"
      />
      <CardMedia
        component="img"
        height="350"
        image="https://scontent-qro1-1.xx.fbcdn.net/v/t39.30808-6/269914557_3062343060647537_5908862669746357962_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGEoVwtFl7Gs4IEkKHgbSg9yOx96P69Nw3I7H3o_r03DSfk47ba7YsjodaSCAtiJik5f3UFx3YZPhQ9EGP0MS1T&_nc_ohc=bmY43RcWRuwAX9poDST&_nc_ht=scontent-qro1-1.xx&oh=00_AT-7DqlT4DsISFOOY1pWxNA3MiRYXQex9c-ynYaRseKWXA&oe=62E7A21F"
        alt="James grave"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <b>Pierre Leopold van Verboonen
          <br/>
          (1828-1898) </b>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton href='https://www.facebook.com/' target="_blank" aria-label="share">
          <ShareIcon />
        </IconButton>
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
          En el puerto de Lázaro Cárdenas, Michoacán, vive la familia Verboonen, 
          quienes son descendientes de un soldado belga del imperio de Maximiliano 
          de Habsburgo (1864-1867). En abril de 1865 marchaba sobre la ciudad de 
          Morelia una división de soldados belgas, comandados por el teniente
          coronel Alfred van der Smissen, en apoyo de las tropas imperialistas 
          mexicanas comandadas por el coronel Ramón Méndez. Esta división belga 
          pertenecía a la escolta personal de la Emperatriz Carlota, quienes
          tenían como misión ocupar la población de Tacámbaro. Después de su
          derrota el 11 de abril a manos del general Nicolás de Régules,
          los soldados belgas fueron llevados prisioneros a Huetamo,
          Santiago y Zirándaro. Fue hasta el mes de diciembre del mismo
          año que se llevó a cabo el canje de prisioneros en la población de Acuitzio.
          </Typography>
          <Typography paragraph>
          Pero, ¿cómo se originó la familia Verboonen? Pues bien, esto fue resultado
          gracias a que muchos de aquellos belgas ya no querían combatir, y otros,
          en busca de mejores oportunidades, decidieron escapar y establecerse en 
          diferentes lugares de la Tierra Caliente de Guerrero y Michoacán. Nuestro 
          protagonista fue Pierre Leopold von Verboonen, quien desertó de la escolta 
          de la Emperatriz para irse con rumbo a Petatlán, lugar en el que formó una 
          familia con la señora María de Jesús Solís. Gracias a ello, las zonas del 
          sur de los estados de Guerrero y Michoacán se encuentran con un número
          elevado, hasta nuestros días, de los descendientes de aquel soldado belga 
          que llegó, al igual como sus compañeros, a proteger a la esposa de Maximiliano I de México.
          </Typography>
          <Typography>
          A finales del año de 1864 llegaron a México los destacamentos de belgas encargados
          del cuidado de la emperatriz Carlota, esposa del Emperador Maximiliano I de México.
          Para el año de 1865 ya estaba integrada la legión, al mando de su comandante en jefe,
          el teniente coronel Van der Smissen, así como de varios jóvenes oficiales. El Regimiento
          de la Emperatriz Carlota fue designado a Michoacán para combatir al ejército republicano
          al mando del general español Nicolás de Régules.En los primeros días de abril, el 
          Regimiento se dividió en dos, yendo una parte a Zitácuaro y la otra a la ciudad de Morelia
          con rumbo a Tacámbaro.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>

  );
}



/* 

import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

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