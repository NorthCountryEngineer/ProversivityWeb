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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
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
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
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
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createRelationship = /* GraphQL */ `
  mutation CreateRelationship(
    $input: CreateRelationshipInput!
    $condition: ModelRelationshipConditionInput
  ) {
    createRelationship(input: $input, condition: $condition) {
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
export const updateRelationship = /* GraphQL */ `
  mutation UpdateRelationship(
    $input: UpdateRelationshipInput!
    $condition: ModelRelationshipConditionInput
  ) {
    updateRelationship(input: $input, condition: $condition) {
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
export const deleteRelationship = /* GraphQL */ `
  mutation DeleteRelationship(
    $input: DeleteRelationshipInput!
    $condition: ModelRelationshipConditionInput
  ) {
    deleteRelationship(input: $input, condition: $condition) {
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
export const createMeeting = /* GraphQL */ `
  mutation CreateMeeting(
    $input: CreateMeetingInput!
    $condition: ModelMeetingConditionInput
  ) {
    createMeeting(input: $input, condition: $condition) {
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
export const updateMeeting = /* GraphQL */ `
  mutation UpdateMeeting(
    $input: UpdateMeetingInput!
    $condition: ModelMeetingConditionInput
  ) {
    updateMeeting(input: $input, condition: $condition) {
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
export const deleteMeeting = /* GraphQL */ `
  mutation DeleteMeeting(
    $input: DeleteMeetingInput!
    $condition: ModelMeetingConditionInput
  ) {
    deleteMeeting(input: $input, condition: $condition) {
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
export const createUserOrganizations = /* GraphQL */ `
  mutation CreateUserOrganizations(
    $input: CreateUserOrganizationsInput!
    $condition: ModelUserOrganizationsConditionInput
  ) {
    createUserOrganizations(input: $input, condition: $condition) {
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
export const updateUserOrganizations = /* GraphQL */ `
  mutation UpdateUserOrganizations(
    $input: UpdateUserOrganizationsInput!
    $condition: ModelUserOrganizationsConditionInput
  ) {
    updateUserOrganizations(input: $input, condition: $condition) {
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
export const deleteUserOrganizations = /* GraphQL */ `
  mutation DeleteUserOrganizations(
    $input: DeleteUserOrganizationsInput!
    $condition: ModelUserOrganizationsConditionInput
  ) {
    deleteUserOrganizations(input: $input, condition: $condition) {
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
