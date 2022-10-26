import React from "react";
import { ProfileWrap } from "../Profile/styles";

const Contents = ({ children }) => {
  return <ProfileWrap minWidth="52.4rem">{children}</ProfileWrap>;
};

export default Contents;
