import React from "react";

import * as S from "./ContactButton.style";

import { ReactComponent as Whats } from "./whatsapp-svg.svg";

export default function ContactButton() {
  return (
    <a href="https://wa.me/5551981762251" target="_blank" rel="noreferrer">
      <S.Button>
        <S.Label>Vamos falar sobre o seu projeto?</S.Label>
        <Whats />
      </S.Button>
    </a>
  );
}
