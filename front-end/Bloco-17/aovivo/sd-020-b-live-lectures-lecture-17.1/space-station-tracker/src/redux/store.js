// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer';

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk)),
// );

// export default store;

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
export default store;

// QUANDO VC SABE O QUER...
// VC ESTÁ A 1 GOOLGE DE DISTANCIA DA SOLUÇÂO

// QUANDO VC NAO SABE O QUE QUER
// VC ESTÁ A ... NEM SEI QUANTOS GOOGLES DE DISTANCIA
