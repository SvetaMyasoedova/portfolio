import React from 'react';
import appStyles from './app.module.css'
import Header from './components/header/Header';
import Welcome from './components/welcome/Welcome';



function App() {
  return (
    <div className={appStyles.main}>
      <Header/>
      <Welcome/>
    </div>
  );
}

export default App;
