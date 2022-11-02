import { gql } from "@apollo/client";

export const CREATE_DIARY = gql`
  mutation createBoard($title: String, $contents: String, $writer: String) {
    createBoard(title: $title, contents: $contents, writer: $writer) {
      number
      message
    }
  }
`;

export const UPDATE_DIARY = gql`
  mutation updateBoard(
    $number: Int
    $contents: String
    $title: String
    $writer: String
  ) {
    updateBoard(
      number: $number
      contents: $contents
      title: $title
      writer: $writer
    ) {
      number
      message
    }
  }
`;

export const DELETE_DIARY = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      number
    }
  }
`;
