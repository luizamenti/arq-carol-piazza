import React from "react";

import * as S from "./Footer.style";

export default function Footer() {
  return (
    <S.Container>
      <S.Logo src="footer-logo.png" />

      <div>
        <p>Aqui vão as informações de contato</p>
      </div>

      <div>
        <p>Aqui vai um botão de contato</p>
      </div>
    </S.Container>
  );
}
