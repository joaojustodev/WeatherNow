import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { GlobalStyles } from "./styles/globalStyles";

import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <WeatherCard />
      </div>

      <GlobalStyles />
    </Provider>
  );
}

export default App;
