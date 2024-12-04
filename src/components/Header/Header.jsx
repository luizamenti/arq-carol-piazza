import React from "react";

import * as S from "./Header.style";
import MenuLink from "./MenuLink/MenuLink";

export default function Header() {
  const menuList = [
    {
      menuName: "Home",
      route: "/",
    },
    {
      menuName: "Equipe",
      route: "/equipe",
    },
    {
      menuName: "Projetos",
      route: "/projetos",
    },
  ];
  return (
    <S.Container className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <S.LogoLink className="navbar-brand" to="/">
          <S.Logo src="header-logo.png" />
        </S.LogoLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <S.LinksMenu className="collapse navbar-collapse" id="navbarNav">
          <S.MenuList className="navbar-nav">
            {menuList.map((menu) => (
              <MenuLink item={menu} key={menu.menuName} />
            ))}
          </S.MenuList>
        </S.LinksMenu>
        <S.BotaoWhats>
          <p>botao whats</p>
        </S.BotaoWhats>
      </div>
    </S.Container>
  );
}
