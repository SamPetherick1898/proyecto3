import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';

//CSS
import "./Navbar.css"

const pages = ['Acerca', 'Contacto', 'Librería'];
const settings = ['Salir'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

        <Button href="/" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
        <img className="helmet" src="https://www.mexicodesconocido.com.mx/wp-content/uploads/2020/08/Escudos-de-la-bandera-de-Mexico-maximiliani-900x921.png" alt="helmet" href="/"/>
          </Button>
          

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
                <MenuItem onClick={handleCloseNavMenu}>
                
                  <Typography textAlign="center">Acerca</Typography>
                </MenuItem>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Link to="/About">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                 Acerca
                </Button>
              </Link>
              <Link to="/Library">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                 Librería
                </Button>
              </Link>
              <Link to="/auth/Signup">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                 Registrarse
                </Button>
              </Link>
              <Link to="/auth/Login">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                 Acceder
                </Button>
              </Link>
              
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://scontent.fmex1-4.fna.fbcdn.net/v/t39.30808-6/244659720_2993493550865822_7607620310548040163_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHOMOEImVjnoGA2icj1UT0VgOD7StWDlYeA4PtK1YOVh43S3Ih9EyqPQ6TFYOfFdAHyYD-gyb4sWfQAeWRGq_FM&_nc_ohc=LCXnusfn_l8AX81Rul_&_nc_ht=scontent.fmex1-4.fna&oh=00_AT8gXlmbPWykJCmAZQiNxTBheflB2kwWHmO-Y85PqSEUNQ&oe=62E6E54E" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;



/*import React from "react";
import { Link } from "react-router-dom";
import * as CONSTS from "../../utils/consts";

const Navbar = (props) => {
  return (
    <nav> 
            <Link to="/" className="authLink">
            <img className="helmet" src="https://cdn-icons-png.flaticon.com/512/112/112255.png" alt="helmet"/>
            </Link>
            <Link to="/auth/signup" className="authLink">
              Signup
            </Link>
            <Link to="/auth/login" className="authLink">
              Log In
            </Link>
            <Link to="/Library" className="authLink">
              Librería
            </Link>
    </nav>
  );
};

export default Navbar;


<img className="helmet" src="https://cdn-icons-png.flaticon.com/512/112/112255.png" alt="helmet"/>
*/

