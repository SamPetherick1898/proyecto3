import Card1 from "../components/Cards/Card1";
import Card2 from "../components/Cards/Card2";
import Table from "../components/Table/Table";
import Container from "@mui/material/Container";
import Music from "../components/Music/Music";

//CSS
import "../pages/Library.css"

function library() {
    return (
      <div>
              <h1>Biblioteca Digital Segundo Imperio Mexicano</h1>
              
              <div className="cardsAlign">
                  <Card1/>
                  <img 
                    className="galleon" 
                    src="https://cdn.pixabay.com/photo/2012/04/18/18/32/sailboat-37510_960_720.png"
                    alt="Galleon"
                    />
                  <Card2/>
              </div>

              <p className="textLibrary">
              Dentro de esta sección podrá el público consultar las memorias
              y escritos de la guerra de Intervención y Segundo Imperio 
              que se han podido recabar. No solamente
              se encuentran reunidas fuentes primarias, sino también artículos
              de investigación que atienden al tema de interés.
              </p>

              <Music/>

              <Container>
                <Table/>
              </Container>

      </div>
    );
  }
  
  export default library;