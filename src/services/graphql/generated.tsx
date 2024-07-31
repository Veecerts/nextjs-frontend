import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Upload: { input: any; output: any; }
};

export type FileInput = {
  creatorAddress: Scalars['String']['input'];
  description: Scalars['String']['input'];
  file: Scalars['Upload']['input'];
  nftImage: Scalars['Upload']['input'];
  public: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
};

export type FileType = {
  __typename?: 'FileType';
  creator: Scalars['String']['output'];
  description: Scalars['String']['output'];
  fileIpfsHash: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  nftIpfsHash: Scalars['String']['output'];
  public?: Maybe<Scalars['Boolean']['output']>;
  title: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  uploadFile: FileType;
};


export type MutationUploadFileArgs = {
  input: FileInput;
};

export type Query = {
  __typename?: 'Query';
  file: FileType;
  files: Array<FileType>;
  version: Scalars['String']['output'];
};


export type QueryFileArgs = {
  id: Scalars['Int']['input'];
};

export type FileUploadMutationVariables = Exact<{
  input: FileInput;
}>;


export type FileUploadMutation = { __typename?: 'Mutation', uploadFile: { __typename?: 'FileType', id: number, title: string, nftIpfsHash: string, fileIpfsHash: string } };

export type FilesQueryVariables = Exact<{ [key: string]: never; }>;


export type FilesQuery = { __typename?: 'Query', files: Array<{ __typename?: 'FileType', creator: string, description: string, fileIpfsHash: string, id: number, nftIpfsHash: string, public?: boolean | null, title: string }> };

export type FileQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type FileQuery = { __typename?: 'Query', file: { __typename?: 'FileType', creator: string, description: string, fileIpfsHash: string, id: number, nftIpfsHash: string, public?: boolean | null, title: string } };


export const FileUploadDocument = gql`
    mutation FileUpload($input: FileInput!) {
  uploadFile(input: $input) {
    id
    title
    nftIpfsHash
    fileIpfsHash
  }
}
    `;

export function useFileUploadMutation() {
  return Urql.useMutation<FileUploadMutation, FileUploadMutationVariables>(FileUploadDocument);
};
export const FilesDocument = gql`
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

export function useFilesQuery(options?: Omit<Urql.UseQueryArgs<FilesQueryVariables>, 'query'>) {
  return Urql.useQuery<FilesQuery, FilesQueryVariables>({ query: FilesDocument, ...options });
};
export const FileDocument = gql`
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

export function useFileQuery(options: Omit<Urql.UseQueryArgs<FileQueryVariables>, 'query'>) {
  return Urql.useQuery<FileQuery, FileQueryVariables>({ query: FileDocument, ...options });
};