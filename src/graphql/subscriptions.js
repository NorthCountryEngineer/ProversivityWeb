/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateOrganization = /* GraphQL */ `
  subscription OnCreateOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
  ) {
    onCreateOrganization(filter: $filter) {
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
export const onUpdateOrganization = /* GraphQL */ `
  subscription OnUpdateOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
  ) {
    onUpdateOrganization(filter: $filter) {
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
export const onDeleteOrganization = /* GraphQL */ `
  subscription OnDeleteOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
  ) {
    onDeleteOrganization(filter: $filter) {
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
export const onCreateUserOrganization = /* GraphQL */ `
  subscription OnCreateUserOrganization(
    $filter: ModelSubscriptionUserOrganizationFilterInput
  ) {
    onCreateUserOrganization(filter: $filter) {
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
export const onUpdateUserOrganization = /* GraphQL */ `
  subscription OnUpdateUserOrganization(
    $filter: ModelSubscriptionUserOrganizationFilterInput
  ) {
    onUpdateUserOrganization(filter: $filter) {
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
export const onDeleteUserOrganization = /* GraphQL */ `
  subscription OnDeleteUserOrganization(
    $filter: ModelSubscriptionUserOrganizationFilterInput
  ) {
    onDeleteUserOrganization(filter: $filter) {
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
export const onCreateMeeting = /* GraphQL */ `
  subscription OnCreateMeeting($filter: ModelSubscriptionMeetingFilterInput) {
    onCreateMeeting(filter: $filter) {
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
export const onUpdateMeeting = /* GraphQL */ `
  subscription OnUpdateMeeting($filter: ModelSubscriptionMeetingFilterInput) {
    onUpdateMeeting(filter: $filter) {
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
export const onDeleteMeeting = /* GraphQL */ `
  subscription OnDeleteMeeting($filter: ModelSubscriptionMeetingFilterInput) {
    onDeleteMeeting(filter: $filter) {
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
export const onCreateAgendaItem = /* GraphQL */ `
  subscription OnCreateAgendaItem(
    $filter: ModelSubscriptionAgendaItemFilterInput
  ) {
    onCreateAgendaItem(filter: $filter) {
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
export const onUpdateAgendaItem = /* GraphQL */ `
  subscription OnUpdateAgendaItem(
    $filter: ModelSubscriptionAgendaItemFilterInput
  ) {
    onUpdateAgendaItem(filter: $filter) {
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
export const onDeleteAgendaItem = /* GraphQL */ `
  subscription OnDeleteAgendaItem(
    $filter: ModelSubscriptionAgendaItemFilterInput
  ) {
    onDeleteAgendaItem(filter: $filter) {
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
export const onCreateActionItem = /* GraphQL */ `
  subscription OnCreateActionItem(
    $filter: ModelSubscriptionActionItemFilterInput
  ) {
    onCreateActionItem(filter: $filter) {
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
export const onUpdateActionItem = /* GraphQL */ `
  subscription OnUpdateActionItem(
    $filter: ModelSubscriptionActionItemFilterInput
  ) {
    onUpdateActionItem(filter: $filter) {
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
export const onDeleteActionItem = /* GraphQL */ `
  subscription OnDeleteActionItem(
    $filter: ModelSubscriptionActionItemFilterInput
  ) {
    onDeleteActionItem(filter: $filter) {
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
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($filter: ModelSubscriptionNoteFilterInput) {
    onCreateNote(filter: $filter) {
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
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($filter: ModelSubscriptionNoteFilterInput) {
    onUpdateNote(filter: $filter) {
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
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($filter: ModelSubscriptionNoteFilterInput) {
    onDeleteNote(filter: $filter) {
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
