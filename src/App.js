import React from 'react';
import {GlobalStyles} from './styles/globalStyles'

import Header from "./components/Header"
import WeatherCard from "./components/WeatherCard"

function App() {
  

  return (
  	<>
	    <div className="App">
	      <Header />
	      <WeatherCard/>
	    </div>

	    
	    <GlobalStyles/>
	</>  
  );
}

export default App;
