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
export const createOrganization = /* GraphQL */ `
  mutation CreateOrganization(
    $input: CreateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    createOrganization(input: $input, condition: $condition) {
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
export const updateOrganization = /* GraphQL */ `
  mutation UpdateOrganization(
    $input: UpdateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    updateOrganization(input: $input, condition: $condition) {
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
export const deleteOrganization = /* GraphQL */ `
  mutation DeleteOrganization(
    $input: DeleteOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    deleteOrganization(input: $input, condition: $condition) {
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
export const createUserOrganization = /* GraphQL */ `
  mutation CreateUserOrganization(
    $input: CreateUserOrganizationInput!
    $condition: ModelUserOrganizationConditionInput
  ) {
    createUserOrganization(input: $input, condition: $condition) {
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
export const updateUserOrganization = /* GraphQL */ `
  mutation UpdateUserOrganization(
    $input: UpdateUserOrganizationInput!
    $condition: ModelUserOrganizationConditionInput
  ) {
    updateUserOrganization(input: $input, condition: $condition) {
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
export const deleteUserOrganization = /* GraphQL */ `
  mutation DeleteUserOrganization(
    $input: DeleteUserOrganizationInput!
    $condition: ModelUserOrganizationConditionInput
  ) {
    deleteUserOrganization(input: $input, condition: $condition) {
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
export const createMeeting = /* GraphQL */ `
  mutation CreateMeeting(
    $input: CreateMeetingInput!
    $condition: ModelMeetingConditionInput
  ) {
    createMeeting(input: $input, condition: $condition) {
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
        lastName
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
export const updateMeeting = /* GraphQL */ `
  mutation UpdateMeeting(
    $input: UpdateMeetingInput!
    $condition: ModelMeetingConditionInput
  ) {
    updateMeeting(input: $input, condition: $condition) {
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
        lastName
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
export const deleteMeeting = /* GraphQL */ `
  mutation DeleteMeeting(
    $input: DeleteMeetingInput!
    $condition: ModelMeetingConditionInput
  ) {
    deleteMeeting(input: $input, condition: $condition) {
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
        lastName
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
        requestorID
        requestor {
          id
          firstName
          lastName
          email
          role
          createdAt
          updatedAt
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
        requestorID
        requestor {
          id
          firstName
          lastName
          email
          role
          createdAt
          updatedAt
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
        requestorID
        requestor {
          id
          firstName
          lastName
          email
          role
          createdAt
          updatedAt
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
        requestorID
        requestor {
          id
          firstName
          lastName
          email
          role
          createdAt
          updatedAt
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
        lastName
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
        requestorID
        requestor {
          id
          firstName
          lastName
          email
          role
          createdAt
          updatedAt
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
        lastName
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
        requestorID
        requestor {
          id
          firstName
          lastName
          email
          role
          createdAt
          updatedAt
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
        lastName
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
        requestorID
        requestor {
          id
          firstName
          lastName
          email
          role
          createdAt
          updatedAt
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
        lastName
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
        requestorID
        requestor {
          id
          firstName
          lastName
          email
          role
          createdAt
          updatedAt
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
        lastName
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
        requestorID
        requestor {
          id
          firstName
          lastName
          email
          role
          createdAt
          updatedAt
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
        lastName
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
