/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  cognitoID: string,
  firstName?: string | null,
  email: string,
};

export type ModelUserConditionInput = {
  cognitoID?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  cognitoID: string,
  firstName?: string | null,
  email: string,
  relationships?: ModelRelationshipConnection | null,
  organizations?: ModelUserOrganizationsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelRelationshipConnection = {
  __typename: "ModelRelationshipConnection",
  items:  Array<Relationship | null >,
  nextToken?: string | null,
};

export type Relationship = {
  __typename: "Relationship",
  id: string,
  name?: string | null,
  description?: string | null,
  requestor?: User | null,
  employee?: User | null,
  meetings?: ModelMeetingConnection | null,
  createdAt: string,
  updatedAt: string,
  userRelationshipsId?: string | null,
  relationshipRequestorId?: string | null,
  relationshipEmployeeId?: string | null,
};

export type ModelMeetingConnection = {
  __typename: "ModelMeetingConnection",
  items:  Array<Meeting | null >,
  nextToken?: string | null,
};

export type Meeting = {
  __typename: "Meeting",
  id: string,
  scheduledTime: number,
  duration: number,
  locationLink?: string | null,
  status: MeetingStatus,
  agendaItems?: ModelAgendaItemConnection | null,
  actionItems?: ModelActionItemConnection | null,
  notes?: ModelNoteConnection | null,
  createdAt: string,
  updatedAt: string,
  relationshipMeetingsId?: string | null,
};

export enum MeetingStatus {
  SCHEDULED = "SCHEDULED",
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
}


export type ModelAgendaItemConnection = {
  __typename: "ModelAgendaItemConnection",
  items:  Array<AgendaItem | null >,
  nextToken?: string | null,
};

export type AgendaItem = {
  __typename: "AgendaItem",
  id: string,
  meetingID: string,
  meeting?: Meeting | null,
  title: string,
  description?: string | null,
  duration?: number | null,
  order?: number | null,
  status: AgendaItemStatus,
  createdAt: string,
  updatedAt: string,
  meetingAgendaItemsId?: string | null,
  agendaItemMeetingId?: string | null,
};

export enum AgendaItemStatus {
  OPEN = "OPEN",
  DISCUSSED = "DISCUSSED",
  CLOSED = "CLOSED",
}


export type ModelActionItemConnection = {
  __typename: "ModelActionItemConnection",
  items:  Array<ActionItem | null >,
  nextToken?: string | null,
};

export type ActionItem = {
  __typename: "ActionItem",
  id: string,
  meetingID: string,
  meeting?: Meeting | null,
  assignedToUserID: string,
  assignedToUser?: User | null,
  description: string,
  dueDate?: string | null,
  status: ActionItemStatus,
  createdAt: string,
  updatedAt: string,
  meetingActionItemsId?: string | null,
  actionItemMeetingId?: string | null,
  actionItemAssignedToUserId?: string | null,
};

export enum ActionItemStatus {
  ASSIGNED = "ASSIGNED",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
}


export type ModelNoteConnection = {
  __typename: "ModelNoteConnection",
  items:  Array<Note | null >,
  nextToken?: string | null,
};

export type Note = {
  __typename: "Note",
  id: string,
  meetingID: string,
  meeting?: Meeting | null,
  userID: string,
  user?: User | null,
  content: string,
  test?: string | null,
  timestamp: number,
  createdAt: string,
  updatedAt: string,
  meetingNotesId?: string | null,
  noteMeetingId?: string | null,
  noteUserId?: string | null,
};

export type ModelUserOrganizationsConnection = {
  __typename: "ModelUserOrganizationsConnection",
  items:  Array<UserOrganizations | null >,
  nextToken?: string | null,
};

export type UserOrganizations = {
  __typename: "UserOrganizations",
  id: string,
  userId: string,
  organizationId: string,
  user: User,
  organization: Organization,
  createdAt: string,
  updatedAt: string,
};

export type Organization = {
  __typename: "Organization",
  id: string,
  name: string,
  description?: string | null,
  users?: ModelUserOrganizationsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  cognitoID?: string | null,
  firstName?: string | null,
  email?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateOrganizationInput = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelOrganizationConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelOrganizationConditionInput | null > | null,
  or?: Array< ModelOrganizationConditionInput | null > | null,
  not?: ModelOrganizationConditionInput | null,
};

export type UpdateOrganizationInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteOrganizationInput = {
  id: string,
};

export type CreateRelationshipInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  userRelationshipsId?: string | null,
  relationshipRequestorId?: string | null,
  relationshipEmployeeId?: string | null,
};

export type ModelRelationshipConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelRelationshipConditionInput | null > | null,
  or?: Array< ModelRelationshipConditionInput | null > | null,
  not?: ModelRelationshipConditionInput | null,
  userRelationshipsId?: ModelIDInput | null,
  relationshipRequestorId?: ModelIDInput | null,
  relationshipEmployeeId?: ModelIDInput | null,
};

export type UpdateRelationshipInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  userRelationshipsId?: string | null,
  relationshipRequestorId?: string | null,
  relationshipEmployeeId?: string | null,
};

export type DeleteRelationshipInput = {
  id: string,
};

export type CreateMeetingInput = {
  id?: string | null,
  scheduledTime: number,
  duration: number,
  locationLink?: string | null,
  status: MeetingStatus,
  relationshipMeetingsId?: string | null,
};

export type ModelMeetingConditionInput = {
  scheduledTime?: ModelIntInput | null,
  duration?: ModelIntInput | null,
  locationLink?: ModelStringInput | null,
  status?: ModelMeetingStatusInput | null,
  and?: Array< ModelMeetingConditionInput | null > | null,
  or?: Array< ModelMeetingConditionInput | null > | null,
  not?: ModelMeetingConditionInput | null,
  relationshipMeetingsId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelMeetingStatusInput = {
  eq?: MeetingStatus | null,
  ne?: MeetingStatus | null,
};

export type UpdateMeetingInput = {
  id: string,
  scheduledTime?: number | null,
  duration?: number | null,
  locationLink?: string | null,
  status?: MeetingStatus | null,
  relationshipMeetingsId?: string | null,
};

export type DeleteMeetingInput = {
  id: string,
};

export type CreateAgendaItemInput = {
  id?: string | null,
  meetingID: string,
  title: string,
  description?: string | null,
  duration?: number | null,
  order?: number | null,
  status: AgendaItemStatus,
  meetingAgendaItemsId?: string | null,
  agendaItemMeetingId?: string | null,
};

export type ModelAgendaItemConditionInput = {
  meetingID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  order?: ModelIntInput | null,
  status?: ModelAgendaItemStatusInput | null,
  and?: Array< ModelAgendaItemConditionInput | null > | null,
  or?: Array< ModelAgendaItemConditionInput | null > | null,
  not?: ModelAgendaItemConditionInput | null,
  meetingAgendaItemsId?: ModelIDInput | null,
  agendaItemMeetingId?: ModelIDInput | null,
};

export type ModelAgendaItemStatusInput = {
  eq?: AgendaItemStatus | null,
  ne?: AgendaItemStatus | null,
};

export type UpdateAgendaItemInput = {
  id: string,
  meetingID?: string | null,
  title?: string | null,
  description?: string | null,
  duration?: number | null,
  order?: number | null,
  status?: AgendaItemStatus | null,
  meetingAgendaItemsId?: string | null,
  agendaItemMeetingId?: string | null,
};

export type DeleteAgendaItemInput = {
  id: string,
};

export type CreateActionItemInput = {
  id?: string | null,
  meetingID: string,
  assignedToUserID: string,
  description: string,
  dueDate?: string | null,
  status: ActionItemStatus,
  meetingActionItemsId?: string | null,
  actionItemMeetingId?: string | null,
  actionItemAssignedToUserId?: string | null,
};

export type ModelActionItemConditionInput = {
  meetingID?: ModelIDInput | null,
  assignedToUserID?: ModelIDInput | null,
  description?: ModelStringInput | null,
  dueDate?: ModelStringInput | null,
  status?: ModelActionItemStatusInput | null,
  and?: Array< ModelActionItemConditionInput | null > | null,
  or?: Array< ModelActionItemConditionInput | null > | null,
  not?: ModelActionItemConditionInput | null,
  meetingActionItemsId?: ModelIDInput | null,
  actionItemMeetingId?: ModelIDInput | null,
  actionItemAssignedToUserId?: ModelIDInput | null,
};

export type ModelActionItemStatusInput = {
  eq?: ActionItemStatus | null,
  ne?: ActionItemStatus | null,
};

export type UpdateActionItemInput = {
  id: string,
  meetingID?: string | null,
  assignedToUserID?: string | null,
  description?: string | null,
  dueDate?: string | null,
  status?: ActionItemStatus | null,
  meetingActionItemsId?: string | null,
  actionItemMeetingId?: string | null,
  actionItemAssignedToUserId?: string | null,
};

export type DeleteActionItemInput = {
  id: string,
};

export type CreateNoteInput = {
  id?: string | null,
  meetingID: string,
  userID: string,
  content: string,
  test?: string | null,
  timestamp: number,
  meetingNotesId?: string | null,
  noteMeetingId?: string | null,
  noteUserId?: string | null,
};

export type ModelNoteConditionInput = {
  meetingID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  test?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  and?: Array< ModelNoteConditionInput | null > | null,
  or?: Array< ModelNoteConditionInput | null > | null,
  not?: ModelNoteConditionInput | null,
  meetingNotesId?: ModelIDInput | null,
  noteMeetingId?: ModelIDInput | null,
  noteUserId?: ModelIDInput | null,
};

export type UpdateNoteInput = {
  id: string,
  meetingID?: string | null,
  userID?: string | null,
  content?: string | null,
  test?: string | null,
  timestamp?: number | null,
  meetingNotesId?: string | null,
  noteMeetingId?: string | null,
  noteUserId?: string | null,
};

export type DeleteNoteInput = {
  id: string,
};

export type CreateUserOrganizationsInput = {
  id?: string | null,
  userId: string,
  organizationId: string,
};

export type ModelUserOrganizationsConditionInput = {
  userId?: ModelIDInput | null,
  organizationId?: ModelIDInput | null,
  and?: Array< ModelUserOrganizationsConditionInput | null > | null,
  or?: Array< ModelUserOrganizationsConditionInput | null > | null,
  not?: ModelUserOrganizationsConditionInput | null,
};

export type UpdateUserOrganizationsInput = {
  id: string,
  userId?: string | null,
  organizationId?: string | null,
};

export type DeleteUserOrganizationsInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  cognitoID?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelOrganizationFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelOrganizationFilterInput | null > | null,
  or?: Array< ModelOrganizationFilterInput | null > | null,
  not?: ModelOrganizationFilterInput | null,
};

export type ModelOrganizationConnection = {
  __typename: "ModelOrganizationConnection",
  items:  Array<Organization | null >,
  nextToken?: string | null,
};

export type ModelRelationshipFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelRelationshipFilterInput | null > | null,
  or?: Array< ModelRelationshipFilterInput | null > | null,
  not?: ModelRelationshipFilterInput | null,
  userRelationshipsId?: ModelIDInput | null,
  relationshipRequestorId?: ModelIDInput | null,
  relationshipEmployeeId?: ModelIDInput | null,
};

export type ModelMeetingFilterInput = {
  id?: ModelIDInput | null,
  scheduledTime?: ModelIntInput | null,
  duration?: ModelIntInput | null,
  locationLink?: ModelStringInput | null,
  status?: ModelMeetingStatusInput | null,
  and?: Array< ModelMeetingFilterInput | null > | null,
  or?: Array< ModelMeetingFilterInput | null > | null,
  not?: ModelMeetingFilterInput | null,
  relationshipMeetingsId?: ModelIDInput | null,
};

export type ModelAgendaItemFilterInput = {
  id?: ModelIDInput | null,
  meetingID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  order?: ModelIntInput | null,
  status?: ModelAgendaItemStatusInput | null,
  and?: Array< ModelAgendaItemFilterInput | null > | null,
  or?: Array< ModelAgendaItemFilterInput | null > | null,
  not?: ModelAgendaItemFilterInput | null,
  meetingAgendaItemsId?: ModelIDInput | null,
  agendaItemMeetingId?: ModelIDInput | null,
};

export type ModelActionItemFilterInput = {
  id?: ModelIDInput | null,
  meetingID?: ModelIDInput | null,
  assignedToUserID?: ModelIDInput | null,
  description?: ModelStringInput | null,
  dueDate?: ModelStringInput | null,
  status?: ModelActionItemStatusInput | null,
  and?: Array< ModelActionItemFilterInput | null > | null,
  or?: Array< ModelActionItemFilterInput | null > | null,
  not?: ModelActionItemFilterInput | null,
  meetingActionItemsId?: ModelIDInput | null,
  actionItemMeetingId?: ModelIDInput | null,
  actionItemAssignedToUserId?: ModelIDInput | null,
};

export type ModelNoteFilterInput = {
  id?: ModelIDInput | null,
  meetingID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  test?: ModelStringInput | null,
  timestamp?: ModelIntInput | null,
  and?: Array< ModelNoteFilterInput | null > | null,
  or?: Array< ModelNoteFilterInput | null > | null,
  not?: ModelNoteFilterInput | null,
  meetingNotesId?: ModelIDInput | null,
  noteMeetingId?: ModelIDInput | null,
  noteUserId?: ModelIDInput | null,
};

export type ModelUserOrganizationsFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  organizationId?: ModelIDInput | null,
  and?: Array< ModelUserOrganizationsFilterInput | null > | null,
  or?: Array< ModelUserOrganizationsFilterInput | null > | null,
  not?: ModelUserOrganizationsFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  cognitoID?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionOrganizationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOrganizationFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrganizationFilterInput | null > | null,
};

export type ModelSubscriptionRelationshipFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRelationshipFilterInput | null > | null,
  or?: Array< ModelSubscriptionRelationshipFilterInput | null > | null,
};

export type ModelSubscriptionMeetingFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  scheduledTime?: ModelSubscriptionIntInput | null,
  duration?: ModelSubscriptionIntInput | null,
  locationLink?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMeetingFilterInput | null > | null,
  or?: Array< ModelSubscriptionMeetingFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionAgendaItemFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  meetingID?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  duration?: ModelSubscriptionIntInput | null,
  order?: ModelSubscriptionIntInput | null,
  status?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAgendaItemFilterInput | null > | null,
  or?: Array< ModelSubscriptionAgendaItemFilterInput | null > | null,
};

export type ModelSubscriptionActionItemFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  meetingID?: ModelSubscriptionIDInput | null,
  assignedToUserID?: ModelSubscriptionIDInput | null,
  description?: ModelSubscriptionStringInput | null,
  dueDate?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionActionItemFilterInput | null > | null,
  or?: Array< ModelSubscriptionActionItemFilterInput | null > | null,
};

export type ModelSubscriptionNoteFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  meetingID?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  test?: ModelSubscriptionStringInput | null,
  timestamp?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionNoteFilterInput | null > | null,
  or?: Array< ModelSubscriptionNoteFilterInput | null > | null,
};

export type ModelSubscriptionUserOrganizationsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  organizationId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionUserOrganizationsFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserOrganizationsFilterInput | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    cognitoID: string,
    firstName?: string | null,
    email: string,
    relationships?:  {
      __typename: "ModelRelationshipConnection",
      nextToken?: string | null,
    } | null,
    organizations?:  {
      __typename: "ModelUserOrganizationsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    cognitoID: string,
    firstName?: string | null,
    email: string,
    relationships?:  {
      __typename: "ModelRelationshipConnection",
      nextToken?: string | null,
    } | null,
    organizations?:  {
      __typename: "ModelUserOrganizationsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    cognitoID: string,
    firstName?: string | null,
    email: string,
    relationships?:  {
      __typename: "ModelRelationshipConnection",
      nextToken?: string | null,
    } | null,
    organizations?:  {
      __typename: "ModelUserOrganizationsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOrganizationMutationVariables = {
  input: CreateOrganizationInput,
  condition?: ModelOrganizationConditionInput | null,
};

export type CreateOrganizationMutation = {
  createOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    description?: string | null,
    users?:  {
      __typename: "ModelUserOrganizationsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOrganizationMutationVariables = {
  input: UpdateOrganizationInput,
  condition?: ModelOrganizationConditionInput | null,
};

export type UpdateOrganizationMutation = {
  updateOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    description?: string | null,
    users?:  {
      __typename: "ModelUserOrganizationsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOrganizationMutationVariables = {
  input: DeleteOrganizationInput,
  condition?: ModelOrganizationConditionInput | null,
};

export type DeleteOrganizationMutation = {
  deleteOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    description?: string | null,
    users?:  {
      __typename: "ModelUserOrganizationsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRelationshipMutationVariables = {
  input: CreateRelationshipInput,
  condition?: ModelRelationshipConditionInput | null,
};

export type CreateRelationshipMutation = {
  createRelationship?:  {
    __typename: "Relationship",
    id: string,
    name?: string | null,
    description?: string | null,
    requestor?:  {
      __typename: "User",
      id: string,
      cognitoID: string,
      firstName?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    employee?:  {
      __typename: "User",
      id: string,
      cognitoID: string,
      firstName?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    meetings?:  {
      __typename: "ModelMeetingConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userRelationshipsId?: string | null,
    relationshipRequestorId?: string | null,
    relationshipEmployeeId?: string | null,
  } | null,
};

export type UpdateRelationshipMutationVariables = {
  input: UpdateRelationshipInput,
  condition?: ModelRelationshipConditionInput | null,
};

export type UpdateRelationshipMutation = {
  updateRelationship?:  {
    __typename: "Relationship",
    id: string,
    name?: string | null,
    description?: string | null,
    requestor?:  {
      __typename: "User",
      id: string,
      cognitoID: string,
      firstName?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    employee?:  {
      __typename: "User",
      id: string,
      cognitoID: string,
      firstName?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    meetings?:  {
      __typename: "ModelMeetingConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userRelationshipsId?: string | null,
    relationshipRequestorId?: string | null,
    relationshipEmployeeId?: string | null,
  } | null,
};

export type DeleteRelationshipMutationVariables = {
  input: DeleteRelationshipInput,
  condition?: ModelRelationshipConditionInput | null,
};

export type DeleteRelationshipMutation = {
  deleteRelationship?:  {
    __typename: "Relationship",
    id: string,
    name?: string | null,
    description?: string | null,
    requestor?:  {
      __typename: "User",
      id: string,
      cognitoID: string,
      firstName?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    employee?:  {
      __typename: "User",
      id: string,
      cognitoID: string,
      firstName?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    meetings?:  {
      __typename: "ModelMeetingConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userRelationshipsId?: string | null,
    relationshipRequestorId?: string | null,
    relationshipEmployeeId?: string | null,
  } | null,
};

export type CreateMeetingMutationVariables = {
  input: CreateMeetingInput,
  condition?: ModelMeetingConditionInput | null,
};

export type CreateMeetingMutation = {
  createMeeting?:  {
    __typename: "Meeting",
    id: string,
    scheduledTime: number,
    duration: number,
    locationLink?: string | null,
    status: MeetingStatus,
    agendaItems?:  {
      __typename: "ModelAgendaItemConnection",
      nextToken?: string | null,
    } | null,
    actionItems?:  {
      __typename: "ModelActionItemConnection",
      nextToken?: string | null,
    } | null,
    notes?:  {
      __typename: "ModelNoteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    relationshipMeetingsId?: string | null,
  } | null,
};

export type UpdateMeetingMutationVariables = {
  input: UpdateMeetingInput,
  condition?: ModelMeetingConditionInput | null,
};

export type UpdateMeetingMutation = {
  updateMeeting?:  {
    __typename: "Meeting",
    id: string,
    scheduledTime: number,
    duration: number,
    locationLink?: string | null,
    status: MeetingStatus,
    agendaItems?:  {
      __typename: "ModelAgendaItemConnection",
      nextToken?: string | null,
    } | null,
    actionItems?:  {
      __typename: "ModelActionItemConnection",
      nextToken?: string | null,
    } | null,
    notes?:  {
      __typename: "ModelNoteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    relationshipMeetingsId?: string | null,
  } | null,
};

export type DeleteMeetingMutationVariables = {
  input: DeleteMeetingInput,
  condition?: ModelMeetingConditionInput | null,
};

export type DeleteMeetingMutation = {
  deleteMeeting?:  {
    __typename: "Meeting",
    id: string,
    scheduledTime: number,
    duration: number,
    locationLink?: string | null,
    status: MeetingStatus,
    agendaItems?:  {
      __typename: "ModelAgendaItemConnection",
      nextToken?: string | null,
    } | null,
    actionItems?:  {
      __typename: "ModelActionItemConnection",
      nextToken?: string | null,
    } | null,
    notes?:  {
      __typename: "ModelNoteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    relationshipMeetingsId?: string | null,
  } | null,
};

export type CreateAgendaItemMutationVariables = {
  input: CreateAgendaItemInput,
  condition?: ModelAgendaItemConditionInput | null,
};

export type CreateAgendaItemMutation = {
  createAgendaItem?:  {
    __typename: "AgendaItem",
    id: string,
    meetingID: string,
    meeting?:  {
      __typename: "Meeting",
      id: string,
      scheduledTime: number,
      duration: number,
      locationLink?: string | null,
      status: MeetingStatus,
      createdAt: string,
      updatedAt: string,
      relationshipMeetingsId?: string | null,
    } | null,
    title: string,
    description?: string | null,
    duration?: number | null,
    order?: number | null,
    status: AgendaItemStatus,
    createdAt: string,
    updatedAt: string,
    meetingAgendaItemsId?: string | null,
    agendaItemMeetingId?: string | null,
  } | null,
};

export type UpdateAgendaItemMutationVariables = {
  input: UpdateAgendaItemInput,
  condition?: ModelAgendaItemConditionInput | null,
};

export type UpdateAgendaItemMutation = {
  updateAgendaItem?:  {
    __typename: "AgendaItem",
    id: string,
    meetingID: string,
    meeting?:  {
      __typename: "Meeting",
      id: string,
      scheduledTime: number,
      duration: number,
      locationLink?: string | null,
      status: MeetingStatus,
      createdAt: string,
      updatedAt: string,
      relationshipMeetingsId?: string | null,
    } | null,
    title: string,
    description?: string | null,
    duration?: number | null,
    order?: number | null,
    status: AgendaItemStatus,
    createdAt: string,
    updatedAt: string,
    meetingAgendaItemsId?: string | null,
    agendaItemMeetingId?: string | null,
  } | null,
};

export type DeleteAgendaItemMutationVariables = {
  input: DeleteAgendaItemInput,
  condition?: ModelAgendaItemConditionInput | null,
};

export type DeleteAgendaItemMutation = {
  deleteAgendaItem?:  {
    __typename: "AgendaItem",
    id: string,
    meetingID: string,
    meeting?:  {
      __typename: "Meeting",
      id: string,
      scheduledTime: number,
      duration: number,
      locationLink?: string | null,
      status: MeetingStatus,
      createdAt: string,
      updatedAt: string,
      relationshipMeetingsId?: string | null,
    } | null,
    title: string,
    description?: string | null,
    duration?: number | null,
    order?: number | null,
    status: AgendaItemStatus,
    createdAt: string,
    updatedAt: string,
    meetingAgendaItemsId?: string | null,
    agendaItemMeetingId?: string | null,
  } | null,
};

export type CreateActionItemMutationVariables = {
  input: CreateActionItemInput,
  condition?: ModelActionItemConditionInput | null,
};

export type CreateActionItemMutation = {
  createActionItem?:  {
    __typename: "ActionItem",
    id: string,
    meetingID: string,
    meeting?:  {
      __typename: "Meeting",
      id: string,
      scheduledTime: number,
      duration: number,
      locationLink?: string | null,
      status: MeetingStatus,
      createdAt: string,
      updatedAt: string,
      relationshipMeetingsId?: string | null,
    } | null,
    assignedToUserID: string,
    assignedToUser?:  {
      __typename: "User",
      id: string,
      cognitoID: string,
      firstName?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    description: string,
    dueDate?: string | null,
    status: ActionItemStatus,
    createdAt: string,
    updatedAt: string,
    meetingActionItemsId?: string | null,
    actionItemMeetingId?: string | null,
    actionItemAssignedToUserId?: string | null,
  } | null,
};

export type UpdateActionItemMutationVariables = {
  input: UpdateActionItemInput,
  condition?: ModelActionItemConditionInput | null,
};

export type UpdateActionItemMutation = {
  updateActionItem?:  {
    __typename: "ActionItem",
    id: string,
    meetingID: string,
    meeting?:  {
      __typename: "Meeting",
      id: string,
      scheduledTime: number,
      duration: number,
      locationLink?: string | null,
      status: MeetingStatus,
      createdAt: string,
      updatedAt: string,
      relationshipMeetingsId?: string | null,
    } | null,
    assignedToUserID: string,
    assignedToUser?:  {
      __typename: "User",
      id: string,
      cognitoID: string,
      firstName?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    description: string,
    dueDate?: string | null,
    status: ActionItemStatus,
    createdAt: string,
    updatedAt: string,
    meetingActionItemsId?: string | null,
    actionItemMeetingId?: string | null,
    actionItemAssignedToUserId?: string | null,
  } | null,
};

export type DeleteActionItemMutationVariables = {
  input: DeleteActionItemInput,
  condition?: ModelActionItemConditionInput | null,
};

export type DeleteActionItemMutation = {
  deleteActionItem?:  {
    __typename: "ActionItem",
    id: string,
    meetingID: string,
    meeting?:  {
      __typename: "Meeting",
      id: string,
      scheduledTime: number,
      duration: number,
      locationLink?: string | null,
      status: MeetingStatus,
      createdAt: string,
      updatedAt: string,
      relationshipMeetingsId?: string | null,
    } | null,
    assignedToUserID: string,
    assignedToUser?:  {
      __typename: "User",
      id: string,
      cognitoID: string,
      firstName?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    description: string,
    dueDate?: string | null,
    status: ActionItemStatus,
    createdAt: string,
    updatedAt: string,
    meetingActionItemsId?: string | null,
    actionItemMeetingId?: string | null,
    actionItemAssignedToUserId?: string | null,
  } | null,
};

export type CreateNoteMutationVariables = {
  input: CreateNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type CreateNoteMutation = {
  createNote?:  {
    __typename: "Note",
    id: string,
    meetingID: string,
    meeting?:  {
      __typename: "Meeting",
      id: string,
      scheduledTime: number,
      duration: number,
      locationLink?: string | null,
      status: MeetingStatus,
      createdAt: string,
      updatedAt: string,
      relationshipMeetingsId?: string | null,
    } | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      cognitoID: string,
      firstName?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    test?: string | null,
    timestamp: number,
    createdAt: string,
    updatedAt: string,
    meetingNotesId?: string | null,
    noteMeetingId?: string | null,
    noteUserId?: string | null,
  } | null,
};

export type UpdateNoteMutationVariables = {
  input: UpdateNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type UpdateNoteMutation = {
  updateNote?:  {
    __typename: "Note",
    id: string,
    meetingID: string,
    meeting?:  {
      __typename: "Meeting",
      id: string,
      scheduledTime: number,
      duration: number,
      locationLink?: string | null,
      status: MeetingStatus,
      createdAt: string,
      updatedAt: string,
      relationshipMeetingsId?: string | null,
    } | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      cognitoID: string,
      firstName?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    test?: string | null,
    timestamp: number,
    createdAt: string,
    updatedAt: string,
    meetingNotesId?: string | null,
    noteMeetingId?: string | null,
    noteUserId?: string | null,
  } | null,
};

export type DeleteNoteMutationVariables = {
  input: DeleteNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type DeleteNoteMutation = {
  deleteNote?:  {
    __typename: "Note",
    id: string,
    meetingID: string,
    meeting?:  {
      __typename: "Meeting",
      id: string,
      scheduledTime: number,
      duration: number,
      locationLink?: string | null,
      status: MeetingStatus,
      createdAt: string,
      updatedAt: string,
      relationshipMeetingsId?: string | null,
    } | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      cognitoID: string,
      firstName?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    test?: string | null,
    timestamp: number,
    createdAt: string,
    updatedAt: string,
    meetingNotesId?: string | null,
    noteMeetingId?: string | null,
    noteUserId?: string | null,
  } | null,
};

export type CreateUserOrganizationsMutationVariables = {
  input: CreateUserOrganizationsInput,
  condition?: ModelUserOrganizationsConditionInput | null,
};

export type CreateUserOrganizationsMutation = {
  createUserOrganizations?:  {
    __typename: "UserOrganizations",
    id: string,
    userId: string,
    organizationId: string,
    user:  {
      __typename: "User",
      id: string,
      cognitoID: string,
      firstName?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    },
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserOrganizationsMutationVariables = {
  input: UpdateUserOrganizationsInput,
  condition?: ModelUserOrganizationsConditionInput | null,
};

export type UpdateUserOrganizationsMutation = {
  updateUserOrganizations?:  {
    __typename: "UserOrganizations",
    id: string,
    userId: string,
    organizationId: string,
    user:  {
      __typename: "User",
      id: string,
      cognitoID: string,
      firstName?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    },
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserOrganizationsMutationVariables = {
  input: DeleteUserOrganizationsInput,
  condition?: ModelUserOrganizationsConditionInput | null,
};

export type DeleteUserOrganizationsMutation = {
  deleteUserOrganizations?:  {
    __typename: "UserOrganizations",
    id: string,
    userId: string,
    organizationId: string,
    user:  {
      __typename: "User",
      id: string,
      cognitoID: string,
      firstName?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    },
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    cognitoID: string,
    firstName?: string | null,
    email: string,
    relationships?:  {
      __typename: "ModelRelationshipConnection",
      nextToken?: string | null,
    } | null,
    organizations?:  {
      __typename: "ModelUserOrganizationsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      cognitoID: string,
      firstName?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOrganizationQueryVariables = {
  id: string,
};

export type GetOrganizationQuery = {
  getOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    description?: string | null,
    users?:  {
      __typename: "ModelUserOrganizationsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOrganizationsQueryVariables = {
  filter?: ModelOrganizationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrganizationsQuery = {
  listOrganizations?:  {
    __typename: "ModelOrganizationConnection",
    items:  Array< {
      __typename: "Organization",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRelationshipQueryVariables = {
  id: string,
};

export type GetRelationshipQuery = {
  getRelationship?:  {
    __typename: "Relationship",
    id: string,
    name?: string | null,
    description?: string | null,
    requestor?:  {
      __typename: "User",
      id: string,
      cognitoID: string,
      firstName?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    employee?:  {
      __typename: "User",
      id: string,
      cognitoID: string,
      firstName?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    meetings?:  {
      __typename: "ModelMeetingConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userRelationshipsId?: string | null,
    relationshipRequestorId?: string | null,
    relationshipEmployeeId?: string | null,
  } | null,
};

export type ListRelationshipsQueryVariables = {
  filter?: ModelRelationshipFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRelationshipsQuery = {
  listRelationships?:  {
    __typename: "ModelRelationshipConnection",
    items:  Array< {
      __typename: "Relationship",
      id: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      userRelationshipsId?: string | null,
      relationshipRequestorId?: string | null,
      relationshipEmployeeId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMeetingQueryVariables = {
  id: string,
};

export type GetMeetingQuery = {
  getMeeting?:  {
    __typename: "Meeting",
    id: string,
    scheduledTime: number,
    duration: number,
    locationLink?: string | null,
    status: MeetingStatus,
    agendaItems?:  {
      __typename: "ModelAgendaItemConnection",
      nextToken?: string | null,
    } | null,
    actionItems?:  {
      __typename: "ModelActionItemConnection",
      nextToken?: string | null,
    } | null,
    notes?:  {
      __typename: "ModelNoteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    relationshipMeetingsId?: string | null,
  } | null,
};

export type ListMeetingsQueryVariables = {
  filter?: ModelMeetingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMeetingsQuery = {
  listMeetings?:  {
    __typename: "ModelMeetingConnection",
    items:  Array< {
      __typename: "Meeting",
      id: string,
      scheduledTime: number,
      duration: number,
      locationLink?: string | null,
      status: MeetingStatus,
      createdAt: string,
      updatedAt: string,
      relationshipMeetingsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAgendaItemQueryVariables = {
  id: string,
};

export type GetAgendaItemQuery = {
  getAgendaItem?:  {
    __typename: "AgendaItem",
    id: string,
    meetingID: string,
    meeting?:  {
      __typename: "Meeting",
      id: string,
      scheduledTime: number,
      duration: number,
      locationLink?: string | null,
      status: MeetingStatus,
      createdAt: string,
      updatedAt: string,
      relationshipMeetingsId?: string | null,
    } | null,
    title: string,
    description?: string | null,
    duration?: number | null,
    order?: number | null,
    status: AgendaItemStatus,
    createdAt: string,
    updatedAt: string,
    meetingAgendaItemsId?: string | null,
    agendaItemMeetingId?: string | null,
  } | null,
};

export type ListAgendaItemsQueryVariables = {
  filter?: ModelAgendaItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAgendaItemsQuery = {
  listAgendaItems?:  {
    __typename: "ModelAgendaItemConnection",
    items:  Array< {
      __typename: "AgendaItem",
      id: string,
      meetingID: string,
      title: string,
      description?: string | null,
      duration?: number | null,
      order?: number | null,
      status: AgendaItemStatus,
      createdAt: string,
      updatedAt: string,
      meetingAgendaItemsId?: string | null,
      agendaItemMeetingId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetActionItemQueryVariables = {
  id: string,
};

export type GetActionItemQuery = {
  getActionItem?:  {
    __typename: "ActionItem",
    id: string,
    meetingID: string,
    meeting?:  {
      __typename: "Meeting",
      id: string,
      scheduledTime: number,
      duration: number,
      locationLink?: string | null,
      status: MeetingStatus,
      createdAt: string,
      updatedAt: string,
      relationshipMeetingsId?: string | null,
    } | null,
    assignedToUserID: string,
    assignedToUser?:  {
      __typename: "User",
      id: string,
      cognitoID: string,
      firstName?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    description: string,
    dueDate?: string | null,
    status: ActionItemStatus,
    createdAt: string,
    updatedAt: string,
    meetingActionItemsId?: string | null,
    actionItemMeetingId?: string | null,
    actionItemAssignedToUserId?: string | null,
  } | null,
};

export type ListActionItemsQueryVariables = {
  filter?: ModelActionItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListActionItemsQuery = {
  listActionItems?:  {
    __typename: "ModelActionItemConnection",
    items:  Array< {
      __typename: "ActionItem",
      id: string,
      meetingID: string,
      assignedToUserID: string,
      description: string,
      dueDate?: string | null,
      status: ActionItemStatus,
      createdAt: string,
      updatedAt: string,
      meetingActionItemsId?: string | null,
      actionItemMeetingId?: string | null,
      actionItemAssignedToUserId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetNoteQueryVariables = {
  id: string,
};

export type GetNoteQuery = {
  getNote?:  {
    __typename: "Note",
    id: string,
    meetingID: string,
    meeting?:  {
      __typename: "Meeting",
      id: string,
      scheduledTime: number,
      duration: number,
      locationLink?: string | null,
      status: MeetingStatus,
      createdAt: string,
      updatedAt: string,
      relationshipMeetingsId?: string | null,
    } | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      cognitoID: string,
      firstName?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    test?: string | null,
    timestamp: number,
    createdAt: string,
    updatedAt: string,
    meetingNotesId?: string | null,
    noteMeetingId?: string | null,
    noteUserId?: string | null,
  } | null,
};

export type ListNotesQueryVariables = {
  filter?: ModelNoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNotesQuery = {
  listNotes?:  {
    __typename: "ModelNoteConnection",
    items:  Array< {
      __typename: "Note",
      id: string,
      meetingID: string,
      userID: string,
      content: string,
      test?: string | null,
      timestamp: number,
      createdAt: string,
      updatedAt: string,
      meetingNotesId?: string | null,
      noteMeetingId?: string | null,
      noteUserId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserOrganizationsQueryVariables = {
  id: string,
};

export type GetUserOrganizationsQuery = {
  getUserOrganizations?:  {
    __typename: "UserOrganizations",
    id: string,
    userId: string,
    organizationId: string,
    user:  {
      __typename: "User",
      id: string,
      cognitoID: string,
      firstName?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    },
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserOrganizationsQueryVariables = {
  filter?: ModelUserOrganizationsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserOrganizationsQuery = {
  listUserOrganizations?:  {
    __typename: "ModelUserOrganizationsConnection",
    items:  Array< {
      __typename: "UserOrganizations",
      id: string,
      userId: string,
      organizationId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserOrganizationsByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserOrganizationsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserOrganizationsByUserIdQuery = {
  userOrganizationsByUserId?:  {
    __typename: "ModelUserOrganizationsConnection",
    items:  Array< {
      __typename: "UserOrganizations",
      id: string,
      userId: string,
      organizationId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserOrganizationsByOrganizationIdQueryVariables = {
  organizationId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserOrganizationsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserOrganizationsByOrganizationIdQuery = {
  userOrganizationsByOrganizationId?:  {
    __typename: "ModelUserOrganizationsConnection",
    items:  Array< {
      __typename: "UserOrganizations",
      id: string,
      userId: string,
      organizationId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    cognitoID: string,
    firstName?: string | null,
    email: string,
    relationships?:  {
      __typename: "ModelRelationshipConnection",
      nextToken?: string | null,
    } | null,
    organizations?:  {
      __typename: "ModelUserOrganizationsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    cognitoID: string,
    firstName?: string | null,
    email: string,
    relationships?:  {
      __typename: "ModelRelationshipConnection",
      nextToken?: string | null,
    } | null,
    organizations?:  {
      __typename: "ModelUserOrganizationsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    cognitoID: string,
    firstName?: string | null,
    email: string,
    relationships?:  {
      __typename: "ModelRelationshipConnection",
      nextToken?: string | null,
    } | null,
    organizations?:  {
      __typename: "ModelUserOrganizationsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateOrganizationSubscriptionVariables = {
  filter?: ModelSubscriptionOrganizationFilterInput | null,
};

export type OnCreateOrganizationSubscription = {
  onCreateOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    description?: string | null,
    users?:  {
      __typename: "ModelUserOrganizationsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOrganizationSubscriptionVariables = {
  filter?: ModelSubscriptionOrganizationFilterInput | null,
};

export type OnUpdateOrganizationSubscription = {
  onUpdateOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    description?: string | null,
    users?:  {
      __typename: "ModelUserOrganizationsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOrganizationSubscriptionVariables = {
  filter?: ModelSubscriptionOrganizationFilterInput | null,
};

export type OnDeleteOrganizationSubscription = {
  onDeleteOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    description?: string | null,
    users?:  {
      __typename: "ModelUserOrganizationsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRelationshipSubscriptionVariables = {
  filter?: ModelSubscriptionRelationshipFilterInput | null,
};

export type OnCreateRelationshipSubscription = {
  onCreateRelationship?:  {
    __typename: "Relationship",
    id: string,
    name?: string | null,
    description?: string | null,
    requestor?:  {
      __typename: "User",
      id: string,
      cognitoID: string,
      firstName?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    employee?:  {
      __typename: "User",
      id: string,
      cognitoID: string,
      firstName?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    meetings?:  {
      __typename: "ModelMeetingConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userRelationshipsId?: string | null,
    relationshipRequestorId?: string | null,
    relationshipEmployeeId?: string | null,
  } | null,
};

export type OnUpdateRelationshipSubscriptionVariables = {
  filter?: ModelSubscriptionRelationshipFilterInput | null,
};

export type OnUpdateRelationshipSubscription = {
  onUpdateRelationship?:  {
    __typename: "Relationship",
    id: string,
    name?: string | null,
    description?: string | null,
    requestor?:  {
      __typename: "User",
      id: string,
      cognitoID: string,
      firstName?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    employee?:  {
      __typename: "User",
      id: string,
      cognitoID: string,
      firstName?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    meetings?:  {
      __typename: "ModelMeetingConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userRelationshipsId?: string | null,
    relationshipRequestorId?: string | null,
    relationshipEmployeeId?: string | null,
  } | null,
};

export type OnDeleteRelationshipSubscriptionVariables = {
  filter?: ModelSubscriptionRelationshipFilterInput | null,
};

export type OnDeleteRelationshipSubscription = {
  onDeleteRelationship?:  {
    __typename: "Relationship",
    id: string,
    name?: string | null,
    description?: string | null,
    requestor?:  {
      __typename: "User",
      id: string,
      cognitoID: string,
      firstName?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    employee?:  {
      __typename: "User",
      id: string,
      cognitoID: string,
      firstName?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    meetings?:  {
      __typename: "ModelMeetingConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userRelationshipsId?: string | null,
    relationshipRequestorId?: string | null,
    relationshipEmployeeId?: string | null,
  } | null,
};

export type OnCreateMeetingSubscriptionVariables = {
  filter?: ModelSubscriptionMeetingFilterInput | null,
};

export type OnCreateMeetingSubscription = {
  onCreateMeeting?:  {
    __typename: "Meeting",
    id: string,
    scheduledTime: number,
    duration: number,
    locationLink?: string | null,
    status: MeetingStatus,
    agendaItems?:  {
      __typename: "ModelAgendaItemConnection",
      nextToken?: string | null,
    } | null,
    actionItems?:  {
      __typename: "ModelActionItemConnection",
      nextToken?: string | null,
    } | null,
    notes?:  {
      __typename: "ModelNoteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    relationshipMeetingsId?: string | null,
  } | null,
};

export type OnUpdateMeetingSubscriptionVariables = {
  filter?: ModelSubscriptionMeetingFilterInput | null,
};

export type OnUpdateMeetingSubscription = {
  onUpdateMeeting?:  {
    __typename: "Meeting",
    id: string,
    scheduledTime: number,
    duration: number,
    locationLink?: string | null,
    status: MeetingStatus,
    agendaItems?:  {
      __typename: "ModelAgendaItemConnection",
      nextToken?: string | null,
    } | null,
    actionItems?:  {
      __typename: "ModelActionItemConnection",
      nextToken?: string | null,
    } | null,
    notes?:  {
      __typename: "ModelNoteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    relationshipMeetingsId?: string | null,
  } | null,
};

export type OnDeleteMeetingSubscriptionVariables = {
  filter?: ModelSubscriptionMeetingFilterInput | null,
};

export type OnDeleteMeetingSubscription = {
  onDeleteMeeting?:  {
    __typename: "Meeting",
    id: string,
    scheduledTime: number,
    duration: number,
    locationLink?: string | null,
    status: MeetingStatus,
    agendaItems?:  {
      __typename: "ModelAgendaItemConnection",
      nextToken?: string | null,
    } | null,
    actionItems?:  {
      __typename: "ModelActionItemConnection",
      nextToken?: string | null,
    } | null,
    notes?:  {
      __typename: "ModelNoteConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    relationshipMeetingsId?: string | null,
  } | null,
};

export type OnCreateAgendaItemSubscriptionVariables = {
  filter?: ModelSubscriptionAgendaItemFilterInput | null,
};

export type OnCreateAgendaItemSubscription = {
  onCreateAgendaItem?:  {
    __typename: "AgendaItem",
    id: string,
    meetingID: string,
    meeting?:  {
      __typename: "Meeting",
      id: string,
      scheduledTime: number,
      duration: number,
      locationLink?: string | null,
      status: MeetingStatus,
      createdAt: string,
      updatedAt: string,
      relationshipMeetingsId?: string | null,
    } | null,
    title: string,
    description?: string | null,
    duration?: number | null,
    order?: number | null,
    status: AgendaItemStatus,
    createdAt: string,
    updatedAt: string,
    meetingAgendaItemsId?: string | null,
    agendaItemMeetingId?: string | null,
  } | null,
};

export type OnUpdateAgendaItemSubscriptionVariables = {
  filter?: ModelSubscriptionAgendaItemFilterInput | null,
};

export type OnUpdateAgendaItemSubscription = {
  onUpdateAgendaItem?:  {
    __typename: "AgendaItem",
    id: string,
    meetingID: string,
    meeting?:  {
      __typename: "Meeting",
      id: string,
      scheduledTime: number,
      duration: number,
      locationLink?: string | null,
      status: MeetingStatus,
      createdAt: string,
      updatedAt: string,
      relationshipMeetingsId?: string | null,
    } | null,
    title: string,
    description?: string | null,
    duration?: number | null,
    order?: number | null,
    status: AgendaItemStatus,
    createdAt: string,
    updatedAt: string,
    meetingAgendaItemsId?: string | null,
    agendaItemMeetingId?: string | null,
  } | null,
};

export type OnDeleteAgendaItemSubscriptionVariables = {
  filter?: ModelSubscriptionAgendaItemFilterInput | null,
};

export type OnDeleteAgendaItemSubscription = {
  onDeleteAgendaItem?:  {
    __typename: "AgendaItem",
    id: string,
    meetingID: string,
    meeting?:  {
      __typename: "Meeting",
      id: string,
      scheduledTime: number,
      duration: number,
      locationLink?: string | null,
      status: MeetingStatus,
      createdAt: string,
      updatedAt: string,
      relationshipMeetingsId?: string | null,
    } | null,
    title: string,
    description?: string | null,
    duration?: number | null,
    order?: number | null,
    status: AgendaItemStatus,
    createdAt: string,
    updatedAt: string,
    meetingAgendaItemsId?: string | null,
    agendaItemMeetingId?: string | null,
  } | null,
};

export type OnCreateActionItemSubscriptionVariables = {
  filter?: ModelSubscriptionActionItemFilterInput | null,
};

export type OnCreateActionItemSubscription = {
  onCreateActionItem?:  {
    __typename: "ActionItem",
    id: string,
    meetingID: string,
    meeting?:  {
      __typename: "Meeting",
      id: string,
      scheduledTime: number,
      duration: number,
      locationLink?: string | null,
      status: MeetingStatus,
      createdAt: string,
      updatedAt: string,
      relationshipMeetingsId?: string | null,
    } | null,
    assignedToUserID: string,
    assignedToUser?:  {
      __typename: "User",
      id: string,
      cognitoID: string,
      firstName?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    description: string,
    dueDate?: string | null,
    status: ActionItemStatus,
    createdAt: string,
    updatedAt: string,
    meetingActionItemsId?: string | null,
    actionItemMeetingId?: string | null,
    actionItemAssignedToUserId?: string | null,
  } | null,
};

export type OnUpdateActionItemSubscriptionVariables = {
  filter?: ModelSubscriptionActionItemFilterInput | null,
};

export type OnUpdateActionItemSubscription = {
  onUpdateActionItem?:  {
    __typename: "ActionItem",
    id: string,
    meetingID: string,
    meeting?:  {
      __typename: "Meeting",
      id: string,
      scheduledTime: number,
      duration: number,
      locationLink?: string | null,
      status: MeetingStatus,
      createdAt: string,
      updatedAt: string,
      relationshipMeetingsId?: string | null,
    } | null,
    assignedToUserID: string,
    assignedToUser?:  {
      __typename: "User",
      id: string,
      cognitoID: string,
      firstName?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    description: string,
    dueDate?: string | null,
    status: ActionItemStatus,
    createdAt: string,
    updatedAt: string,
    meetingActionItemsId?: string | null,
    actionItemMeetingId?: string | null,
    actionItemAssignedToUserId?: string | null,
  } | null,
};

export type OnDeleteActionItemSubscriptionVariables = {
  filter?: ModelSubscriptionActionItemFilterInput | null,
};

export type OnDeleteActionItemSubscription = {
  onDeleteActionItem?:  {
    __typename: "ActionItem",
    id: string,
    meetingID: string,
    meeting?:  {
      __typename: "Meeting",
      id: string,
      scheduledTime: number,
      duration: number,
      locationLink?: string | null,
      status: MeetingStatus,
      createdAt: string,
      updatedAt: string,
      relationshipMeetingsId?: string | null,
    } | null,
    assignedToUserID: string,
    assignedToUser?:  {
      __typename: "User",
      id: string,
      cognitoID: string,
      firstName?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    description: string,
    dueDate?: string | null,
    status: ActionItemStatus,
    createdAt: string,
    updatedAt: string,
    meetingActionItemsId?: string | null,
    actionItemMeetingId?: string | null,
    actionItemAssignedToUserId?: string | null,
  } | null,
};

export type OnCreateNoteSubscriptionVariables = {
  filter?: ModelSubscriptionNoteFilterInput | null,
};

export type OnCreateNoteSubscription = {
  onCreateNote?:  {
    __typename: "Note",
    id: string,
    meetingID: string,
    meeting?:  {
      __typename: "Meeting",
      id: string,
      scheduledTime: number,
      duration: number,
      locationLink?: string | null,
      status: MeetingStatus,
      createdAt: string,
      updatedAt: string,
      relationshipMeetingsId?: string | null,
    } | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      cognitoID: string,
      firstName?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    test?: string | null,
    timestamp: number,
    createdAt: string,
    updatedAt: string,
    meetingNotesId?: string | null,
    noteMeetingId?: string | null,
    noteUserId?: string | null,
  } | null,
};

export type OnUpdateNoteSubscriptionVariables = {
  filter?: ModelSubscriptionNoteFilterInput | null,
};

export type OnUpdateNoteSubscription = {
  onUpdateNote?:  {
    __typename: "Note",
    id: string,
    meetingID: string,
    meeting?:  {
      __typename: "Meeting",
      id: string,
      scheduledTime: number,
      duration: number,
      locationLink?: string | null,
      status: MeetingStatus,
      createdAt: string,
      updatedAt: string,
      relationshipMeetingsId?: string | null,
    } | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      cognitoID: string,
      firstName?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    test?: string | null,
    timestamp: number,
    createdAt: string,
    updatedAt: string,
    meetingNotesId?: string | null,
    noteMeetingId?: string | null,
    noteUserId?: string | null,
  } | null,
};

export type OnDeleteNoteSubscriptionVariables = {
  filter?: ModelSubscriptionNoteFilterInput | null,
};

export type OnDeleteNoteSubscription = {
  onDeleteNote?:  {
    __typename: "Note",
    id: string,
    meetingID: string,
    meeting?:  {
      __typename: "Meeting",
      id: string,
      scheduledTime: number,
      duration: number,
      locationLink?: string | null,
      status: MeetingStatus,
      createdAt: string,
      updatedAt: string,
      relationshipMeetingsId?: string | null,
    } | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      cognitoID: string,
      firstName?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    test?: string | null,
    timestamp: number,
    createdAt: string,
    updatedAt: string,
    meetingNotesId?: string | null,
    noteMeetingId?: string | null,
    noteUserId?: string | null,
  } | null,
};

export type OnCreateUserOrganizationsSubscriptionVariables = {
  filter?: ModelSubscriptionUserOrganizationsFilterInput | null,
};

export type OnCreateUserOrganizationsSubscription = {
  onCreateUserOrganizations?:  {
    __typename: "UserOrganizations",
    id: string,
    userId: string,
    organizationId: string,
    user:  {
      __typename: "User",
      id: string,
      cognitoID: string,
      firstName?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    },
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserOrganizationsSubscriptionVariables = {
  filter?: ModelSubscriptionUserOrganizationsFilterInput | null,
};

export type OnUpdateUserOrganizationsSubscription = {
  onUpdateUserOrganizations?:  {
    __typename: "UserOrganizations",
    id: string,
    userId: string,
    organizationId: string,
    user:  {
      __typename: "User",
      id: string,
      cognitoID: string,
      firstName?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    },
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserOrganizationsSubscriptionVariables = {
  filter?: ModelSubscriptionUserOrganizationsFilterInput | null,
};

export type OnDeleteUserOrganizationsSubscription = {
  onDeleteUserOrganizations?:  {
    __typename: "UserOrganizations",
    id: string,
    userId: string,
    organizationId: string,
    user:  {
      __typename: "User",
      id: string,
      cognitoID: string,
      firstName?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    },
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
