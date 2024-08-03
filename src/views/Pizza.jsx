import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

const Pizza = () => {
  /* PARA MOSTRAR EL DETALLE DE PIZZA SELECCIONADA */
  const { pizzas, addToCarrito } = useContext(PizzaContext);
  /* para extraer los parametros del objeto por id */
  const { id } = useParams();

  /* se busca la coincidencia */
  const pizzaSel = pizzas.find((pizza) => pizza.id === id);
  /* cuando no existe la pizza en la busqueda */
  if (!pizzaSel) {
    return <p>Loading...</p>;
  }
/* si coincide sus propiedades se desestructura */
  const { img, name, desc, ingredients, price } = pizzaSel;


  return (
    <Container>
      <Card className="mt-5">
        {/* noGutters para eliminar espacios entre columnas */}
        <Row noGutters>
          <Col md={4}>
            <Card.Img
              variant="top"
              src={img}
              alt={name}
              className="h-100 w-100"
            />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title className="text-capitalize">{name}</Card.Title>
              <hr />
              <Card.Text>{desc}</Card.Text>
              <Card.Text className="text-capitalize">
                <h5>Ingredientes:</h5>
                <ul className="list-unstyled ps-4 pt-3">
                  {ingredients.map((ingredient, index) => (
                    <li key={index}> 🍕 {ingredient}</li>
                  ))}
                </ul>
              </Card.Text>
              <div className="d-flex justify-content-between align-items-center">
                <h5>Precio: ${price.toLocaleString()}</h5>
                {/* PARA AÑADIR AL CARRITO */}
                <Button variant="danger" onClick={() => addToCarrito(pizzaSel)}
                >Añadir 🛒</Button>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Pizza;
