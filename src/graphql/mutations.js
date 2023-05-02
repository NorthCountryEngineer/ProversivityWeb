/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      text
      createdAt
      ownerId
      updatedAt
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      text
      createdAt
      ownerId
      updatedAt
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      text
      createdAt
      ownerId
      updatedAt
    }
  }
`;
export const createResume = /* GraphQL */ `
  mutation CreateResume(
    $input: CreateResumeInput!
    $condition: ModelResumeConditionInput
  ) {
    createResume(input: $input, condition: $condition) {
      id
      userProvidedID
      Title
      Author
      SharePool {
        id
        DelegatedOwners
        Viewers
        AuthorizedUserPools {
          nextToken
        }
        resume {
          id
          userProvidedID
          Title
          Author
          Skills
          Status
          createdAt
          updatedAt
          resumeSharePoolId
          resumePersonalDataId
          resumeOverviewId
        }
        resumeId
        createdAt
        updatedAt
      }
      PersonalData {
        id
        Owner
        First
        Middle
        Last
        Acronyms
        Address {
          id
          Street
          City
          State
          Zip
          createdAt
          updatedAt
        }
        Contact {
          id
          email
          phone
          createdAt
          updatedAt
        }
        JobTitle
        LinkedIn
        Reddit
        Twitter
        Facebook
        Github
        createdAt
        updatedAt
        personalDataAddressId
        personalDataContactId
      }
      Overview {
        id
        Summary {
          id
          Summary
          createdAt
          updatedAt
        }
        Accomplishments {
          nextToken
        }
        Resume {
          id
          userProvidedID
          Title
          Author
          Skills
          Status
          createdAt
          updatedAt
          resumeSharePoolId
          resumePersonalDataId
          resumeOverviewId
        }
        createdAt
        updatedAt
        overviewSummaryId
        overviewResumeId
      }
      Experience {
        items {
          id
          resumeId
          experienceId
          createdAt
          updatedAt
        }
        nextToken
      }
      Education {
        items {
          id
          resumeId
          educationId
          createdAt
          updatedAt
        }
        nextToken
      }
      Skills
      Status
      createdAt
      updatedAt
      resumeSharePoolId
      resumePersonalDataId
      resumeOverviewId
    }
  }
`;
export const updateResume = /* GraphQL */ `
  mutation UpdateResume(
    $input: UpdateResumeInput!
    $condition: ModelResumeConditionInput
  ) {
    updateResume(input: $input, condition: $condition) {
      id
      userProvidedID
      Title
      Author
      SharePool {
        id
        DelegatedOwners
        Viewers
        AuthorizedUserPools {
          nextToken
        }
        resume {
          id
          userProvidedID
          Title
          Author
          Skills
          Status
          createdAt
          updatedAt
          resumeSharePoolId
          resumePersonalDataId
          resumeOverviewId
        }
        resumeId
        createdAt
        updatedAt
      }
      PersonalData {
        id
        Owner
        First
        Middle
        Last
        Acronyms
        Address {
          id
          Street
          City
          State
          Zip
          createdAt
          updatedAt
        }
        Contact {
          id
          email
          phone
          createdAt
          updatedAt
        }
        JobTitle
        LinkedIn
        Reddit
        Twitter
        Facebook
        Github
        createdAt
        updatedAt
        personalDataAddressId
        personalDataContactId
      }
      Overview {
        id
        Summary {
          id
          Summary
          createdAt
          updatedAt
        }
        Accomplishments {
          nextToken
        }
        Resume {
          id
          userProvidedID
          Title
          Author
          Skills
          Status
          createdAt
          updatedAt
          resumeSharePoolId
          resumePersonalDataId
          resumeOverviewId
        }
        createdAt
        updatedAt
        overviewSummaryId
        overviewResumeId
      }
      Experience {
        items {
          id
          resumeId
          experienceId
          createdAt
          updatedAt
        }
        nextToken
      }
      Education {
        items {
          id
          resumeId
          educationId
          createdAt
          updatedAt
        }
        nextToken
      }
      Skills
      Status
      createdAt
      updatedAt
      resumeSharePoolId
      resumePersonalDataId
      resumeOverviewId
    }
  }
`;
export const deleteResume = /* GraphQL */ `
  mutation DeleteResume(
    $input: DeleteResumeInput!
    $condition: ModelResumeConditionInput
  ) {
    deleteResume(input: $input, condition: $condition) {
      id
      userProvidedID
      Title
      Author
      SharePool {
        id
        DelegatedOwners
        Viewers
        AuthorizedUserPools {
          nextToken
        }
        resume {
          id
          userProvidedID
          Title
          Author
          Skills
          Status
          createdAt
          updatedAt
          resumeSharePoolId
          resumePersonalDataId
          resumeOverviewId
        }
        resumeId
        createdAt
        updatedAt
      }
      PersonalData {
        id
        Owner
        First
        Middle
        Last
        Acronyms
        Address {
          id
          Street
          City
          State
          Zip
          createdAt
          updatedAt
        }
        Contact {
          id
          email
          phone
          createdAt
          updatedAt
        }
        JobTitle
        LinkedIn
        Reddit
        Twitter
        Facebook
        Github
        createdAt
        updatedAt
        personalDataAddressId
        personalDataContactId
      }
      Overview {
        id
        Summary {
          id
          Summary
          createdAt
          updatedAt
        }
        Accomplishments {
          nextToken
        }
        Resume {
          id
          userProvidedID
          Title
          Author
          Skills
          Status
          createdAt
          updatedAt
          resumeSharePoolId
          resumePersonalDataId
          resumeOverviewId
        }
        createdAt
        updatedAt
        overviewSummaryId
        overviewResumeId
      }
      Experience {
        items {
          id
          resumeId
          experienceId
          createdAt
          updatedAt
        }
        nextToken
      }
      Education {
        items {
          id
          resumeId
          educationId
          createdAt
          updatedAt
        }
        nextToken
      }
      Skills
      Status
      createdAt
      updatedAt
      resumeSharePoolId
      resumePersonalDataId
      resumeOverviewId
    }
  }
`;
export const createSharePool = /* GraphQL */ `
  mutation CreateSharePool(
    $input: CreateSharePoolInput!
    $condition: ModelSharePoolConditionInput
  ) {
    createSharePool(input: $input, condition: $condition) {
      id
      DelegatedOwners
      Viewers
      AuthorizedUserPools {
        items {
          id
          authorizationScope
          createdAt
          updatedAt
          sharePoolAuthorizedUserPoolsId
        }
        nextToken
      }
      resume {
        id
        userProvidedID
        Title
        Author
        SharePool {
          id
          DelegatedOwners
          Viewers
          resumeId
          createdAt
          updatedAt
        }
        PersonalData {
          id
          Owner
          First
          Middle
          Last
          Acronyms
          JobTitle
          LinkedIn
          Reddit
          Twitter
          Facebook
          Github
          createdAt
          updatedAt
          personalDataAddressId
          personalDataContactId
        }
        Overview {
          id
          createdAt
          updatedAt
          overviewSummaryId
          overviewResumeId
        }
        Experience {
          nextToken
        }
        Education {
          nextToken
        }
        Skills
        Status
        createdAt
        updatedAt
        resumeSharePoolId
        resumePersonalDataId
        resumeOverviewId
      }
      resumeId
      createdAt
      updatedAt
    }
  }
`;
export const updateSharePool = /* GraphQL */ `
  mutation UpdateSharePool(
    $input: UpdateSharePoolInput!
    $condition: ModelSharePoolConditionInput
  ) {
    updateSharePool(input: $input, condition: $condition) {
      id
      DelegatedOwners
      Viewers
      AuthorizedUserPools {
        items {
          id
          authorizationScope
          createdAt
          updatedAt
          sharePoolAuthorizedUserPoolsId
        }
        nextToken
      }
      resume {
        id
        userProvidedID
        Title
        Author
        SharePool {
          id
          DelegatedOwners
          Viewers
          resumeId
          createdAt
          updatedAt
        }
        PersonalData {
          id
          Owner
          First
          Middle
          Last
          Acronyms
          JobTitle
          LinkedIn
          Reddit
          Twitter
          Facebook
          Github
          createdAt
          updatedAt
          personalDataAddressId
          personalDataContactId
        }
        Overview {
          id
          createdAt
          updatedAt
          overviewSummaryId
          overviewResumeId
        }
        Experience {
          nextToken
        }
        Education {
          nextToken
        }
        Skills
        Status
        createdAt
        updatedAt
        resumeSharePoolId
        resumePersonalDataId
        resumeOverviewId
      }
      resumeId
      createdAt
      updatedAt
    }
  }
`;
export const deleteSharePool = /* GraphQL */ `
  mutation DeleteSharePool(
    $input: DeleteSharePoolInput!
    $condition: ModelSharePoolConditionInput
  ) {
    deleteSharePool(input: $input, condition: $condition) {
      id
      DelegatedOwners
      Viewers
      AuthorizedUserPools {
        items {
          id
          authorizationScope
          createdAt
          updatedAt
          sharePoolAuthorizedUserPoolsId
        }
        nextToken
      }
      resume {
        id
        userProvidedID
        Title
        Author
        SharePool {
          id
          DelegatedOwners
          Viewers
          resumeId
          createdAt
          updatedAt
        }
        PersonalData {
          id
          Owner
          First
          Middle
          Last
          Acronyms
          JobTitle
          LinkedIn
          Reddit
          Twitter
          Facebook
          Github
          createdAt
          updatedAt
          personalDataAddressId
          personalDataContactId
        }
        Overview {
          id
          createdAt
          updatedAt
          overviewSummaryId
          overviewResumeId
        }
        Experience {
          nextToken
        }
        Education {
          nextToken
        }
        Skills
        Status
        createdAt
        updatedAt
        resumeSharePoolId
        resumePersonalDataId
        resumeOverviewId
      }
      resumeId
      createdAt
      updatedAt
    }
  }
`;
export const createUserPoolMeta = /* GraphQL */ `
  mutation CreateUserPoolMeta(
    $input: CreateUserPoolMetaInput!
    $condition: ModelUserPoolMetaConditionInput
  ) {
    createUserPoolMeta(input: $input, condition: $condition) {
      id
      authorizationScope
      createdAt
      updatedAt
      sharePoolAuthorizedUserPoolsId
    }
  }
`;
export const updateUserPoolMeta = /* GraphQL */ `
  mutation UpdateUserPoolMeta(
    $input: UpdateUserPoolMetaInput!
    $condition: ModelUserPoolMetaConditionInput
  ) {
    updateUserPoolMeta(input: $input, condition: $condition) {
      id
      authorizationScope
      createdAt
      updatedAt
      sharePoolAuthorizedUserPoolsId
    }
  }
`;
export const deleteUserPoolMeta = /* GraphQL */ `
  mutation DeleteUserPoolMeta(
    $input: DeleteUserPoolMetaInput!
    $condition: ModelUserPoolMetaConditionInput
  ) {
    deleteUserPoolMeta(input: $input, condition: $condition) {
      id
      authorizationScope
      createdAt
      updatedAt
      sharePoolAuthorizedUserPoolsId
    }
  }
`;
export const createPersonalData = /* GraphQL */ `
  mutation CreatePersonalData(
    $input: CreatePersonalDataInput!
    $condition: ModelPersonalDataConditionInput
  ) {
    createPersonalData(input: $input, condition: $condition) {
      id
      Owner
      First
      Middle
      Last
      Acronyms
      Address {
        id
        Street
        City
        State
        Zip
        createdAt
        updatedAt
      }
      Contact {
        id
        email
        phone
        createdAt
        updatedAt
      }
      JobTitle
      LinkedIn
      Reddit
      Twitter
      Facebook
      Github
      createdAt
      updatedAt
      personalDataAddressId
      personalDataContactId
    }
  }
`;
export const updatePersonalData = /* GraphQL */ `
  mutation UpdatePersonalData(
    $input: UpdatePersonalDataInput!
    $condition: ModelPersonalDataConditionInput
  ) {
    updatePersonalData(input: $input, condition: $condition) {
      id
      Owner
      First
      Middle
      Last
      Acronyms
      Address {
        id
        Street
        City
        State
        Zip
        createdAt
        updatedAt
      }
      Contact {
        id
        email
        phone
        createdAt
        updatedAt
      }
      JobTitle
      LinkedIn
      Reddit
      Twitter
      Facebook
      Github
      createdAt
      updatedAt
      personalDataAddressId
      personalDataContactId
    }
  }
`;
export const deletePersonalData = /* GraphQL */ `
  mutation DeletePersonalData(
    $input: DeletePersonalDataInput!
    $condition: ModelPersonalDataConditionInput
  ) {
    deletePersonalData(input: $input, condition: $condition) {
      id
      Owner
      First
      Middle
      Last
      Acronyms
      Address {
        id
        Street
        City
        State
        Zip
        createdAt
        updatedAt
      }
      Contact {
        id
        email
        phone
        createdAt
        updatedAt
      }
      JobTitle
      LinkedIn
      Reddit
      Twitter
      Facebook
      Github
      createdAt
      updatedAt
      personalDataAddressId
      personalDataContactId
    }
  }
`;
export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
    $input: CreateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    createAddress(input: $input, condition: $condition) {
      id
      Street
      City
      State
      Zip
      createdAt
      updatedAt
    }
  }
`;
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
    $input: UpdateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    updateAddress(input: $input, condition: $condition) {
      id
      Street
      City
      State
      Zip
      createdAt
      updatedAt
    }
  }
`;
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
    $input: DeleteAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    deleteAddress(input: $input, condition: $condition) {
      id
      Street
      City
      State
      Zip
      createdAt
      updatedAt
    }
  }
`;
export const createContact = /* GraphQL */ `
  mutation CreateContact(
    $input: CreateContactInput!
    $condition: ModelContactConditionInput
  ) {
    createContact(input: $input, condition: $condition) {
      id
      email
      phone
      createdAt
      updatedAt
    }
  }
`;
export const updateContact = /* GraphQL */ `
  mutation UpdateContact(
    $input: UpdateContactInput!
    $condition: ModelContactConditionInput
  ) {
    updateContact(input: $input, condition: $condition) {
      id
      email
      phone
      createdAt
      updatedAt
    }
  }
`;
export const deleteContact = /* GraphQL */ `
  mutation DeleteContact(
    $input: DeleteContactInput!
    $condition: ModelContactConditionInput
  ) {
    deleteContact(input: $input, condition: $condition) {
      id
      email
      phone
      createdAt
      updatedAt
    }
  }
`;
export const createOverview = /* GraphQL */ `
  mutation CreateOverview(
    $input: CreateOverviewInput!
    $condition: ModelOverviewConditionInput
  ) {
    createOverview(input: $input, condition: $condition) {
      id
      Summary {
        id
        Summary
        createdAt
        updatedAt
      }
      Accomplishments {
        items {
          id
          Accomplishment
          createdAt
          updatedAt
          overviewAccomplishmentsId
        }
        nextToken
      }
      Resume {
        id
        userProvidedID
        Title
        Author
        SharePool {
          id
          DelegatedOwners
          Viewers
          resumeId
          createdAt
          updatedAt
        }
        PersonalData {
          id
          Owner
          First
          Middle
          Last
          Acronyms
          JobTitle
          LinkedIn
          Reddit
          Twitter
          Facebook
          Github
          createdAt
          updatedAt
          personalDataAddressId
          personalDataContactId
        }
        Overview {
          id
          createdAt
          updatedAt
          overviewSummaryId
          overviewResumeId
        }
        Experience {
          nextToken
        }
        Education {
          nextToken
        }
        Skills
        Status
        createdAt
        updatedAt
        resumeSharePoolId
        resumePersonalDataId
        resumeOverviewId
      }
      createdAt
      updatedAt
      overviewSummaryId
      overviewResumeId
    }
  }
`;
export const updateOverview = /* GraphQL */ `
  mutation UpdateOverview(
    $input: UpdateOverviewInput!
    $condition: ModelOverviewConditionInput
  ) {
    updateOverview(input: $input, condition: $condition) {
      id
      Summary {
        id
        Summary
        createdAt
        updatedAt
      }
      Accomplishments {
        items {
          id
          Accomplishment
          createdAt
          updatedAt
          overviewAccomplishmentsId
        }
        nextToken
      }
      Resume {
        id
        userProvidedID
        Title
        Author
        SharePool {
          id
          DelegatedOwners
          Viewers
          resumeId
          createdAt
          updatedAt
        }
        PersonalData {
          id
          Owner
          First
          Middle
          Last
          Acronyms
          JobTitle
          LinkedIn
          Reddit
          Twitter
          Facebook
          Github
          createdAt
          updatedAt
          personalDataAddressId
          personalDataContactId
        }
        Overview {
          id
          createdAt
          updatedAt
          overviewSummaryId
          overviewResumeId
        }
        Experience {
          nextToken
        }
        Education {
          nextToken
        }
        Skills
        Status
        createdAt
        updatedAt
        resumeSharePoolId
        resumePersonalDataId
        resumeOverviewId
      }
      createdAt
      updatedAt
      overviewSummaryId
      overviewResumeId
    }
  }
`;
export const deleteOverview = /* GraphQL */ `
  mutation DeleteOverview(
    $input: DeleteOverviewInput!
    $condition: ModelOverviewConditionInput
  ) {
    deleteOverview(input: $input, condition: $condition) {
      id
      Summary {
        id
        Summary
        createdAt
        updatedAt
      }
      Accomplishments {
        items {
          id
          Accomplishment
          createdAt
          updatedAt
          overviewAccomplishmentsId
        }
        nextToken
      }
      Resume {
        id
        userProvidedID
        Title
        Author
        SharePool {
          id
          DelegatedOwners
          Viewers
          resumeId
          createdAt
          updatedAt
        }
        PersonalData {
          id
          Owner
          First
          Middle
          Last
          Acronyms
          JobTitle
          LinkedIn
          Reddit
          Twitter
          Facebook
          Github
          createdAt
          updatedAt
          personalDataAddressId
          personalDataContactId
        }
        Overview {
          id
          createdAt
          updatedAt
          overviewSummaryId
          overviewResumeId
        }
        Experience {
          nextToken
        }
        Education {
          nextToken
        }
        Skills
        Status
        createdAt
        updatedAt
        resumeSharePoolId
        resumePersonalDataId
        resumeOverviewId
      }
      createdAt
      updatedAt
      overviewSummaryId
      overviewResumeId
    }
  }
`;
export const createSummary = /* GraphQL */ `
  mutation CreateSummary(
    $input: CreateSummaryInput!
    $condition: ModelSummaryConditionInput
  ) {
    createSummary(input: $input, condition: $condition) {
      id
      Summary
      createdAt
      updatedAt
    }
  }
`;
export const updateSummary = /* GraphQL */ `
  mutation UpdateSummary(
    $input: UpdateSummaryInput!
    $condition: ModelSummaryConditionInput
  ) {
    updateSummary(input: $input, condition: $condition) {
      id
      Summary
      createdAt
      updatedAt
    }
  }
`;
export const deleteSummary = /* GraphQL */ `
  mutation DeleteSummary(
    $input: DeleteSummaryInput!
    $condition: ModelSummaryConditionInput
  ) {
    deleteSummary(input: $input, condition: $condition) {
      id
      Summary
      createdAt
      updatedAt
    }
  }
`;
export const createAccomplishments = /* GraphQL */ `
  mutation CreateAccomplishments(
    $input: CreateAccomplishmentsInput!
    $condition: ModelAccomplishmentsConditionInput
  ) {
    createAccomplishments(input: $input, condition: $condition) {
      id
      Accomplishment
      createdAt
      updatedAt
      overviewAccomplishmentsId
    }
  }
`;
export const updateAccomplishments = /* GraphQL */ `
  mutation UpdateAccomplishments(
    $input: UpdateAccomplishmentsInput!
    $condition: ModelAccomplishmentsConditionInput
  ) {
    updateAccomplishments(input: $input, condition: $condition) {
      id
      Accomplishment
      createdAt
      updatedAt
      overviewAccomplishmentsId
    }
  }
`;
export const deleteAccomplishments = /* GraphQL */ `
  mutation DeleteAccomplishments(
    $input: DeleteAccomplishmentsInput!
    $condition: ModelAccomplishmentsConditionInput
  ) {
    deleteAccomplishments(input: $input, condition: $condition) {
      id
      Accomplishment
      createdAt
      updatedAt
      overviewAccomplishmentsId
    }
  }
`;
export const createExperience = /* GraphQL */ `
  mutation CreateExperience(
    $input: CreateExperienceInput!
    $condition: ModelExperienceConditionInput
  ) {
    createExperience(input: $input, condition: $condition) {
      id
      Company
      Start
      End
      IsCurrent
      JobTitle
      Organization
      Title
      BulletPoints
      Resumes {
        items {
          id
          resumeId
          experienceId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateExperience = /* GraphQL */ `
  mutation UpdateExperience(
    $input: UpdateExperienceInput!
    $condition: ModelExperienceConditionInput
  ) {
    updateExperience(input: $input, condition: $condition) {
      id
      Company
      Start
      End
      IsCurrent
      JobTitle
      Organization
      Title
      BulletPoints
      Resumes {
        items {
          id
          resumeId
          experienceId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteExperience = /* GraphQL */ `
  mutation DeleteExperience(
    $input: DeleteExperienceInput!
    $condition: ModelExperienceConditionInput
  ) {
    deleteExperience(input: $input, condition: $condition) {
      id
      Company
      Start
      End
      IsCurrent
      JobTitle
      Organization
      Title
      BulletPoints
      Resumes {
        items {
          id
          resumeId
          experienceId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createEducation = /* GraphQL */ `
  mutation CreateEducation(
    $input: CreateEducationInput!
    $condition: ModelEducationConditionInput
  ) {
    createEducation(input: $input, condition: $condition) {
      id
      Degree
      School
      Start
      End
      Overview
      Resumes {
        items {
          id
          resumeId
          educationId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateEducation = /* GraphQL */ `
  mutation UpdateEducation(
    $input: UpdateEducationInput!
    $condition: ModelEducationConditionInput
  ) {
    updateEducation(input: $input, condition: $condition) {
      id
      Degree
      School
      Start
      End
      Overview
      Resumes {
        items {
          id
          resumeId
          educationId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteEducation = /* GraphQL */ `
  mutation DeleteEducation(
    $input: DeleteEducationInput!
    $condition: ModelEducationConditionInput
  ) {
    deleteEducation(input: $input, condition: $condition) {
      id
      Degree
      School
      Start
      End
      Overview
      Resumes {
        items {
          id
          resumeId
          educationId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createUIKey = /* GraphQL */ `
  mutation CreateUIKey(
    $input: CreateUIKeyInput!
    $condition: ModelUIKeyConditionInput
  ) {
    createUIKey(input: $input, condition: $condition) {
      id
      MuiKey
      createdAt
      updatedAt
    }
  }
`;
export const updateUIKey = /* GraphQL */ `
  mutation UpdateUIKey(
    $input: UpdateUIKeyInput!
    $condition: ModelUIKeyConditionInput
  ) {
    updateUIKey(input: $input, condition: $condition) {
      id
      MuiKey
      createdAt
      updatedAt
    }
  }
`;
export const deleteUIKey = /* GraphQL */ `
  mutation DeleteUIKey(
    $input: DeleteUIKeyInput!
    $condition: ModelUIKeyConditionInput
  ) {
    deleteUIKey(input: $input, condition: $condition) {
      id
      MuiKey
      createdAt
      updatedAt
    }
  }
`;
export const createUserPreferences = /* GraphQL */ `
  mutation CreateUserPreferences(
    $input: CreateUserPreferencesInput!
    $condition: ModelUserPreferencesConditionInput
  ) {
    createUserPreferences(input: $input, condition: $condition) {
      id
      User
      DisplayName
      DarkMode
      createdAt
      updatedAt
    }
  }
`;
export const updateUserPreferences = /* GraphQL */ `
  mutation UpdateUserPreferences(
    $input: UpdateUserPreferencesInput!
    $condition: ModelUserPreferencesConditionInput
  ) {
    updateUserPreferences(input: $input, condition: $condition) {
      id
      User
      DisplayName
      DarkMode
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserPreferences = /* GraphQL */ `
  mutation DeleteUserPreferences(
    $input: DeleteUserPreferencesInput!
    $condition: ModelUserPreferencesConditionInput
  ) {
    deleteUserPreferences(input: $input, condition: $condition) {
      id
      User
      DisplayName
      DarkMode
      createdAt
      updatedAt
    }
  }
`;
export const createResumeExperience = /* GraphQL */ `
  mutation CreateResumeExperience(
    $input: CreateResumeExperienceInput!
    $condition: ModelResumeExperienceConditionInput
  ) {
    createResumeExperience(input: $input, condition: $condition) {
      id
      resumeId
      experienceId
      resume {
        id
        userProvidedID
        Title
        Author
        SharePool {
          id
          DelegatedOwners
          Viewers
          resumeId
          createdAt
          updatedAt
        }
        PersonalData {
          id
          Owner
          First
          Middle
          Last
          Acronyms
          JobTitle
          LinkedIn
          Reddit
          Twitter
          Facebook
          Github
          createdAt
          updatedAt
          personalDataAddressId
          personalDataContactId
        }
        Overview {
          id
          createdAt
          updatedAt
          overviewSummaryId
          overviewResumeId
        }
        Experience {
          nextToken
        }
        Education {
          nextToken
        }
        Skills
        Status
        createdAt
        updatedAt
        resumeSharePoolId
        resumePersonalDataId
        resumeOverviewId
      }
      experience {
        id
        Company
        Start
        End
        IsCurrent
        JobTitle
        Organization
        Title
        BulletPoints
        Resumes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateResumeExperience = /* GraphQL */ `
  mutation UpdateResumeExperience(
    $input: UpdateResumeExperienceInput!
    $condition: ModelResumeExperienceConditionInput
  ) {
    updateResumeExperience(input: $input, condition: $condition) {
      id
      resumeId
      experienceId
      resume {
        id
        userProvidedID
        Title
        Author
        SharePool {
          id
          DelegatedOwners
          Viewers
          resumeId
          createdAt
          updatedAt
        }
        PersonalData {
          id
          Owner
          First
          Middle
          Last
          Acronyms
          JobTitle
          LinkedIn
          Reddit
          Twitter
          Facebook
          Github
          createdAt
          updatedAt
          personalDataAddressId
          personalDataContactId
        }
        Overview {
          id
          createdAt
          updatedAt
          overviewSummaryId
          overviewResumeId
        }
        Experience {
          nextToken
        }
        Education {
          nextToken
        }
        Skills
        Status
        createdAt
        updatedAt
        resumeSharePoolId
        resumePersonalDataId
        resumeOverviewId
      }
      experience {
        id
        Company
        Start
        End
        IsCurrent
        JobTitle
        Organization
        Title
        BulletPoints
        Resumes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteResumeExperience = /* GraphQL */ `
  mutation DeleteResumeExperience(
    $input: DeleteResumeExperienceInput!
    $condition: ModelResumeExperienceConditionInput
  ) {
    deleteResumeExperience(input: $input, condition: $condition) {
      id
      resumeId
      experienceId
      resume {
        id
        userProvidedID
        Title
        Author
        SharePool {
          id
          DelegatedOwners
          Viewers
          resumeId
          createdAt
          updatedAt
        }
        PersonalData {
          id
          Owner
          First
          Middle
          Last
          Acronyms
          JobTitle
          LinkedIn
          Reddit
          Twitter
          Facebook
          Github
          createdAt
          updatedAt
          personalDataAddressId
          personalDataContactId
        }
        Overview {
          id
          createdAt
          updatedAt
          overviewSummaryId
          overviewResumeId
        }
        Experience {
          nextToken
        }
        Education {
          nextToken
        }
        Skills
        Status
        createdAt
        updatedAt
        resumeSharePoolId
        resumePersonalDataId
        resumeOverviewId
      }
      experience {
        id
        Company
        Start
        End
        IsCurrent
        JobTitle
        Organization
        Title
        BulletPoints
        Resumes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createResumeEducation = /* GraphQL */ `
  mutation CreateResumeEducation(
    $input: CreateResumeEducationInput!
    $condition: ModelResumeEducationConditionInput
  ) {
    createResumeEducation(input: $input, condition: $condition) {
      id
      resumeId
      educationId
      resume {
        id
        userProvidedID
        Title
        Author
        SharePool {
          id
          DelegatedOwners
          Viewers
          resumeId
          createdAt
          updatedAt
        }
        PersonalData {
          id
          Owner
          First
          Middle
          Last
          Acronyms
          JobTitle
          LinkedIn
          Reddit
          Twitter
          Facebook
          Github
          createdAt
          updatedAt
          personalDataAddressId
          personalDataContactId
        }
        Overview {
          id
          createdAt
          updatedAt
          overviewSummaryId
          overviewResumeId
        }
        Experience {
          nextToken
        }
        Education {
          nextToken
        }
        Skills
        Status
        createdAt
        updatedAt
        resumeSharePoolId
        resumePersonalDataId
        resumeOverviewId
      }
      education {
        id
        Degree
        School
        Start
        End
        Overview
        Resumes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateResumeEducation = /* GraphQL */ `
  mutation UpdateResumeEducation(
    $input: UpdateResumeEducationInput!
    $condition: ModelResumeEducationConditionInput
  ) {
    updateResumeEducation(input: $input, condition: $condition) {
      id
      resumeId
      educationId
      resume {
        id
        userProvidedID
        Title
        Author
        SharePool {
          id
          DelegatedOwners
          Viewers
          resumeId
          createdAt
          updatedAt
        }
        PersonalData {
          id
          Owner
          First
          Middle
          Last
          Acronyms
          JobTitle
          LinkedIn
          Reddit
          Twitter
          Facebook
          Github
          createdAt
          updatedAt
          personalDataAddressId
          personalDataContactId
        }
        Overview {
          id
          createdAt
          updatedAt
          overviewSummaryId
          overviewResumeId
        }
        Experience {
          nextToken
        }
        Education {
          nextToken
        }
        Skills
        Status
        createdAt
        updatedAt
        resumeSharePoolId
        resumePersonalDataId
        resumeOverviewId
      }
      education {
        id
        Degree
        School
        Start
        End
        Overview
        Resumes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteResumeEducation = /* GraphQL */ `
  mutation DeleteResumeEducation(
    $input: DeleteResumeEducationInput!
    $condition: ModelResumeEducationConditionInput
  ) {
    deleteResumeEducation(input: $input, condition: $condition) {
      id
      resumeId
      educationId
      resume {
        id
        userProvidedID
        Title
        Author
        SharePool {
          id
          DelegatedOwners
          Viewers
          resumeId
          createdAt
          updatedAt
        }
        PersonalData {
          id
          Owner
          First
          Middle
          Last
          Acronyms
          JobTitle
          LinkedIn
          Reddit
          Twitter
          Facebook
          Github
          createdAt
          updatedAt
          personalDataAddressId
          personalDataContactId
        }
        Overview {
          id
          createdAt
          updatedAt
          overviewSummaryId
          overviewResumeId
        }
        Experience {
          nextToken
        }
        Education {
          nextToken
        }
        Skills
        Status
        createdAt
        updatedAt
        resumeSharePoolId
        resumePersonalDataId
        resumeOverviewId
      }
      education {
        id
        Degree
        School
        Start
        End
        Overview
        Resumes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
