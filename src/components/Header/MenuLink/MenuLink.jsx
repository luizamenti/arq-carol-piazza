import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import * as S from "./MenuLink.style";

export default function MenuLink({ item }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const pathname = window.location.pathname;
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");
  const mainPathSegment = pathSegments[0] || "";

  function isActiveMenu() {
    const itemRouteWithoutSlash = item.route.substring(1);
    return mainPathSegment === itemRouteWithoutSlash ? true : false;
  }

  return (
    <S.Container active={isActiveMenu()}>
      <S.Link>
        <a
          className="nav-link active"
          aria-current="page"
          href="#"
          onClick={() => {
            if (item.pages) setOpen(!open);
            else navigate(item.route);
          }}
        >
          <p>{item.menuName}</p>
        </a>
      </S.Link>
    </S.Container>
  );
}
