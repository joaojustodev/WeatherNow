import React, { useState } from "react";
import { connect } from "react-redux";
import { searchForWeather } from "../../store/ducks/weather";

import WeatherConditionImg from "../WeatherConditionImg";
import LoadingWeatherCard from "../Shimmer/LoadingWeatherCard";
import Data from "../Date";
import * as S from "./styles";

const WeatherCard = ({ props, dispatch }) => {
  const { loading, data, failure } = props.weatherReducer;
  const [query, setQuery] = useState();

  function handleChange(e) {
    setQuery(e.target.value.toLowerCase());
  }

  async function handleClick() {
    await searchForWeather(dispatch, query);
  }

  return (
    <>
      <S.Container>
        <S.Input placeholder="Nome da sua cidade" onChange={handleChange} />
        <S.Button type="button" onClick={handleClick}>
          Buscar
        </S.Button>
      </S.Container>
      <S.WeatherCard>
        {failure ? (
          <S.ErrorMessage>Cidade não encontrada!</S.ErrorMessage>
        ) : loading ? (
          <LoadingWeatherCard />
        ) : (
          data &&
          data.map((item) => (
            <S.CardBody key={item.name}>
              <S.CardTitle>
                <h1>
                  {item.name},{item.country}
                </h1>
                <span>{Math.floor(item.temp)}º</span>
              </S.CardTitle>

              <S.CardContent>
                <WeatherConditionImg condition={item.main} />
                <h1>{item.description}</h1>
                <p>{Data(new Date())}</p>
              </S.CardContent>
            </S.CardBody>
          ))
        )}
      </S.WeatherCard>
    </>
  );
};

export const mapStateToProps = (state) => ({
  props: state,
});

export default connect(mapStateToProps)(WeatherCard);
