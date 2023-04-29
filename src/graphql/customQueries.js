export const listUserPreferencesReducedPayload = /* GraphQL */ `
  query ListUserPreferences(
    $filter: ModelUserPreferencesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserPreferences(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        User
        DisplayName
        DarkMode
        owner
      }
      nextToken
    }
  }
`;


export const CreateResumeAndBottomLayer = /* GraphQL */ `
  mutation CreateResumeAndBottomLayer {
    createExperience(input: {Title: " ", Organization: " ", JobTitle: " ", IsCurrent: false, Company: " "}) {
      id
    }
    createContact(input: {email: " ", phone: " "}) {
      id
    }
    createEducation(input: {Degree: AA, Overview: " ", School: " "}) {
      id
    }
    createAddress(input: {City: " ", State: " ", Zip: " ", Street: " "}) {
      id
    }
    createOverview(input: {Summary: " ", Accomplishments: " "}) {
      id
    }
    createPersonalData(input: {Acronyms: " ", Facebook: " ", First: " ", Github: " ", JobTitle: " ", Last: " ", LinkedIn: " ", Middle: " ", Owner: "", Reddit: "", Twitter: ""}) {
      id
    }
    createResume(input: {Author: " ", Skills: " ", Status: DRAFT, Title: " ", userProvidedID: " "}) {
      id
    }
  }
`;