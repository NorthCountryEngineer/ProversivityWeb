/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateOrganization = /* GraphQL */ `
  subscription OnCreateOrganization(
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
`;
export const onUpdateOrganization = /* GraphQL */ `
  subscription OnUpdateOrganization(
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
`;
export const onDeleteOrganization = /* GraphQL */ `
  subscription OnDeleteOrganization(
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
`;
export const onCreateRelationship = /* GraphQL */ `
  subscription OnCreateRelationship(
    $filter: ModelSubscriptionRelationshipFilterInput
  ) {
    onCreateRelationship(filter: $filter) {
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
export const onUpdateRelationship = /* GraphQL */ `
  subscription OnUpdateRelationship(
    $filter: ModelSubscriptionRelationshipFilterInput
  ) {
    onUpdateRelationship(filter: $filter) {
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
export const onDeleteRelationship = /* GraphQL */ `
  subscription OnDeleteRelationship(
    $filter: ModelSubscriptionRelationshipFilterInput
  ) {
    onDeleteRelationship(filter: $filter) {
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
export const onCreateMeeting = /* GraphQL */ `
  subscription OnCreateMeeting($filter: ModelSubscriptionMeetingFilterInput) {
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
`;
export const onUpdateMeeting = /* GraphQL */ `
  subscription OnUpdateMeeting($filter: ModelSubscriptionMeetingFilterInput) {
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
`;
export const onDeleteMeeting = /* GraphQL */ `
  subscription OnDeleteMeeting($filter: ModelSubscriptionMeetingFilterInput) {
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
`;
export const onCreateAgendaItem = /* GraphQL */ `
  subscription OnCreateAgendaItem(
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
`;
export const onUpdateAgendaItem = /* GraphQL */ `
  subscription OnUpdateAgendaItem(
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
`;
export const onDeleteAgendaItem = /* GraphQL */ `
  subscription OnDeleteAgendaItem(
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
`;
export const onCreateActionItem = /* GraphQL */ `
  subscription OnCreateActionItem(
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
export const onUpdateActionItem = /* GraphQL */ `
  subscription OnUpdateActionItem(
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
export const onDeleteActionItem = /* GraphQL */ `
  subscription OnDeleteActionItem(
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
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($filter: ModelSubscriptionNoteFilterInput) {
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
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($filter: ModelSubscriptionNoteFilterInput) {
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
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($filter: ModelSubscriptionNoteFilterInput) {
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
export const onCreateUserOrganizations = /* GraphQL */ `
  subscription OnCreateUserOrganizations(
    $filter: ModelSubscriptionUserOrganizationsFilterInput
  ) {
    onCreateUserOrganizations(filter: $filter) {
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
export const onUpdateUserOrganizations = /* GraphQL */ `
  subscription OnUpdateUserOrganizations(
    $filter: ModelSubscriptionUserOrganizationsFilterInput
  ) {
    onUpdateUserOrganizations(filter: $filter) {
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
export const onDeleteUserOrganizations = /* GraphQL */ `
  subscription OnDeleteUserOrganizations(
    $filter: ModelSubscriptionUserOrganizationsFilterInput
  ) {
    onDeleteUserOrganizations(filter: $filter) {
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
