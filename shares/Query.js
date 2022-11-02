import { gql } from "@apollo/client";

export const GET_DIARYS = gql`
  query {
    fetchBoards {
      number
      title
      contents
      createdAt
      writer
    }
  }
`;

export const GET_DIARY = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      title
      contents
      createdAt
    }
  }
`;

export const BGM = [
  {
    id: 1,
    name: "같은베개",
    singger: "테이",
    url: "https://youtu.be/RF_PZ2pf2Fs",
  },
  {
    id: 2,
    name: "체념",
    singger: "빅마마",
    url: "https://youtu.be/XqWQzZESCYw",
  },
  {
    id: 3,
    name: "발걸음",
    singger: "에메랄드 캐슬",
    url: "https://youtu.be/L9jftIhRB-Y",
  },
  {
    id: 4,
    name: "해바라기",
    singger: "가비엔제이",
    url: "https://youtu.be/xpHJnmp3Lyw",
  },
  {
    id: 5,
    name: "내사람",
    singger: "SG 워너비",
    url: "https://youtu.be/swM_GL06CxM",
  },
  {
    id: 6,
    name: "너에게 쓰는 편지",
    singger: "MC몽",
    url: "https://youtu.be/nhuFm3BGIBY",
  },
  {
    id: 7,
    name: "죽일놈",
    singger: "다이나믹 듀오",
    url: "https://youtu.be/CqBAVQOkui0",
  },
  {
    id: 8,
    name: "넌 감동이었어",
    singger: "성시경",
    url: "https://youtu.be/JG8DufK1xP0",
  },
  {
    id: 9,
    name: "사랑의 바보",
    singger: "더 넛츠",
    url: "https://youtu.be/bJxcFpSVZQY",
  },
  {
    id: 10,
    name: "미친 사랑의 노래",
    singger: "씨야",
    url: "https://youtu.be/_MythyZ0w3s",
  },
];
