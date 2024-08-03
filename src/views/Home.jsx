import { useContext } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { PizzaContext } from "../context/PizzaContext";
import backgroundImage from "../assets/img/pizzasfondo.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  /* PARA TRAER LAS PIZZAS DEL ARREGLO Y AGREGAR AL CARRO CON AÑADIR */
  const { pizzas, addToCarrito } = useContext(PizzaContext);
  /* PARA IR A VISTA PIZZA */
  const navigate = useNavigate()

  /* PARA BOTON VER MAS, CON EL ID ÚNICO DE CADA PIZZA */
  const handleClick = (e) => {
    navigate(`/pizza/${e.target.id}`)
  }

  return (
    <Container fluid className="p-0">
      {/* PARA IMAGEN DE FONDO */}
      <Container
        fluid
        className="d-flex flex-column align-item-center justify-content-center text-center"
        style={{
          width: "100%",
          height: "40vh",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          color: "white",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 0,
          }}
        ></div>
        <div style={{ zIndex: 1 }}>
          <h1>¡Pizzería Mamma Mia!</h1>
          <h2>¡Tenemos las mejores pizzas que podrás encontrar!</h2>
          <hr
            style={{
              marginTop: "20px",
              marginLeft: "200px",
              marginRight: "200px",
              borderColor: "white",
              borderWidth: "2px",
            }}
          />
        </div>
      </Container>

      {/* PARA QUE SE MUESTRE TODAS LAS PIZZAS */}
      <Container className="my-5">
        <Row>
          {pizzas.map((pizza) => (
            <Col key={pizza.id} md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={pizza.img} />
                <Card.Body>
                  {/* text-capitalize primera letra en mayuscula */}
                  <Card.Title className="text-capitalize">
                    {pizza.name}
                  </Card.Title>
                  <hr />
                  <Card.Text className="text-capitalize">
                    <span className="fw-bold">Ingredientes:</span>
                    {/* list-unstyled para eliminar marcados */}
                    <ul className="list-unstyled ps-4 pt-3">
                      {pizza.ingredients.map((ingredient, index) => (
                        <li key={index}>🍕 {ingredient}</li>
                      ))}
                    </ul>
                  </Card.Text>
                  <hr />
                  <Card.Text className="text-center fs-4 fw-bold">
                    ${pizza.price.toLocaleString()}</Card.Text>
                  <div className="d-flex justify-content-center">
                    {/* PARA BOTON VER MAS */}
                    <Button variant="info" onClick={handleClick} id={pizza.id} className="mx-2 text-white">
                      Ver Más 👀
                    </Button>
                    {/* BOTON PARA AÑADIR AL CARRO */}
                    <Button variant="danger" onClick={() => addToCarrito(pizza)} className="mx-2">
                      Añadir 🛒
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Home;