import React from "react";
import { Title, TitleWrap, Today } from "./styles";

const Header = () => {
  return (
    <TitleWrap>
      <Today>
        <li>
          Today<p className="today">0</p>
        </li>
        <li>
          Total<p>12345</p>
        </li>
      </Today>
      <Title>
        <h5>사이좋은 사람들, 싸이월드</h5>
        <p>사생활보호설정</p>
      </Title>
    </TitleWrap>
  );
};

export default Header;
