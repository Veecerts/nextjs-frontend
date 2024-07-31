import { gql } from "urql";

export const FILES = gql`
  query Files {
    files {
      creator
      description
      fileIpfsHash
      id
      nftIpfsHash
      public
      title
    }
  }
`;

export const FILE = gql`
  query File($id: Int!) {
    file(id: $id) {
      creator
      description
      fileIpfsHash
      id
      nftIpfsHash
      public
      title
    }
  }
`;
