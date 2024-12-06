import React from "react";

import * as S from "./Projects.style";

import ContactButton from "../../../components/ContactButton/ContactButton";

export default function Projects() {
  return (
    <S.Container>
      <h1>Projetos</h1>

      <S.PhotoLink to="/projetos/1">
        <S.PhotoBox>
          <img src="coverImages/fundo-terracota.png" alt="" />
          <span>Nome do Projeto</span>
        </S.PhotoBox>
      </S.PhotoLink>

      <ContactButton src="whatsapp-icon.png" />
    </S.Container>
  );
}
