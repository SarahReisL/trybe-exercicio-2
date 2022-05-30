import { createStore } from 'redux';
const Redux = require('redux');

// actionCreator : func que enviará uma action ao nosso reducer
const fazerLogin = (email) => ({
  type: "LOGIN",
  email
});
// meu state
const ESTADO_INICIAL = {
  login: false, 
  email: '',
};

const reducer = (state= ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,//um objeto que contém todos os dados atuais do estado, mas que será modificada pela action
        login: !state.login,
        email: action.email,
      };
    default: // No switch, sempre precisamos ter um caso default
    return state;
  }
};
// verificando output no console.log

const store = Redux.createStore(reducer);
// mudou o estado da store utilizando o dispatch
// despacha nossa action para dentro do reducer
store.dispatch(fazerLogin("dds@email.com"));

console.log(store.setState());
// { login: true, email: 'alguem@email.com' }
