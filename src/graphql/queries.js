/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserPreferences = /* GraphQL */ `
  query GetUserPreferences($id: ID!) {
    getUserPreferences(id: $id) {
      id
      User
      DisplayName
      DarkMode
      createdAt
      updatedAt
    }
  }
`;
export const listUserPreferences = /* GraphQL */ `
  query ListUserPreferences(
    $filter: ModelUserPreferencesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserPreferences(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        User
        DisplayName
        DarkMode
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
