/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      owner
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
      owner
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
      owner
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
        createdAt
        updatedAt
        owner
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
          owner
        }
        Contact {
          id
          email
          phone
          createdAt
          updatedAt
          owner
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
        owner
      }
      Overview {
        id
        Summary {
          id
          Summary
          createdAt
          updatedAt
          owner
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
          owner
        }
        createdAt
        updatedAt
        overviewSummaryId
        overviewResumeId
        owner
      }
      Experience {
        items {
          id
          resumeID
          experienceID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      Education {
        items {
          id
          resumeID
          educationID
          createdAt
          updatedAt
          owner
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
      owner
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
        createdAt
        updatedAt
        owner
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
          owner
        }
        Contact {
          id
          email
          phone
          createdAt
          updatedAt
          owner
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
        owner
      }
      Overview {
        id
        Summary {
          id
          Summary
          createdAt
          updatedAt
          owner
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
          owner
        }
        createdAt
        updatedAt
        overviewSummaryId
        overviewResumeId
        owner
      }
      Experience {
        items {
          id
          resumeID
          experienceID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      Education {
        items {
          id
          resumeID
          educationID
          createdAt
          updatedAt
          owner
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
      owner
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
        createdAt
        updatedAt
        owner
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
          owner
        }
        Contact {
          id
          email
          phone
          createdAt
          updatedAt
          owner
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
        owner
      }
      Overview {
        id
        Summary {
          id
          Summary
          createdAt
          updatedAt
          owner
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
          owner
        }
        createdAt
        updatedAt
        overviewSummaryId
        overviewResumeId
        owner
      }
      Experience {
        items {
          id
          resumeID
          experienceID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      Education {
        items {
          id
          resumeID
          educationID
          createdAt
          updatedAt
          owner
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
      owner
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
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
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
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
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
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
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
      owner
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
      owner
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
      owner
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
        owner
      }
      Contact {
        id
        email
        phone
        createdAt
        updatedAt
        owner
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
      owner
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
        owner
      }
      Contact {
        id
        email
        phone
        createdAt
        updatedAt
        owner
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
      owner
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
        owner
      }
      Contact {
        id
        email
        phone
        createdAt
        updatedAt
        owner
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
      owner
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
      owner
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
      owner
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
      owner
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
      owner
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
      owner
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
      owner
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
        owner
      }
      Accomplishments {
        items {
          id
          Accomplishment
          createdAt
          updatedAt
          overviewAccomplishmentsId
          owner
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
          createdAt
          updatedAt
          owner
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
          owner
        }
        Overview {
          id
          createdAt
          updatedAt
          overviewSummaryId
          overviewResumeId
          owner
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
        owner
      }
      createdAt
      updatedAt
      overviewSummaryId
      overviewResumeId
      owner
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
        owner
      }
      Accomplishments {
        items {
          id
          Accomplishment
          createdAt
          updatedAt
          overviewAccomplishmentsId
          owner
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
          createdAt
          updatedAt
          owner
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
          owner
        }
        Overview {
          id
          createdAt
          updatedAt
          overviewSummaryId
          overviewResumeId
          owner
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
        owner
      }
      createdAt
      updatedAt
      overviewSummaryId
      overviewResumeId
      owner
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
        owner
      }
      Accomplishments {
        items {
          id
          Accomplishment
          createdAt
          updatedAt
          overviewAccomplishmentsId
          owner
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
          createdAt
          updatedAt
          owner
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
          owner
        }
        Overview {
          id
          createdAt
          updatedAt
          overviewSummaryId
          overviewResumeId
          owner
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
        owner
      }
      createdAt
      updatedAt
      overviewSummaryId
      overviewResumeId
      owner
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
      owner
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
      owner
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
      owner
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
      owner
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
      owner
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
      owner
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
          resumeID
          experienceID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
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
          resumeID
          experienceID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
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
          resumeID
          experienceID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
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
          resumeID
          educationID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
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
          resumeID
          educationID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
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
          resumeID
          educationID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
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
      owner
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
      owner
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
      owner
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      author
      body
      createdAt
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
      author
      body
      createdAt
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
      author
      body
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
      resumeID
      experienceID
      resume {
        id
        userProvidedID
        Title
        Author
        SharePool {
          id
          DelegatedOwners
          Viewers
          createdAt
          updatedAt
          owner
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
          owner
        }
        Overview {
          id
          createdAt
          updatedAt
          overviewSummaryId
          overviewResumeId
          owner
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
        owner
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
        owner
      }
      createdAt
      updatedAt
      owner
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
      resumeID
      experienceID
      resume {
        id
        userProvidedID
        Title
        Author
        SharePool {
          id
          DelegatedOwners
          Viewers
          createdAt
          updatedAt
          owner
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
          owner
        }
        Overview {
          id
          createdAt
          updatedAt
          overviewSummaryId
          overviewResumeId
          owner
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
        owner
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
        owner
      }
      createdAt
      updatedAt
      owner
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
      resumeID
      experienceID
      resume {
        id
        userProvidedID
        Title
        Author
        SharePool {
          id
          DelegatedOwners
          Viewers
          createdAt
          updatedAt
          owner
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
          owner
        }
        Overview {
          id
          createdAt
          updatedAt
          overviewSummaryId
          overviewResumeId
          owner
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
        owner
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
        owner
      }
      createdAt
      updatedAt
      owner
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
      resumeID
      educationID
      resume {
        id
        userProvidedID
        Title
        Author
        SharePool {
          id
          DelegatedOwners
          Viewers
          createdAt
          updatedAt
          owner
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
          owner
        }
        Overview {
          id
          createdAt
          updatedAt
          overviewSummaryId
          overviewResumeId
          owner
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
        owner
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
        owner
      }
      createdAt
      updatedAt
      owner
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
      resumeID
      educationID
      resume {
        id
        userProvidedID
        Title
        Author
        SharePool {
          id
          DelegatedOwners
          Viewers
          createdAt
          updatedAt
          owner
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
          owner
        }
        Overview {
          id
          createdAt
          updatedAt
          overviewSummaryId
          overviewResumeId
          owner
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
        owner
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
        owner
      }
      createdAt
      updatedAt
      owner
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
      resumeID
      educationID
      resume {
        id
        userProvidedID
        Title
        Author
        SharePool {
          id
          DelegatedOwners
          Viewers
          createdAt
          updatedAt
          owner
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
          owner
        }
        Overview {
          id
          createdAt
          updatedAt
          overviewSummaryId
          overviewResumeId
          owner
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
        owner
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
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
