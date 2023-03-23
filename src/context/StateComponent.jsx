import React, { createContext } from "react";

export const CounterContext = createContext();

const StateComponent = ({ children }) => {
  const [cart, setCart] = useState(0);

  const increment = () => {
    setCart(cart + 1);
  };
  const decrement = () => {
    if (cart != 0) {
      setCart(cart - 1);
    }
  };
  const reset = () => {
    setCart(0);
  };

  return (
    <CounterContext.Provider value={{ cart, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  );
};

export default StateComponent;
