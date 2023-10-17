/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser(
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createOrganization = /* GraphQL */ `mutation CreateOrganization(
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
` as GeneratedMutation<
  APITypes.CreateOrganizationMutationVariables,
  APITypes.CreateOrganizationMutation
>;
export const updateOrganization = /* GraphQL */ `mutation UpdateOrganization(
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
` as GeneratedMutation<
  APITypes.UpdateOrganizationMutationVariables,
  APITypes.UpdateOrganizationMutation
>;
export const deleteOrganization = /* GraphQL */ `mutation DeleteOrganization(
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
` as GeneratedMutation<
  APITypes.DeleteOrganizationMutationVariables,
  APITypes.DeleteOrganizationMutation
>;
export const createRelationship = /* GraphQL */ `mutation CreateRelationship(
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
` as GeneratedMutation<
  APITypes.CreateRelationshipMutationVariables,
  APITypes.CreateRelationshipMutation
>;
export const updateRelationship = /* GraphQL */ `mutation UpdateRelationship(
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
` as GeneratedMutation<
  APITypes.UpdateRelationshipMutationVariables,
  APITypes.UpdateRelationshipMutation
>;
export const deleteRelationship = /* GraphQL */ `mutation DeleteRelationship(
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
` as GeneratedMutation<
  APITypes.DeleteRelationshipMutationVariables,
  APITypes.DeleteRelationshipMutation
>;
export const createMeeting = /* GraphQL */ `mutation CreateMeeting(
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
` as GeneratedMutation<
  APITypes.CreateMeetingMutationVariables,
  APITypes.CreateMeetingMutation
>;
export const updateMeeting = /* GraphQL */ `mutation UpdateMeeting(
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
` as GeneratedMutation<
  APITypes.UpdateMeetingMutationVariables,
  APITypes.UpdateMeetingMutation
>;
export const deleteMeeting = /* GraphQL */ `mutation DeleteMeeting(
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
` as GeneratedMutation<
  APITypes.DeleteMeetingMutationVariables,
  APITypes.DeleteMeetingMutation
>;
export const createAgendaItem = /* GraphQL */ `mutation CreateAgendaItem(
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
` as GeneratedMutation<
  APITypes.CreateAgendaItemMutationVariables,
  APITypes.CreateAgendaItemMutation
>;
export const updateAgendaItem = /* GraphQL */ `mutation UpdateAgendaItem(
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
` as GeneratedMutation<
  APITypes.UpdateAgendaItemMutationVariables,
  APITypes.UpdateAgendaItemMutation
>;
export const deleteAgendaItem = /* GraphQL */ `mutation DeleteAgendaItem(
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
` as GeneratedMutation<
  APITypes.DeleteAgendaItemMutationVariables,
  APITypes.DeleteAgendaItemMutation
>;
export const createActionItem = /* GraphQL */ `mutation CreateActionItem(
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
` as GeneratedMutation<
  APITypes.CreateActionItemMutationVariables,
  APITypes.CreateActionItemMutation
>;
export const updateActionItem = /* GraphQL */ `mutation UpdateActionItem(
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
` as GeneratedMutation<
  APITypes.UpdateActionItemMutationVariables,
  APITypes.UpdateActionItemMutation
>;
export const deleteActionItem = /* GraphQL */ `mutation DeleteActionItem(
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
` as GeneratedMutation<
  APITypes.DeleteActionItemMutationVariables,
  APITypes.DeleteActionItemMutation
>;
export const createNote = /* GraphQL */ `mutation CreateNote(
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
` as GeneratedMutation<
  APITypes.CreateNoteMutationVariables,
  APITypes.CreateNoteMutation
>;
export const updateNote = /* GraphQL */ `mutation UpdateNote(
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
` as GeneratedMutation<
  APITypes.UpdateNoteMutationVariables,
  APITypes.UpdateNoteMutation
>;
export const deleteNote = /* GraphQL */ `mutation DeleteNote(
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
` as GeneratedMutation<
  APITypes.DeleteNoteMutationVariables,
  APITypes.DeleteNoteMutation
>;
export const createUserOrganizations = /* GraphQL */ `mutation CreateUserOrganizations(
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
` as GeneratedMutation<
  APITypes.CreateUserOrganizationsMutationVariables,
  APITypes.CreateUserOrganizationsMutation
>;
export const updateUserOrganizations = /* GraphQL */ `mutation UpdateUserOrganizations(
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
` as GeneratedMutation<
  APITypes.UpdateUserOrganizationsMutationVariables,
  APITypes.UpdateUserOrganizationsMutation
>;
export const deleteUserOrganizations = /* GraphQL */ `mutation DeleteUserOrganizations(
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
` as GeneratedMutation<
  APITypes.DeleteUserOrganizationsMutationVariables,
  APITypes.DeleteUserOrganizationsMutation
>;
