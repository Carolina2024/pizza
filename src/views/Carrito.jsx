import { Container, Card, Button, Row, Col, ListGroup } from "react-bootstrap";
import { useContext } from 'react';
import { PizzaContext } from '../context/PizzaContext';

const Carrito = () => {
  const { carrito, getTotal } = useContext(PizzaContext);
  const total = getTotal();

  return (
    <Container className="my-5">
      <Card className="bg-light p-4">
        <Card.Title>Detalles del pedido:</Card.Title>
        <Card.Body className="bg-white">
          <ListGroup variant="flush">
            {carrito.map((item, index) => (
              <ListGroup.Item key={index}>
                <Row className="align-items-center">
                  <Col xs={2}>
                    <img src={item.img} alt={item.name} className="img-fluid" />
                  </Col>
                  <Col xs={4} className="text-capitalize fw-bold">
                    {item.name}
                  </Col>
                  <Col
                    xs={6}
                    className="d-flex justify-content-end align-items-center"
                  >
                    <span className="text-success fw-bold me-4">
                      {/* precio por cantidad */}
                      ${(item.price * item.quantity).toLocaleString()}
                    </span>
                    <Button variant="danger" className="me-2">
                      -
                    </Button>
                    <span className="fw-bold">{item.quantity}</span>
                    <Button variant="primary" className="ms-2">
                      +
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <hr />
          <Row className="mt-1">
            <Col className="d-flex flex-column align-items-start mt-1 bg-white">
              <Card.Text className="fw-bold fs-4 mt-2 ms-3">
                Total: ${total.toLocaleString()}
              </Card.Text>
              <Button className="ms-3 mb-4" variant="success">
                Ir a Pagar
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Carrito;