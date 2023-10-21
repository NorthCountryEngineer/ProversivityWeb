/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
    id
    cognitoID
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
    id
    cognitoID
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
    id
    cognitoID
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateOrganization = /* GraphQL */ `subscription OnCreateOrganization(
  $filter: ModelSubscriptionOrganizationFilterInput
) {
  onCreateOrganization(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateOrganizationSubscriptionVariables,
  APITypes.OnCreateOrganizationSubscription
>;
export const onUpdateOrganization = /* GraphQL */ `subscription OnUpdateOrganization(
  $filter: ModelSubscriptionOrganizationFilterInput
) {
  onUpdateOrganization(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateOrganizationSubscriptionVariables,
  APITypes.OnUpdateOrganizationSubscription
>;
export const onDeleteOrganization = /* GraphQL */ `subscription OnDeleteOrganization(
  $filter: ModelSubscriptionOrganizationFilterInput
) {
  onDeleteOrganization(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteOrganizationSubscriptionVariables,
  APITypes.OnDeleteOrganizationSubscription
>;
export const onCreateRelationship = /* GraphQL */ `subscription OnCreateRelationship(
  $filter: ModelSubscriptionRelationshipFilterInput
) {
  onCreateRelationship(filter: $filter) {
    id
    name
    description
    requestor {
      id
      cognitoID
      firstName
      email
      createdAt
      updatedAt
      __typename
    }
    employee {
      id
      cognitoID
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
` as GeneratedSubscription<
  APITypes.OnCreateRelationshipSubscriptionVariables,
  APITypes.OnCreateRelationshipSubscription
>;
export const onUpdateRelationship = /* GraphQL */ `subscription OnUpdateRelationship(
  $filter: ModelSubscriptionRelationshipFilterInput
) {
  onUpdateRelationship(filter: $filter) {
    id
    name
    description
    requestor {
      id
      cognitoID
      firstName
      email
      createdAt
      updatedAt
      __typename
    }
    employee {
      id
      cognitoID
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
` as GeneratedSubscription<
  APITypes.OnUpdateRelationshipSubscriptionVariables,
  APITypes.OnUpdateRelationshipSubscription
>;
export const onDeleteRelationship = /* GraphQL */ `subscription OnDeleteRelationship(
  $filter: ModelSubscriptionRelationshipFilterInput
) {
  onDeleteRelationship(filter: $filter) {
    id
    name
    description
    requestor {
      id
      cognitoID
      firstName
      email
      createdAt
      updatedAt
      __typename
    }
    employee {
      id
      cognitoID
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
` as GeneratedSubscription<
  APITypes.OnDeleteRelationshipSubscriptionVariables,
  APITypes.OnDeleteRelationshipSubscription
>;
export const onCreateMeeting = /* GraphQL */ `subscription OnCreateMeeting($filter: ModelSubscriptionMeetingFilterInput) {
  onCreateMeeting(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMeetingSubscriptionVariables,
  APITypes.OnCreateMeetingSubscription
>;
export const onUpdateMeeting = /* GraphQL */ `subscription OnUpdateMeeting($filter: ModelSubscriptionMeetingFilterInput) {
  onUpdateMeeting(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMeetingSubscriptionVariables,
  APITypes.OnUpdateMeetingSubscription
>;
export const onDeleteMeeting = /* GraphQL */ `subscription OnDeleteMeeting($filter: ModelSubscriptionMeetingFilterInput) {
  onDeleteMeeting(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMeetingSubscriptionVariables,
  APITypes.OnDeleteMeetingSubscription
>;
export const onCreateAgendaItem = /* GraphQL */ `subscription OnCreateAgendaItem(
  $filter: ModelSubscriptionAgendaItemFilterInput
) {
  onCreateAgendaItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAgendaItemSubscriptionVariables,
  APITypes.OnCreateAgendaItemSubscription
>;
export const onUpdateAgendaItem = /* GraphQL */ `subscription OnUpdateAgendaItem(
  $filter: ModelSubscriptionAgendaItemFilterInput
) {
  onUpdateAgendaItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAgendaItemSubscriptionVariables,
  APITypes.OnUpdateAgendaItemSubscription
>;
export const onDeleteAgendaItem = /* GraphQL */ `subscription OnDeleteAgendaItem(
  $filter: ModelSubscriptionAgendaItemFilterInput
) {
  onDeleteAgendaItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAgendaItemSubscriptionVariables,
  APITypes.OnDeleteAgendaItemSubscription
>;
export const onCreateActionItem = /* GraphQL */ `subscription OnCreateActionItem(
  $filter: ModelSubscriptionActionItemFilterInput
) {
  onCreateActionItem(filter: $filter) {
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
      cognitoID
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
` as GeneratedSubscription<
  APITypes.OnCreateActionItemSubscriptionVariables,
  APITypes.OnCreateActionItemSubscription
>;
export const onUpdateActionItem = /* GraphQL */ `subscription OnUpdateActionItem(
  $filter: ModelSubscriptionActionItemFilterInput
) {
  onUpdateActionItem(filter: $filter) {
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
      cognitoID
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
` as GeneratedSubscription<
  APITypes.OnUpdateActionItemSubscriptionVariables,
  APITypes.OnUpdateActionItemSubscription
>;
export const onDeleteActionItem = /* GraphQL */ `subscription OnDeleteActionItem(
  $filter: ModelSubscriptionActionItemFilterInput
) {
  onDeleteActionItem(filter: $filter) {
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
      cognitoID
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
` as GeneratedSubscription<
  APITypes.OnDeleteActionItemSubscriptionVariables,
  APITypes.OnDeleteActionItemSubscription
>;
export const onCreateNote = /* GraphQL */ `subscription OnCreateNote($filter: ModelSubscriptionNoteFilterInput) {
  onCreateNote(filter: $filter) {
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
      cognitoID
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
` as GeneratedSubscription<
  APITypes.OnCreateNoteSubscriptionVariables,
  APITypes.OnCreateNoteSubscription
>;
export const onUpdateNote = /* GraphQL */ `subscription OnUpdateNote($filter: ModelSubscriptionNoteFilterInput) {
  onUpdateNote(filter: $filter) {
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
      cognitoID
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
` as GeneratedSubscription<
  APITypes.OnUpdateNoteSubscriptionVariables,
  APITypes.OnUpdateNoteSubscription
>;
export const onDeleteNote = /* GraphQL */ `subscription OnDeleteNote($filter: ModelSubscriptionNoteFilterInput) {
  onDeleteNote(filter: $filter) {
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
      cognitoID
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
` as GeneratedSubscription<
  APITypes.OnDeleteNoteSubscriptionVariables,
  APITypes.OnDeleteNoteSubscription
>;
export const onCreateUserOrganizations = /* GraphQL */ `subscription OnCreateUserOrganizations(
  $filter: ModelSubscriptionUserOrganizationsFilterInput
) {
  onCreateUserOrganizations(filter: $filter) {
    id
    userId
    organizationId
    user {
      id
      cognitoID
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
` as GeneratedSubscription<
  APITypes.OnCreateUserOrganizationsSubscriptionVariables,
  APITypes.OnCreateUserOrganizationsSubscription
>;
export const onUpdateUserOrganizations = /* GraphQL */ `subscription OnUpdateUserOrganizations(
  $filter: ModelSubscriptionUserOrganizationsFilterInput
) {
  onUpdateUserOrganizations(filter: $filter) {
    id
    userId
    organizationId
    user {
      id
      cognitoID
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserOrganizationsSubscriptionVariables,
  APITypes.OnUpdateUserOrganizationsSubscription
>;
export const onDeleteUserOrganizations = /* GraphQL */ `subscription OnDeleteUserOrganizations(
  $filter: ModelSubscriptionUserOrganizationsFilterInput
) {
  onDeleteUserOrganizations(filter: $filter) {
    id
    userId
    organizationId
    user {
      id
      cognitoID
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserOrganizationsSubscriptionVariables,
  APITypes.OnDeleteUserOrganizationsSubscription
>;
