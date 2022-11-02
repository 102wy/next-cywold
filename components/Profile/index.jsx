import Image from 'next/image';
import React from "react";
import { Line, Feeling, Infobox, ProfileWrap } from "./styles";

const Profile = () => {
  return (
    <ProfileWrap>
      <Image src="/images/profile.jpg" alt="프로필 사진" width={146} height={133} />
      <Line />
      <Infobox>
        <li>
          <Image src="/images/icon_name.svg" alt="아이콘" width={12} height={13} />
          <p>먼지</p>
        </li>
        <li>
          <Image src="/images/icon_call.svg" alt="아이콘" width={12} height={13} />
          <p>Phone</p>
        </li>
        <li>
          <Image src="/images/icon_mail.svg" alt="아이콘" width={12} height={13} />
          <p>E-mail</p>
        </li>
        <li onClick={() => window.open('https://www.instagram.com/dust_pepper')}>
          <Image src="/images/icon_star.svg" alt="아이콘" width={12} height={13} />
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
