export const initialUserMetaData: userMetaData  = {
    organization: "",
    firstName: "",
    lastName: "",
    email: "",
    role: "",
  };
  
export const initialSwitchBoardData: initialSwitchBoard  = {
    isUser: false,
    loadingComplete: false,
    oneOnOneDialogueOpen: false,
    newOrganizationFieldOpen: false,
    existingOrganizationFieldOpen: false,
}

type userMetaData = {
    organization: string,
    firstName: string,
    lastName: string,
    email: string,
    role: string,
}

type initialSwitchBoard = {
    isUser: boolean,
    loadingComplete: boolean,
    oneOnOneDialogueOpen: boolean,
    newOrganizationFieldOpen: boolean,
    existingOrganizationFieldOpen: boolean,
}