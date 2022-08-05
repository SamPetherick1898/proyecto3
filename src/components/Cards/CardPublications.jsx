import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";



export default function ActionAreaCard(props) {
    const { image, name, description, id, user } = props
    const navi = useNavigate()

    function deletePublication(){
      fetch(`${process.env.REACT_APP_SERVER_URL}/publications/delete/${id}`, {method:"delete"})
      .then(data => data.json() )
      .then( publicaciones => {
       navi("/")
      })
      .catch(console.log)
    }

    function editPublication(){
      fetch(`${process.env.REACT_APP_SERVER_URL}/publications/edit/${id}`, {method:"put"})
      .then(data => data.json() )
      .then( publicaciones => {
       navi("/editpublication")
      })
      .catch(console.log)
  
    }


  return (

    <Card sx={{ maxWidth: 345 }}>

        <CardMedia
          component="img"
          height="450"
          image={image}
          alt=""
        />

          
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>

          { /* Falta que el usuario no pueda ver lo botones del crud, pero si el admin */}

          { user?.rol === "administrador" && ( 
                <>
          <EditIcon onClick={editPublication}/>
          <DeleteIcon onClick={deletePublication}/>
</>
          )
          }

        </CardContent>
        
    </Card>
  );
}
