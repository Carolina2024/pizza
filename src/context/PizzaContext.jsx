import { useEffect, useState, createContext } from "react";

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [carrito, setCarrito] = useState([]);

  /* PARA EL ARREGLO */
  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const res = await fetch("./pizzas.json");
        const data = await res.json();
        setPizzas(data);
      } catch (e) {
        alert("ERROR AL RECUPERAR LAS PIZZAS", e);
      }
    };
    fetchPizzas();
  }, []);

  /* PARA AGREGAR AL CARRITO */
  /* funcion para añadir una pizza al carrito */
  const addToCarrito = (pizza) => {
    /* actualizar el estado carrito */
    setCarrito((prevCarrito) => {
      /* comprobar si la pizza ya está en el carrito con el id del arreglo */
      const existingPizza = prevCarrito.find(item => item.id === pizza.id);
      /* si pizza ya está en el carrito se actualiza su cantidad y precio total */
      if (existingPizza) {
        return prevCarrito.map(item =>
          item.id === pizza.id
            ? { ...item, quantity: item.quantity + 1, total: item.total + pizza.price }
            : item
        );
        /* si no, se agrega con una cantidad de 1 y se establece su precio total */
      } else {
        return [...prevCarrito, { ...pizza, quantity: 1, total: pizza.price }];
      }
    });
  };

  /* SE CALCULA EL PRECIO TOTAL DE TODOS LOS ARTICULOS DEL CARRITO */
  const getTotal = () => {
    /* recorre acumulando el precio total carrito, se inicia en 0 */
    return carrito.reduce((acc, item) => acc + item.total, 0);
  };


  return (
    <PizzaContext.Provider value={{ pizzas, carrito, addToCarrito, getTotal }}>
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaProvider;
