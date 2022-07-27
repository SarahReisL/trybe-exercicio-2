import React from 'react';
import './App.css';
import Header from './components/Header';
import ISSLocation from './components/ISSLocation';
import ISSContext from './context/ISSLocation';

function App() {
  return (
    <div className="App">
     <ISSLocation.consumer>
       {(contextState) => (
         <p> {JSON.stringfy(contextState) } </p>
       )}
    </ISSLocation.consumer>
      <Header />
      <ISSLocation />
    </div>
  );
}

export default App;
