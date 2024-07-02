import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

const addToCart = createAction('ADD_TO_CART');
// reducer
const cartReducer = createReducer([], builder => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const login = createAction('CREATE_SESSION');

const loginReducer = createReducer({ status: false }, builder => {
  builder.addCase(login, (state, action) => {
    state.status = true;
  });
});
// store
const store = configureStore({
  reducer: {
    cart: cartReducer,
    login: loginReducer,
  },
});
console.log('oncreate store :', store.getState());
// subscribe
store.subscribe(() => {
  console.log('CHANGE STORE :', store.getState());
});

// dispatch
store.dispatch(addToCart({ id: 1, qty: 20 }));
store.dispatch(login());
