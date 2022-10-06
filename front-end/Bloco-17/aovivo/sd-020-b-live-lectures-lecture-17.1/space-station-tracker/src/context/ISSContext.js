import { createContext } from 'react';

//cont INITIAL_STATE = {};
const ISSContext = createContext();
export default ISSContext;

//ACTION obj { type }

//React.Context obj { Provider, COnsumer }
//ISSContext.Provider e ISSContext.Consumer

//armazenamento, disponibilização, leitura e escrita

// disponibiliza;cão => Provider
// leitura = Consumer

// escrita = ?

// redux usa Provider do REact-Redux

// O rusultado de um createContext será um obj
