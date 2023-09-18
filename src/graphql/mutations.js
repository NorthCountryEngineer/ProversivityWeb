/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createMeeting = /* GraphQL */ `
  mutation CreateMeeting(
    $input: CreateMeetingInput!
    $condition: ModelMeetingConditionInput
  ) {
    createMeeting(input: $input, condition: $condition) {
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
export const updateMeeting = /* GraphQL */ `
  mutation UpdateMeeting(
    $input: UpdateMeetingInput!
    $condition: ModelMeetingConditionInput
  ) {
    updateMeeting(input: $input, condition: $condition) {
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
export const deleteMeeting = /* GraphQL */ `
  mutation DeleteMeeting(
    $input: DeleteMeetingInput!
    $condition: ModelMeetingConditionInput
  ) {
    deleteMeeting(input: $input, condition: $condition) {
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
export const createAgendaItem = /* GraphQL */ `
  mutation CreateAgendaItem(
    $input: CreateAgendaItemInput!
    $condition: ModelAgendaItemConditionInput
  ) {
    createAgendaItem(input: $input, condition: $condition) {
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
export const updateAgendaItem = /* GraphQL */ `
  mutation UpdateAgendaItem(
    $input: UpdateAgendaItemInput!
    $condition: ModelAgendaItemConditionInput
  ) {
    updateAgendaItem(input: $input, condition: $condition) {
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
export const deleteAgendaItem = /* GraphQL */ `
  mutation DeleteAgendaItem(
    $input: DeleteAgendaItemInput!
    $condition: ModelAgendaItemConditionInput
  ) {
    deleteAgendaItem(input: $input, condition: $condition) {
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
export const createActionItem = /* GraphQL */ `
  mutation CreateActionItem(
    $input: CreateActionItemInput!
    $condition: ModelActionItemConditionInput
  ) {
    createActionItem(input: $input, condition: $condition) {
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
export const updateActionItem = /* GraphQL */ `
  mutation UpdateActionItem(
    $input: UpdateActionItemInput!
    $condition: ModelActionItemConditionInput
  ) {
    updateActionItem(input: $input, condition: $condition) {
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
export const deleteActionItem = /* GraphQL */ `
  mutation DeleteActionItem(
    $input: DeleteActionItemInput!
    $condition: ModelActionItemConditionInput
  ) {
    deleteActionItem(input: $input, condition: $condition) {
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
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
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
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
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
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
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
