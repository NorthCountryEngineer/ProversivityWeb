/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      email
      role
      meetingsAsRequestor {
        items {
          id
          requestorID
          employeeID
          scheduledTime
          duration
          locationLink
          status
          createdAt
          updatedAt
          userMeetingsAsRequestorId
          userMeetingsAsEmployeeId
          meetingRequestorId
          meetingEmployeeId
          __typename
        }
        nextToken
        __typename
      }
      meetingsAsEmployee {
        items {
          id
          requestorID
          employeeID
          scheduledTime
          duration
          locationLink
          status
          createdAt
          updatedAt
          userMeetingsAsRequestorId
          userMeetingsAsEmployeeId
          meetingRequestorId
          meetingEmployeeId
          __typename
        }
        nextToken
        __typename
      }
      organizations {
        items {
          id
          userId
          organizationId
          role
          createdAt
          updatedAt
          userOrganizationsId
          organizationUsersId
          userOrganizationUserId
          userOrganizationOrganizationId
          __typename
        }
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
        lastName
        email
        role
        meetingsAsRequestor {
          nextToken
          __typename
        }
        meetingsAsEmployee {
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
        items {
          id
          userId
          organizationId
          role
          createdAt
          updatedAt
          userOrganizationsId
          organizationUsersId
          userOrganizationUserId
          userOrganizationOrganizationId
          __typename
        }
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
        users {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserOrganization = /* GraphQL */ `
  query GetUserOrganization($id: ID!) {
    getUserOrganization(id: $id) {
      id
      userId
      user {
        id
        firstName
        lastName
        email
        role
        meetingsAsRequestor {
          nextToken
          __typename
        }
        meetingsAsEmployee {
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
      organizationId
      organization {
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
      role
      createdAt
      updatedAt
      userOrganizationsId
      organizationUsersId
      userOrganizationUserId
      userOrganizationOrganizationId
      __typename
    }
  }
`;
export const listUserOrganizations = /* GraphQL */ `
  query ListUserOrganizations(
    $filter: ModelUserOrganizationFilterInput
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
        user {
          id
          firstName
          lastName
          email
          role
          createdAt
          updatedAt
          __typename
        }
        organizationId
        organization {
          id
          name
          description
          createdAt
          updatedAt
          __typename
        }
        role
        createdAt
        updatedAt
        userOrganizationsId
        organizationUsersId
        userOrganizationUserId
        userOrganizationOrganizationId
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
      requestorID
      requestor {
        id
        firstName
        lastName
        email
        role
        meetingsAsRequestor {
          nextToken
          __typename
        }
        meetingsAsEmployee {
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
      employeeID
      employee {
        id
        firstName
        lastName
        email
        role
        meetingsAsRequestor {
          nextToken
          __typename
        }
        meetingsAsEmployee {
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
      scheduledTime
      duration
      locationLink
      status
      agendaItems {
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
      actionItems {
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
      notes {
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
      createdAt
      updatedAt
      userMeetingsAsRequestorId
      userMeetingsAsEmployeeId
      meetingRequestorId
      meetingEmployeeId
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
        requestorID
        requestor {
          id
          firstName
          lastName
          email
          role
          createdAt
          updatedAt
          __typename
        }
        employeeID
        employee {
          id
          firstName
          lastName
          email
          role
          createdAt
          updatedAt
          __typename
        }
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
        userMeetingsAsRequestorId
        userMeetingsAsEmployeeId
        meetingRequestorId
        meetingEmployeeId
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
        requestorID
        requestor {
          id
          firstName
          lastName
          email
          role
          createdAt
          updatedAt
          __typename
        }
        employeeID
        employee {
          id
          firstName
          lastName
          email
          role
          createdAt
          updatedAt
          __typename
        }
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
        userMeetingsAsRequestorId
        userMeetingsAsEmployeeId
        meetingRequestorId
        meetingEmployeeId
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
        meeting {
          id
          requestorID
          employeeID
          scheduledTime
          duration
          locationLink
          status
          createdAt
          updatedAt
          userMeetingsAsRequestorId
          userMeetingsAsEmployeeId
          meetingRequestorId
          meetingEmployeeId
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
        requestorID
        requestor {
          id
          firstName
          lastName
          email
          role
          createdAt
          updatedAt
          __typename
        }
        employeeID
        employee {
          id
          firstName
          lastName
          email
          role
          createdAt
          updatedAt
          __typename
        }
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
        userMeetingsAsRequestorId
        userMeetingsAsEmployeeId
        meetingRequestorId
        meetingEmployeeId
        __typename
      }
      assignedToUserID
      assignedToUser {
        id
        firstName
        lastName
        email
        role
        meetingsAsRequestor {
          nextToken
          __typename
        }
        meetingsAsEmployee {
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
        meeting {
          id
          requestorID
          employeeID
          scheduledTime
          duration
          locationLink
          status
          createdAt
          updatedAt
          userMeetingsAsRequestorId
          userMeetingsAsEmployeeId
          meetingRequestorId
          meetingEmployeeId
          __typename
        }
        assignedToUserID
        assignedToUser {
          id
          firstName
          lastName
          email
          role
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
        requestorID
        requestor {
          id
          firstName
          lastName
          email
          role
          createdAt
          updatedAt
          __typename
        }
        employeeID
        employee {
          id
          firstName
          lastName
          email
          role
          createdAt
          updatedAt
          __typename
        }
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
        userMeetingsAsRequestorId
        userMeetingsAsEmployeeId
        meetingRequestorId
        meetingEmployeeId
        __typename
      }
      userID
      user {
        id
        firstName
        lastName
        email
        role
        meetingsAsRequestor {
          nextToken
          __typename
        }
        meetingsAsEmployee {
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
        meeting {
          id
          requestorID
          employeeID
          scheduledTime
          duration
          locationLink
          status
          createdAt
          updatedAt
          userMeetingsAsRequestorId
          userMeetingsAsEmployeeId
          meetingRequestorId
          meetingEmployeeId
          __typename
        }
        userID
        user {
          id
          firstName
          lastName
          email
          role
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
      nextToken
      __typename
    }
  }
`;
