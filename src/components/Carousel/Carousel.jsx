import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Sepulcro de Santa Eulalia de Barcelona - Catedral de Barcelona, España',
    imgPath:
      'https://scontent.fmex1-4.fna.fbcdn.net/v/t39.30808-6/294726268_179266457824250_2638261627657345594_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHWnb6Cbqb9XE23ddgJgdiKPqhld_D2rmE-qGV38PauYT5pwJFdeZ8S609lmS9iq5rBhHoGwYD-eTI4Grz15VJa&_nc_ohc=X5NlBncmt0wAX8Wezl9&_nc_ht=scontent.fmex1-4.fna&oh=00_AT_2Y3J9mQwBsl3xEKyIagIrFjGHahFugXXNvmC-GBDkGw&oe=62E6BC9B',
  },
  {
    label: 'La Alhambra - Granada, España',
    imgPath:
      'https://scontent.fmex1-4.fna.fbcdn.net/v/t39.30808-6/293071875_177797401304489_3778570545409415255_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeEgdFivzR2V93Ts2UuIhs-m-0M9sLvj-jX7Qz2wu-P6NU5xU8UdqJbnC_MenT3ubvvE0mkTUj0zBZUieqnOR3yk&_nc_ohc=I9mg2oZGDocAX9MNsYP&_nc_ht=scontent.fmex1-4.fna&oh=00_AT_XJJAAt198YldEvJMOaEZpbiFOsi21Niol8OkrLtMhOw&oe=62E78C56',
  },
  {
    label: 'Dinosaurio - Fuentes de Magaña, España',
    imgPath:
      'https://scontent.fmex1-1.fna.fbcdn.net/v/t39.30808-6/292044761_176255974791965_416518289446446967_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeFs0UI5UmURfsUAaw6qrJYGeG1Iky6sZyx4bUiTLqxnLHBQ-FXZhT0mk5Fa2lWg6zx5dGvinY0HzWFBPOoFrVwl&_nc_ohc=Y5XIchpKIdMAX8RL2U_&_nc_ht=scontent.fmex1-1.fna&oh=00_AT-XGreWn3v7P3sR5w0yoXmjoCn65htGk5QrawMyG8Y4nA&oe=62E8332A',
  },
  {
    label: 'Basílica de Nuestra Señora del Pilar - Zaragoza, España ',
    imgPath:
      'https://scontent.fmex1-4.fna.fbcdn.net/v/t39.30808-6/290568647_174804574937105_9052537209287866041_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeEnbFPiPo_nqtnF18Gmo4wrIWXDcYXCY7QhZcNxhcJjtPIAxwgQaqSB_VdN5PWHudx7F-thJ3-kkMTulF_h61c9&_nc_ohc=7oRWvQB0hLgAX8Viqg1&_nc_ht=scontent.fmex1-4.fna&oh=00_AT-wiP16cStUyPTYhCyzd9ma17O5qGmicIt9ppWbCLoDLg&oe=62E7D455',
  },
  {
    label: 'Castillo de Magaña - Magaña, España ',
    imgPath:
      'https://scontent.fmex1-4.fna.fbcdn.net/v/t39.30808-6/240605101_101365685614328_2887123948997075052_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeF-BDcVBy-t6qkiUYYnPvgH3al9JKEU5O_dqX0koRTk76b-2HNxudIFGTo0lZDIb7NjwqBGnnYn4w2v3epchX9R&_nc_ohc=pTpN7Y11XtMAX84ZyzR&_nc_ht=scontent.fmex1-4.fna&oh=00_AT-3nA3KjPiDASyK931Vl_0vi52IqTP8ssdUEkCdi9GS9g&oe=62E791A6',
  },
  {
    label: 'Catedral de Sevilla - Sevilla, España ',
    imgPath:
      'https://scontent.fmex1-1.fna.fbcdn.net/v/t1.6435-9/72291017_2404199273128589_5090846180720508928_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=19026a&_nc_eui2=AeEGh2UvYeA6tU9rvKY6p2hjE0zQkaF3sckTTNCRoXexyTwGwrHAki8Uxo49i-I4Z8pMeGb48no5sVtmUh2cMkQ9&_nc_ohc=iSkmvqziqw4AX-FQjLH&tn=r9DmKSr4sn4ZhfD7&_nc_ht=scontent.fmex1-1.fna&oh=00_AT-PzrRghNrCYPSZ8fsFt0Qd4ox4L59_krGdEXtNP9P1VA&oe=6306EF81',
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 800, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 555,
                  display: 'block',
                  maxWidth: 800,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;
