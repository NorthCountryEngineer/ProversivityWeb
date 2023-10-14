/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
        }
        nextToken
      }
      createdAt
      updatedAt
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
        }
        nextToken
      }
      createdAt
      updatedAt
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
        }
        nextToken
      }
      createdAt
      updatedAt
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
export const onCreateMeeting = /* GraphQL */ `
  subscription OnCreateMeeting($filter: ModelSubscriptionMeetingFilterInput) {
    onCreateMeeting(filter: $filter) {
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
export const onUpdateMeeting = /* GraphQL */ `
  subscription OnUpdateMeeting($filter: ModelSubscriptionMeetingFilterInput) {
    onUpdateMeeting(filter: $filter) {
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
export const onDeleteMeeting = /* GraphQL */ `
  subscription OnDeleteMeeting($filter: ModelSubscriptionMeetingFilterInput) {
    onDeleteMeeting(filter: $filter) {
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
