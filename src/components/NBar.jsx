import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";

const NBar = () => {
  /* PARA AGREGAR AL CARRO */
  const { getTotal } = useContext(PizzaContext);
  const total = getTotal();

  return (
    /* fixed-top para que Navbar quede fijo */
    <Navbar className="fixed-top" style={{backgroundColor: "#00A0A0"}} variant="dark" expand="lg">
      <Container>
        <Nav className="w-100 d-flex justify-content-between ">
          <NavLink className="me-4 text-decoration-none text-white" to="/">
            🍕 Pizzería Mamma Mia!
          </NavLink>
          <NavLink className="me-4 text-decoration-none text-white" to="/carrito">
            {/* PARA EL VALOR AGREGADO AL CARRO, CON SEPARADOR DE MILES */}
            🛒 ${total.toLocaleString()}
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NBar;