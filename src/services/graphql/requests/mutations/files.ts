import { gql } from "urql";

export const FILE_UPLOAD = gql`
  mutation FileUpload($input: FileInput!) {
    uploadFile(input: $input) {
      id
      title
      nftIpfsHash
      fileIpfsHash
    }
  }
`;
