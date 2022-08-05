import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import Link from '@mui/material/Link';
import { Container } from '@mui/system';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function createData(book, pages) {
  return {
    book,
    pages,
  };
}

const rows = [
  createData(<a href="https://mexicana.cultura.gob.mx/es/repositorio/detalle?id=_suri:DGB:TransObject:5bce59c77a8a0222ef15f0e6" target="_blank">Eduardo Ruiz, "Historia de la guerra de Intervención en Michoacán" (Michoacán)</a>, 698),
  createData(<a href="http://cdigital.dgb.uanl.mx/la/1080121891/1080121891_MA.PDF" target="_blank">Manuel Ramírez de Arellano, "Las últimas horas del Imperio" (Quéretaro) </a>, 282),
  createData(<a href="http://cdigital.dgb.uanl.mx/la/1080013381/1080013381.html" target="_blank"> Sebastián I. Campos, "Recuerdos históricos de la Ciudad de Veracruz y costa de Sotavento del estado durante las campañas de Tres años, la intervención y el imperio" (Veracruz)</a>, 496),
  createData(<a href="https://mexicana.cultura.gob.mx/es/repositorio/detalle?id=_suri:DGB:TransObject:5bce59877a8a0222ef15e0c8&word=Jos%C3%A9%20Vicente%20Villada&r=0&t=4054" target="_blank">Biografía José Vicente Villada (Oficial del Ejército del Centro de Michoacán)</a>, 74),
  createData(<a href="http://cdigital.dgb.uanl.mx/la/1080012761/1080012761.PDF" target="_blank">Irineo Paz, "Álbum de Hidalgo" (Dolores, Hidalgo)</a>, 295),
  createData(<a href="https://mexicana.cultura.gob.mx/es/repositorio/detalle?id=_suri:DGB:TransObject:5bce59c77a8a0222ef15ef29" target="_blank">Irineo Paz, "Algunas Camapañas", Tomo III</a>, 438),
  createData(<a href="https://dgb.cultura.gob.mx/libros/dgb/83785_1.pdf" target="_blank">Rasgos Biográficos del General de Brigada Juan A. Hernández (Occidente y Centro de México)</a>, 79),
  createData(<a href="http://cdigital.dgb.uanl.mx/la/1080012583_C/1080012583_C.html" target="_blank"> Niceto de Zamacois, "Historia de México desde sus tiempos más remotos hasta nuestros días" (Querétaro)</a>, 1812),
  createData(<a href="http://repositorio-digital.cide.edu/handle/11651/1058 target=" target="_blank">Jean Meyer, "México en un espejo: testimonio de los oficiales franceses de la intervención, 1862-1867"</a>, 0),
  createData(<a href="https://mediateca.inah.gob.mx/repositorio/islandora/object/pubdigital%3A29" target="_blank">Diario del sitio de Puebla de Carlos Casarín: Relatos e imágenes en torno a los sucesos de 1863</a>, 0),
  createData(<a href="http://cdigital.dgb.uanl.mx/la/1080028691/1080028691_MA.PDF" target="_blank">José Luis Blasio, "El emperador Maximiliano y su corte"</a>, 478),
  createData(<a href="https://mediateca.inah.gob.mx/repositorio/islandora/object/libro%3A513" target="_blank">Esther Acevedo, "Una historia en quinientas caricaturas"</a>, 78),
  createData(<a href="https://mediateca.inah.gob.mx/repositorio/islandora/object/articulo%3A14865" target="_blank">El dinero de Maximiliano y de Carlota</a>, 14),
  createData(<a href="http://cdigital.dgb.uanl.mx/la/1020002716/1020002716.PDF" target="_blank">Miguel López, "La toma de Querétaro a sus conciudadanos y al mundo"</a>, 19),
  createData(<a href="https://archive.org/details/tenyearsofmylife5411salm/mode/2up?view=theater" target="_blank">Princes of Salm Salm, "Ten years of my life"</a>, 385),
  createData(<a href="https://archive.org/details/mydiaryinmexicoi01salmuoft/page/n3/mode/2up?view=theater" target="_blank">Prince Felix of Salm Salm, "My diary in Mexico in 1867"</a>, 320),
  createData(<a href="https://mexicana.cultura.gob.mx/es/repositorio/detalle?id=_suri:DGB:TransObject:5bce59c67a8a0222ef15ee38&n=0" target="_blank">CONFESIONES, MEMORIAS Y BIOGRAFÍA DE CARLOTA DE BÉLGICA EMPERATRIZ DE MÉXICO / / RECOGIDAS POR LA CONDESA H. DE REINACH</a>, 257),
  createData(<a href="https://mexicana.cultura.gob.mx/es/repositorio/detalle?id=_suri:DGB:TransObject:5bce59897a8a0222ef15e55a&word=mujeres%20intervenci%C3%B3n%20francesa&r=1&t=1729" target="_blank">ELEVACIÓN Y CAÍDA DEL EMPERADOR MAXIMILIANO: INTERVENCIÓN FRANCESA EN MÉXICO 1861-1867</a>, 592),
  createData(<a href="https://mexicana.cultura.gob.mx/es/repositorio/detalle?id=_suri:DGB:TransObject:5bce59887a8a0222ef15e2a8&word=mujeres%20intervenci%C3%B3n%20francesa&r=4&t=1729" target="_blank">Ángel Albino Corzo, "Reseña de varios sucesos acaecidos en el estado de Chiapas durante la intervención francesa en la república"</a>, 48),
  createData(<a href="https://mexicana.cultura.gob.mx/es/repositorio/detalle?id=_suri:DGB:TransObject:5c95763f7a8a0230b7329ff4&r=17&t=1729&sort=relvdes&word=mujeres%20intervenci%C3%B3n%20francesa&leap=17" target="_blank">	E. Lefevre, DOCUMENTOS OFICIALES RECOGIDOS EN LA SECRETARIA PRIVADA DE MAXIMILIANO HISTORIA DE LA INTERVENCION FRANCESA EN MEJICO (1869)</a>, 464),
  createData(<a href="https://mexicana.cultura.gob.mx/es/repositorio/detalle?id=_suri:DGB:TransObject:5bce59887a8a0222ef15e277&r=29&t=1729&sort=relvdes&word=mujeres%20intervenci%C3%B3n%20francesa&leap=25" target="_blank">Charles Du Bouzet, LA INTERVENCIÓN FRANCESA EN MÉXICO CONSIDERADA POR M. CHARLES DE BOUZET EN LA REVISTA MODERNA CORRESPONDIENTE AL AÑO DE 1867</a>, 46),
  createData(<a href="https://mexicana.cultura.gob.mx/es/repositorio/detalle?id=_suri:DGB:TransObject:5bce59897a8a0222ef15e565&r=26&t=1729&sort=relvdes&word=mujeres%20intervenci%C3%B3n%20francesa&leap=25" target="_blank">	Benito Juárez: la Reforma, la Intervención Francesa, el Imperio, el triunfo de la República / memorias de Juan de Dios Peza (1904)</a>, 274),
  createData(<a href="https://mexicana.cultura.gob.mx/es/repositorio/detalle?id=_suri:DGB:TransObject:5bce59887a8a0222ef15e205&r=34&t=1729&sort=relvdes&word=mujeres%20intervenci%C3%B3n%20francesa&leap=33" target="_blank">	México y la intervención: opúsculo publicado en París a principios de noviembre (1861)</a>, 122),
  createData(<a href="https://mexicana.cultura.gob.mx/es/repositorio/detalle?id=_suri:DGB:TransObject:5bce59887a8a0222ef15e2be&r=33&t=1729&sort=relvdes&word=mujeres%20intervenci%C3%B3n%20francesa&leap=33" target="_blank">Miguel Blanco, Exposición que hace al pueblo mexicano el ciudadano Miguel Blanco de su conducta política en la época de la intervención francesa y el llamado imperio (1870)</a>, 84),
  createData(<a href="https://mexicana.cultura.gob.mx/es/repositorio/detalle?id=_suri:DGB:TransObject:5bce59c77a8a0222ef15eea3&r=36&t=1729&sort=relvdes&word=mujeres%20intervenci%C3%B3n%20francesa&leap=33" target="_blank">Papeles y correspondencia de la familia imperial de Francia encontrados en las Tullerías. (Documentos relativos á la intervención francesa en México) / Traducidos por Gabriel Zárate. Folletín de la "Revista Universal" (1873)</a>, 215),
  createData(<a href="https://mexicana.cultura.gob.mx/es/repositorio/detalle?id=_suri:DGB:TransObject:5bce59877a8a0222ef15e049&r=44&t=1729&sort=relvdes&word=mujeres%20intervenci%C3%B3n%20francesa&leap=41" target="_blank">Juan de Dios Frías, RESEÑA HISTÓRICA DE LA FORMACIÓN Y OPERACIONES DEL CUERPO DE EJÉRCITO DEL NORTE DURANTE LA INTERVENCIÓN FRANCESA, SITIO DE QUERÉTARO Y NOTICIAS OFICIALES SOBRE LA CAPTURA DE MAXIMILIANO, SU PROCESO ÍNTEGRO Y SU MUERTE (1867)</a>, 732),
  createData(<a href="http://revistabicentenario.com.mx/index.php/archivos/el-asistencialismo-del-segundo-imperio-para-las-viudas-mexicanas/" target="_blank">El asistencialismo del segundo imperio para las viudas mexicanas / Instituto Mora</a>, 0),
  createData(<a href="https://archivos.juridicas.unam.mx/www/bjv/libros/6/2971/3.pdf" target="_blank">Intervención francesa dos veces (Artículo)</a>, 31),
  createData(<a href="https://historiamexicana.colmex.mx/index.php/RHM/article/view/706/597" target="_blank">Memorias de Joaquín Miramón 1/4</a>, 17),
  createData(<a href="https://historiamexicana.colmex.mx/index.php/RHM/article/view/725/616" target="_blank">Memorias de Joaquín Miramón 2/4</a>, 16),
  createData(<a href="https://historiamexicana.colmex.mx/index.php/RHM/article/view/750/641" target="_blank">Memorias de Joaquín Miramón 3/4</a>, 16),
  createData(<a href="https://historiamexicana.colmex.mx/index.php/RHM/article/view/733/624" target="_blank">Memorias de Joaquín Miramón 4/4</a>, 15),
  createData(<a href="https://historiamexicana.colmex.mx/index.php/RHM/article/view/3857/3817" target="_blank">Cadáver de Maximiliano</a>, 58),
  createData(<a href="https://www.historicas.unam.mx/publicaciones/revistas/boletin/pdf/boletin098.pdf" target="_blank">Afirmación de un destino. Festividades por el cumpleaños de la emperatriz Carlota (1864-1866)</a>, 48),
  createData(<a href="https://dgb.cultura.gob.mx/libros/dgb/80874_1.pdf" target="_blank">ADVENIMIENTO DE SS. MM. II. MAXIMILIANO y CARLOTA AL TRONO DE MÉXICO </a>, 372),
  createData(<a href="http://cdigital.dgb.uanl.mx/la/1020002537/1020002537.PDF" target="_blank">S. M. la Emperatriz Carlota en Veracruz </a>, 22),
  createData(<a href="http://cdigital.dgb.uanl.mx/la/1020002876/1020002876.html" target="_blank">Refutacion al folleto publicado por Miguel López, con motivo de la ocupación de la plaza de Querétaro en 15 de mayo de 1867 </a>, 24),
  createData(<a href="https://www.uaq.mx/investigacion/revista_ciencia@uaq/ArchivosPDF/v1-n1/CiudadEstrangulada.pdf" target="_blank">Ciudad estrangulada, Querétaro 1867 </a>, 18),
  createData(<a href="https://mexicana.cultura.gob.mx/es/repositorio/detalle?id=_suri:DGB:TransObject:5bce598a7a8a0222ef15e863&n=0" target="_blank">	Escalafón general que comprende a los Escmos. Sres. Capitán General, Generales de División: a los de Brigada efectivos y graduados</a>, 54),
  createData(<a href="https://memoricamexico.gob.mx/swb/memorica/Cedula?oId=IUXr-G8BprXWc885wEjW" target="_blank">	El sitio de Querétaro [folleto] apuntes relativos a aquel episodio por el Dr. Vicente Licea</a>, 50),
  createData(<a href="https://memoricamexico.gob.mx/swb/memorica/Cedula?oId=LN06-W8B1i1oLPn4ZejS" target="_blank">	Recuerdos de México: memorias del médico ordinario del emperador Maximiliano, 1866 á 1867</a>, 83),
  createData(<a href="https://memoricamexico.gob.mx/swb/memorica/Cedula?oId=E0Xr-G8BprXWc885R0We" target="_blank">	Querétaro: Apuntes del diario de la princesa Inés de Salm Salm</a>, 51),
  createData(<a href="http://cdigital.dgb.uanl.mx/la/1080012917/1080012917.PDF" target="_blank">	Maximiliano y los últimos sucesos del Imperio</a>, 106),
  createData(<a href="http://cdigital.dgb.uanl.mx/la/1020002908/1020002908.html" target="_blank">	Querétaro : apuntes del diario de la princesa Ines de Salm-Salm (UANL)</a>, 52),
  createData(<a href="http://cdigital.dgb.uanl.mx/la/1080013374/1080013374.PDF" target="_blank">	Príncipe Félix de Salm Salm, "Mis memorias sobre Querétaro y Maximiliano"</a>, 52),
  createData(<a href="https://mexicana.cultura.gob.mx/es/repositorio/detalle?id=_suri:DGB:TransObject:5bce59c77a8a0222ef15f0ea&word=lerdo%20de%20tejada&r=0&t=14518" target="_blank">Memorias de don Sebastián Lerdo de Tejada</a>, 159),
  createData(<a href="https://mexicana.cultura.gob.mx/es/repositorio/detalle?id=_suri:DGB:TransObject:5c95763b7a8a0230b7329daa&word=lerdo%20de%20tejada&r=7&t=14518" target="_blank">Sebastián Lerdo de Tejada</a>, 111),
  createData(<a href="https://inehrm.gob.mx/recursos/Libros/La_llegada_Maximiliano.pdf" target="_blank">Patricia Galeana, "La entrada de Maximiliano",</a>, 34),
  createData(<a href="https://drive.google.com/file/d/1A7hLK0YoluAa3kWUVdNSZfvzyk8XN_QM/view?fbclid=IwAR0Md11DhnN-p7w1m4grQ8WEMgf1gLZEYgRejbJK0CexyUT0EdWfyRhnZ54" target="_blank">Konrad Ratz, "correspondencia inédita entre Maximiliano y Carlota"</a>, 365),
  createData(<a href="https://drive.google.com/file/d/1eW2EfmeOfimBalxDkaiv9affo-4fL0ei/view?fbclid=IwAR0Md11DhnN-p7w1m4grQ8WEMgf1gLZEYgRejbJK0CexyUT0EdWfyRhnZ54" target="_blank">Konrad Ratz, "Tras las huellas de un desconocido"</a>, 246),
  createData(<a href="https://catalogo.iib.unam.mx/F/-/?func=find-b&find_code=SYS&local_base=bndm&format=999&request=000279309" target="_blank">Samuel Basch, "Recuerdos de México. Memorias del médico ordinario del emperador Maximiliano"</a>, 482),
  createData(<a href="http://cdigital.dgb.uanl.mx/la/1080012915/1080012915_MA.PDF" target="_blank">Samuel Basch, "Recuerdos de México. Memorias del médico ordinario del emperador Maximiliano"</a>, 482),
  createData(<a href="https://archive.org/details/HISTORIADELANACINMEXICANAMarianoCuevasS.J./page/n969/mode/2up" target="_blank">Mariano Cuevas, "Historia de la nación mexicana"</a>, 1082),
  createData(<a href="http://juarez.mhiel.mx/portadas-tomos/index.html" target="_blank">Jorge L. Tamayo, "Benito Juárez, documentos, discursos y correspondencia"</a>, 1000),
  createData(<a href="http://cdigital.dgb.uanl.mx/la/1020002768/1020002768.PDF" target="_blank">Charles D' Hericault, "Maximiliano y México. Historia de los últimos meses del imperio mexicano"</a>, 419),
  createData(<a href="http://www.scielo.org.mx/article_plus.php?pid=S0185-26202004000200031&tlng=es&lng=es#aff1" target="_blank">O'Dogherty Madrazo, Laura, "La guardia de la emperatriz Carlota su trágica aventura en México, 1864-1867"</a>, 0),
  createData(<a href="http://132.248.9.195/pmig2016/0158737/0158737.pdf" target="_blank">Aguilar Ochoa, Arturo "La fotografía durante el Imperio de Maximiliano"</a>, 301),
  createData(<a href="http://132.248.9.195/pmig2016/0158737/0158737.pdf" target="_blank">Leonardo Márquez, "El imperio y los imperialistas"</a>, 271)
];

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

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'book',
    numeric: false,
    disablePadding: true,
    label: 'Libros y documentos',
  },
  {
    id: 'pages',
    numeric: true,
    disablePadding: false,
    label: 'Páginas',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          <b>Bibliografía y documentos</b>
        </Typography>
      )}

      
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('pages');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.book);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, book) => {
    const selectedIndex = selected.indexOf(book);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, book);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (book) => selected.indexOf(book) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.book);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.book)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.book}
                      selected={isItemSelected}
                    >
    
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.book}
                      </TableCell>
                      <TableCell align="right">{row.pages}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
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
    </Box>
  );
}




