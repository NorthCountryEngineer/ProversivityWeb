/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateRealEstateProperty = /* GraphQL */ `
  subscription OnCreateRealEstateProperty(
    $filter: ModelSubscriptionRealEstatePropertyFilterInput
  ) {
    onCreateRealEstateProperty(filter: $filter) {
      id
      name
      address
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateRealEstateProperty = /* GraphQL */ `
  subscription OnUpdateRealEstateProperty(
    $filter: ModelSubscriptionRealEstatePropertyFilterInput
  ) {
    onUpdateRealEstateProperty(filter: $filter) {
      id
      name
      address
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteRealEstateProperty = /* GraphQL */ `
  subscription OnDeleteRealEstateProperty(
    $filter: ModelSubscriptionRealEstatePropertyFilterInput
  ) {
    onDeleteRealEstateProperty(filter: $filter) {
      id
      name
      address
      createdAt
      updatedAt
      __typename
    }
  }
`;
