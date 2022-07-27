import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import ISSContext from './context/ISSContext'

const INITIAL_STATE = {
  name: "Context_API",
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <ISSContext.Provider value={INITIAL_STATE}> 
      {/* //aqui porvemos o Provider para nossa aplicação */}
        <App />
      </ISSContext.Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

//which git-pra saber onde o git esta instalado no computador
//
