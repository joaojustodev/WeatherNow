import styled from "styled-components";
import { colors } from "../../utils/variables";

export const Container = styled.section`
  width: 100%;
  max-width: 600px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const Input = styled.input`
  width: 220px;
  height: 50px;
  font-size: 22px;
  background: transparent;
  color: white;
  border: none;
  border-bottom: 1px solid grey;
  margin-left: 10px;
`;

export const Button = styled.button`
  width: 90px;
  height: 40px;
  border: none;
  border-radius: 5px;
  background: ${colors.coralRed};
  color: ${colors.white};
  paddding: 15px;
  font-size: 18px;
  cursor: pointer;
  margin-left: 20px;

  &:hover {
    opacity: 0.8;
  }
`;

export const WeatherCard = styled.div`
  width: 100%;
  height: 350px;
  padding: 10px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardBody = styled.article`
  width: 100%;
  max-width: 260px;
  padding: 10px;
  margin: 10px;
  background: white;
  border-radius: 5px;
  box-shadow: 10px 10px 0px rgba(255, 255, 255, 0.5);
  text-align: center;
`;

export const CardTitle = styled.div`
  padding: 5px 5px;
  margin: 5px, 5px, 5px, 5px;

  h1 {
    color: ${colors.blueZodiac};
    font-size: 36px;
  }

  span {
    font-size: 30px;
    color: ${colors.coralRed};
  }
`;

export const CardContent = styled.div`
  padding: 5px 5px;
  margin: 5px, 5px, 5px, 5px;

  h1 {
    color: ${colors.blueZodiac};
    font-size: 28px;
  }

  p {
    color: ${colors.coralRed};
    font-size: 22px;
  }
`;

export const ErrorMessage = styled.h1`
  color: ${colors.coralRed};
`;
