/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      firstName
      lastName
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        firstName
        lastName
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getRealEstateProperty = /* GraphQL */ `
  query GetRealEstateProperty($id: ID!) {
    getRealEstateProperty(id: $id) {
      id
      name
      address
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listRealEstateProperties = /* GraphQL */ `
  query ListRealEstateProperties(
    $filter: ModelRealEstatePropertyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRealEstateProperties(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        address
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
