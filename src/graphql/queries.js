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
      dateJoined
      meetingsAsManager {
        items {
          id
          managerID
          employeeID
          scheduledTime
          duration
          locationLink
          status
          createdAt
          updatedAt
          userMeetingsAsManagerId
          userMeetingsAsEmployeeId
          meetingManagerId
          meetingEmployeeId
          __typename
        }
        nextToken
        __typename
      }
      meetingsAsEmployee {
        items {
          id
          managerID
          employeeID
          scheduledTime
          duration
          locationLink
          status
          createdAt
          updatedAt
          userMeetingsAsManagerId
          userMeetingsAsEmployeeId
          meetingManagerId
          meetingEmployeeId
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
        dateJoined
        meetingsAsManager {
          nextToken
          __typename
        }
        meetingsAsEmployee {
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
export const getMeeting = /* GraphQL */ `
  query GetMeeting($id: ID!) {
    getMeeting(id: $id) {
      id
      managerID
      manager {
        id
        firstName
        lastName
        email
        role
        dateJoined
        meetingsAsManager {
          nextToken
          __typename
        }
        meetingsAsEmployee {
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
        dateJoined
        meetingsAsManager {
          nextToken
          __typename
        }
        meetingsAsEmployee {
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
      userMeetingsAsManagerId
      userMeetingsAsEmployeeId
      meetingManagerId
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
        managerID
        manager {
          id
          firstName
          lastName
          email
          role
          dateJoined
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
          dateJoined
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
        userMeetingsAsManagerId
        userMeetingsAsEmployeeId
        meetingManagerId
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
        managerID
        manager {
          id
          firstName
          lastName
          email
          role
          dateJoined
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
          dateJoined
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
        userMeetingsAsManagerId
        userMeetingsAsEmployeeId
        meetingManagerId
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
          managerID
          employeeID
          scheduledTime
          duration
          locationLink
          status
          createdAt
          updatedAt
          userMeetingsAsManagerId
          userMeetingsAsEmployeeId
          meetingManagerId
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
        managerID
        manager {
          id
          firstName
          lastName
          email
          role
          dateJoined
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
          dateJoined
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
        userMeetingsAsManagerId
        userMeetingsAsEmployeeId
        meetingManagerId
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
        dateJoined
        meetingsAsManager {
          nextToken
          __typename
        }
        meetingsAsEmployee {
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
          managerID
          employeeID
          scheduledTime
          duration
          locationLink
          status
          createdAt
          updatedAt
          userMeetingsAsManagerId
          userMeetingsAsEmployeeId
          meetingManagerId
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
          dateJoined
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
        managerID
        manager {
          id
          firstName
          lastName
          email
          role
          dateJoined
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
          dateJoined
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
        userMeetingsAsManagerId
        userMeetingsAsEmployeeId
        meetingManagerId
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
        dateJoined
        meetingsAsManager {
          nextToken
          __typename
        }
        meetingsAsEmployee {
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
          managerID
          employeeID
          scheduledTime
          duration
          locationLink
          status
          createdAt
          updatedAt
          userMeetingsAsManagerId
          userMeetingsAsEmployeeId
          meetingManagerId
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
          dateJoined
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
