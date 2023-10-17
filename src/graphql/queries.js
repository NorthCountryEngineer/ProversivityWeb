/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      email
      relationships {
        nextToken
        __typename
      }
      organizations {
        nextToken
        __typename
      }
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
        firstName
        email
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOrganization = /* GraphQL */ `
  query GetOrganization($id: ID!) {
    getOrganization(id: $id) {
      id
      name
      description
      users {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listOrganizations = /* GraphQL */ `
  query ListOrganizations(
    $filter: ModelOrganizationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getRelationship = /* GraphQL */ `
  query GetRelationship($id: ID!) {
    getRelationship(id: $id) {
      id
      name
      description
      requestor {
        id
        firstName
        email
        createdAt
        updatedAt
        __typename
      }
      employee {
        id
        firstName
        email
        createdAt
        updatedAt
        __typename
      }
      meetings {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userRelationshipsId
      relationshipRequestorId
      relationshipEmployeeId
      __typename
    }
  }
`;
export const listRelationships = /* GraphQL */ `
  query ListRelationships(
    $filter: ModelRelationshipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRelationships(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        userRelationshipsId
        relationshipRequestorId
        relationshipEmployeeId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMeeting = /* GraphQL */ `
  query GetMeeting($id: ID!) {
    getMeeting(id: $id) {
      id
      scheduledTime
      duration
      locationLink
      status
      agendaItems {
        nextToken
        __typename
      }
      actionItems {
        nextToken
        __typename
      }
      notes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      relationshipMeetingsId
      __typename
    }
  }
`;
export const listMeetings = /* GraphQL */ `
  query ListMeetings(
    $filter: ModelMeetingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMeetings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        scheduledTime
        duration
        locationLink
        status
        createdAt
        updatedAt
        relationshipMeetingsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAgendaItem = /* GraphQL */ `
  query GetAgendaItem($id: ID!) {
    getAgendaItem(id: $id) {
      id
      meetingID
      meeting {
        id
        scheduledTime
        duration
        locationLink
        status
        createdAt
        updatedAt
        relationshipMeetingsId
        __typename
      }
      title
      description
      duration
      order
      status
      createdAt
      updatedAt
      meetingAgendaItemsId
      agendaItemMeetingId
      __typename
    }
  }
`;
export const listAgendaItems = /* GraphQL */ `
  query ListAgendaItems(
    $filter: ModelAgendaItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAgendaItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        meetingID
        title
        description
        duration
        order
        status
        createdAt
        updatedAt
        meetingAgendaItemsId
        agendaItemMeetingId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getActionItem = /* GraphQL */ `
  query GetActionItem($id: ID!) {
    getActionItem(id: $id) {
      id
      meetingID
      meeting {
        id
        scheduledTime
        duration
        locationLink
        status
        createdAt
        updatedAt
        relationshipMeetingsId
        __typename
      }
      assignedToUserID
      assignedToUser {
        id
        firstName
        email
        createdAt
        updatedAt
        __typename
      }
      description
      dueDate
      status
      createdAt
      updatedAt
      meetingActionItemsId
      actionItemMeetingId
      actionItemAssignedToUserId
      __typename
    }
  }
`;
export const listActionItems = /* GraphQL */ `
  query ListActionItems(
    $filter: ModelActionItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActionItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        meetingID
        assignedToUserID
        description
        dueDate
        status
        createdAt
        updatedAt
        meetingActionItemsId
        actionItemMeetingId
        actionItemAssignedToUserId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      meetingID
      meeting {
        id
        scheduledTime
        duration
        locationLink
        status
        createdAt
        updatedAt
        relationshipMeetingsId
        __typename
      }
      userID
      user {
        id
        firstName
        email
        createdAt
        updatedAt
        __typename
      }
      content
      timestamp
      createdAt
      updatedAt
      meetingNotesId
      noteMeetingId
      noteUserId
      __typename
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        meetingID
        userID
        content
        timestamp
        createdAt
        updatedAt
        meetingNotesId
        noteMeetingId
        noteUserId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserOrganizations = /* GraphQL */ `
  query GetUserOrganizations($id: ID!) {
    getUserOrganizations(id: $id) {
      id
      userId
      organizationId
      user {
        id
        firstName
        email
        createdAt
        updatedAt
        __typename
      }
      organization {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUserOrganizations = /* GraphQL */ `
  query ListUserOrganizations(
    $filter: ModelUserOrganizationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserOrganizations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        organizationId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const userOrganizationsByUserId = /* GraphQL */ `
  query UserOrganizationsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserOrganizationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userOrganizationsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        organizationId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const userOrganizationsByOrganizationId = /* GraphQL */ `
  query UserOrganizationsByOrganizationId(
    $organizationId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserOrganizationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userOrganizationsByOrganizationId(
      organizationId: $organizationId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        organizationId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
