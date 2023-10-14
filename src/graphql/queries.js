/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
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
        }
        nextToken
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
        }
        nextToken
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
        }
        nextToken
      }
      createdAt
      updatedAt
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
        role
        meetingsAsRequestor {
          nextToken
        }
        meetingsAsEmployee {
          nextToken
        }
        organizations {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
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
        }
        nextToken
      }
      createdAt
      updatedAt
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
        }
        createdAt
        updatedAt
      }
      nextToken
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
        email
        role
        meetingsAsRequestor {
          nextToken
        }
        meetingsAsEmployee {
          nextToken
        }
        organizations {
          nextToken
        }
        createdAt
        updatedAt
      }
      organizationId
      organization {
        id
        name
        description
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      role
      createdAt
      updatedAt
      userOrganizationsId
      organizationUsersId
      userOrganizationUserId
      userOrganizationOrganizationId
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
          email
          role
          createdAt
          updatedAt
        }
        organizationId
        organization {
          id
          name
          description
          createdAt
          updatedAt
        }
        role
        createdAt
        updatedAt
        userOrganizationsId
        organizationUsersId
        userOrganizationUserId
        userOrganizationOrganizationId
      }
      nextToken
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
        email
        role
        meetingsAsRequestor {
          nextToken
        }
        meetingsAsEmployee {
          nextToken
        }
        organizations {
          nextToken
        }
        createdAt
        updatedAt
      }
      employeeID
      employee {
        id
        firstName
        email
        role
        meetingsAsRequestor {
          nextToken
        }
        meetingsAsEmployee {
          nextToken
        }
        organizations {
          nextToken
        }
        createdAt
        updatedAt
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
        }
        nextToken
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
        }
        nextToken
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
        }
        nextToken
      }
      createdAt
      updatedAt
      userMeetingsAsRequestorId
      userMeetingsAsEmployeeId
      meetingRequestorId
      meetingEmployeeId
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
          email
          role
          createdAt
          updatedAt
        }
        employeeID
        employee {
          id
          firstName
          email
          role
          createdAt
          updatedAt
        }
        scheduledTime
        duration
        locationLink
        status
        agendaItems {
          nextToken
        }
        actionItems {
          nextToken
        }
        notes {
          nextToken
        }
        createdAt
        updatedAt
        userMeetingsAsRequestorId
        userMeetingsAsEmployeeId
        meetingRequestorId
        meetingEmployeeId
      }
      nextToken
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
          email
          role
          createdAt
          updatedAt
        }
        employeeID
        employee {
          id
          firstName
          email
          role
          createdAt
          updatedAt
        }
        scheduledTime
        duration
        locationLink
        status
        agendaItems {
          nextToken
        }
        actionItems {
          nextToken
        }
        notes {
          nextToken
        }
        createdAt
        updatedAt
        userMeetingsAsRequestorId
        userMeetingsAsEmployeeId
        meetingRequestorId
        meetingEmployeeId
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
      }
      nextToken
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
          email
          role
          createdAt
          updatedAt
        }
        employeeID
        employee {
          id
          firstName
          email
          role
          createdAt
          updatedAt
        }
        scheduledTime
        duration
        locationLink
        status
        agendaItems {
          nextToken
        }
        actionItems {
          nextToken
        }
        notes {
          nextToken
        }
        createdAt
        updatedAt
        userMeetingsAsRequestorId
        userMeetingsAsEmployeeId
        meetingRequestorId
        meetingEmployeeId
      }
      assignedToUserID
      assignedToUser {
        id
        firstName
        email
        role
        meetingsAsRequestor {
          nextToken
        }
        meetingsAsEmployee {
          nextToken
        }
        organizations {
          nextToken
        }
        createdAt
        updatedAt
      }
      description
      dueDate
      status
      createdAt
      updatedAt
      meetingActionItemsId
      actionItemMeetingId
      actionItemAssignedToUserId
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
        }
        assignedToUserID
        assignedToUser {
          id
          firstName
          email
          role
          createdAt
          updatedAt
        }
        description
        dueDate
        status
        createdAt
        updatedAt
        meetingActionItemsId
        actionItemMeetingId
        actionItemAssignedToUserId
      }
      nextToken
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
          email
          role
          createdAt
          updatedAt
        }
        employeeID
        employee {
          id
          firstName
          email
          role
          createdAt
          updatedAt
        }
        scheduledTime
        duration
        locationLink
        status
        agendaItems {
          nextToken
        }
        actionItems {
          nextToken
        }
        notes {
          nextToken
        }
        createdAt
        updatedAt
        userMeetingsAsRequestorId
        userMeetingsAsEmployeeId
        meetingRequestorId
        meetingEmployeeId
      }
      userID
      user {
        id
        firstName
        email
        role
        meetingsAsRequestor {
          nextToken
        }
        meetingsAsEmployee {
          nextToken
        }
        organizations {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      timestamp
      createdAt
      updatedAt
      meetingNotesId
      noteMeetingId
      noteUserId
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
        }
        userID
        user {
          id
          firstName
          email
          role
          createdAt
          updatedAt
        }
        content
        timestamp
        createdAt
        updatedAt
        meetingNotesId
        noteMeetingId
        noteUserId
      }
      nextToken
    }
  }
`;
