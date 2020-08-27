import React from "react";

import Logo from "../../assets/logo.png";
import * as S from "./styles.js";

const Header = () => {
  return (
    <S.Container>
      <S.Header>
        <img src={Logo} alt="logo" />
      </S.Header>
    </S.Container>
  );
};

export default Header;
