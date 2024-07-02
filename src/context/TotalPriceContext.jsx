import { useContext, useReducer, createContext } from 'react';
import { PropTypes } from 'prop-types';

const TotalPriceContext = createContext(0);

const TotalPriceDispatchContext = createContext(0);

const totalPriceReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE': {
      return {
        total: action.payload.total,
      };
    }
    default:
      throw Error('Unknown action: ' + action.type);
  }
};

export function TotalPriceProvider({ children }) {
  const [totalPrice, dispatch] = useReducer(totalPriceReducer, { total: 0 });
  return (
    <TotalPriceContext.Provider value={totalPrice}>
      <TotalPriceDispatchContext.Provider value={dispatch}>
        {children}
      </TotalPriceDispatchContext.Provider>
    </TotalPriceContext.Provider>
  );
}

TotalPriceProvider.propTypes = {
  children: PropTypes.any,
};

export function useTotalPrice() {
  return useContext(TotalPriceContext);
}

export function useTotalPriceDispatch() {
  return useContext(TotalPriceDispatchContext);
}
