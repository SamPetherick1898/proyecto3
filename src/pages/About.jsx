import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Carousel from "../components/Carousel/Carousel"
import axios from 'axios';

//CSS
import "../pages/About.css"

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

export default function StickyFooter() {
 
  
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Acerca de mi
        </Typography>
        
        <img
            className='photoSam'
            src='/Images/sam.jpeg'
            alt="Samuel"
        />

          <p className='textContact'>
            <b>Samuel Ignacio Magaña Fuentes</b> nació en la ciudad de Lázaro Cárdenas,
            Michoacán de Ocampo, México, el día 10 de agosto de 1992. Estudió su
            licenciatura en Historia en la <b>Universidad Michoacana de San Nicolás
            de Hidalgo</b>, generación 2011-2015. Se tituló el 26 de octubre de 2017
            con una tesis de investigación intitulada 
            <a href="https://drive.google.com/file/d/17C2tSyI1kNR1pFXaoQc8zindMvf7ZxF-/view?usp=sharing" target="_blank"><i>
            “Transgresores frente a la Inquisición al norte del Obispado de Michoacán. Seis estudios de caso
            en las proximidades de San Luis Potosí 1756-1795”</i></a>, investigación que
            actualmente se encuentra en correcciones de estilo para publicación
            de libro.
            
            <br/>
            <br/>
            Durante el período 2018-2020 cursó su Maestría en Historia
            por el <b>Colegio de San Luis (COLSAN)</b>. El día 13 de mayo de 2021 obtuvo
            el grado de Maestro en Historia con una tesis intitulada <a href="https://drive.google.com/file/d/1brjmK055BpCOSB6nQRFORKMPtoLY3VfP/view?usp=sharing" target="_blank"><i>"Sendas de
            dominación y violentas pasiones. Las hijas de Eva en el gran Michoacán
            del S. XVIII"</i></a>, dirigida por el Dr. Juan Carlos Ruiz Guadalajara.
            Su investigación alcanzó los más altos laureles, ya que fue aprobada
            por unanimidad por los doctores Juvenal Jaramillo Magaña, José Armando
            Hernández Soubervielle y Juan Carlos Ruiz Guadalajara, quienes además
            le dieron <a href='https://drive.google.com/file/d/13NNlCZkWV5RyjmLxXpYoP604N7_ipiST/view?usp=sharing' target="_blank">
            mención honorífica y aprobación para publicación de libro</a>.

            <br/>
            <br/>

            Como historiador ha adquirido experiencia en investigación tanto
            bibliográfica como diversos acervos históricos. Se encuentra siguiendo
            líneas de investigación como lo son la Historia Social y Cultural
            e Historia Intelectual. Su trabajo más reciente involucra un análisis
            de la misoginia occidental, partiendo desde el mundo grecorromano
            hasta el mundo judeocristiano medieval y renacentista. Además,
            se encuentra realizando algunas investigaciones relacionadas
            con las líneas de investigación señaladas, pero enfocadas al
            Segundo Imperio Mexicano (1864-1867).

          </p>
      </Container>
      <div className="carousel">
              <Carousel/>
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
    </Box>
  );
}