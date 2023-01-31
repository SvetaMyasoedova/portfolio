import React from 'react';
import Header from './components/header/Header';
import appStyles from './app.module.css'


function App() {
  return (
    <div className={appStyles.main}>
      <Header/>
    </div>
  );
}

export default App;
