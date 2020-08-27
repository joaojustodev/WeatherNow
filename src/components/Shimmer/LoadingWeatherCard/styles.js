import styled from "styled-components";
import { CardBody } from "../../WeatherCard/styles";

export const Container = styled(CardBody)`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  div + div {
    margin-top: 15px;
  }

  div.country {
    width: 100%;
    height: 40px;
  }

  div.temp {
    width: 50%;
    height: 20px;
  }

  div.conditionImg {
    width: 80%;
    height: 40px;
  }

  div.conditionText {
    width: 50%;
    height: 20px;
  }

  div.weekDay {
    width: 40%;
    height: 20px;
  }

  div.date {
    width: 60%;
    height: 20px;
  }
`;
