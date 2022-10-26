import React from "react";
import { Line, Feeling, Infobox, ProfileWrap } from "./styles";

const Profile = () => {
  return (
    <ProfileWrap>
      <img src="/images/cyworldProfile 1.svg" alt="프로필 사진" />
      <Line />
      <Infobox>
        <li>
          <img src="/images/icon_name.svg" alt="아이콘" />
          <p>이름</p>
        </li>
        <li>
          <img src="/images/icon_call.svg" alt="아이콘" />
          <p>Phone</p>
        </li>
        <li>
          <img src="/images/icon_mail.svg" alt="아이콘" />
          <p>E-mail</p>
        </li>
        <li>
          <img src="/images/icon_star.svg" alt="아이콘" />
          <p>인스타그램</p>
        </li>
      </Infobox>
      <Feeling>
        <p>오늘의 기분</p>
        <select name="feeling" id="feeling">
          <option value="good">기쁨 😆</option>
          <option value="bed">우울 😢</option>
          <option value="sleepy">졸림 😴</option>
        </select>
      </Feeling>
    </ProfileWrap>
  );
};

export default Profile;
