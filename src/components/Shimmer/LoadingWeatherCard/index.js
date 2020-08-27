import React from "react";

import Skeleton from "../../Skeleton";
import { Container } from "./styles";

const LoadingWeatherCard = () => {
  return (
    <Container>
      <Skeleton className="country" />
      <Skeleton className="temp" />
      <Skeleton className="conditionImg" />
      <Skeleton className="conditionText" />
      <Skeleton className="weekDay" />
      <Skeleton className="date" />
    </Container>
  );
};

export default LoadingWeatherCard;
