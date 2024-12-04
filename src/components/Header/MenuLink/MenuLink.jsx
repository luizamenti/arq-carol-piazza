import React from "react";
import { Link } from "react-router-dom";

import * as S from "./MenuLink.style";

export default function MenuLink({ item }) {
  // const [open, setOpen] = useState(false);

  const pathname = window.location.pathname;
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");
  const mainPathSegment = pathSegments[0] || "";

  function isActiveMenu() {
    const itemRouteWithoutSlash = item.route.substring(1);
    return mainPathSegment === itemRouteWithoutSlash ? true : false;
  }

  return (
    <S.Container active={isActiveMenu()}>
      <Link className="nav-link active" to={item.route}>
        <p>{item.menuName}</p>
      </Link>
    </S.Container>
  );
}
