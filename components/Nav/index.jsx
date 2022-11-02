import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { NavAlink, NavWrap } from "./styles";

const Nav = () => {
  const router = useRouter();
  return (
    <NavWrap>
      <li>
        <Link href="/">
          <NavAlink tab={router.pathname === "/"}>홈</NavAlink>
        </Link>
      </li>
      <li>
        <Link href="/game">
          <NavAlink tab={router.pathname === "/game"}>게임</NavAlink>
        </Link>
      </li>
      <li>
        <Link href="/diary">
          <NavAlink tab={router.pathname.includes("/diary")}>다이어리</NavAlink>
        </Link>
      </li>
    </NavWrap>
  );
};

export default Nav;
