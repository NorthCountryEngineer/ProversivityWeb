/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserPreferences = /* GraphQL */ `
  subscription OnCreateUserPreferences(
    $filter: ModelSubscriptionUserPreferencesFilterInput
    $owner: String
  ) {
    onCreateUserPreferences(filter: $filter, owner: $owner) {
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
export const onUpdateUserPreferences = /* GraphQL */ `
  subscription OnUpdateUserPreferences(
    $filter: ModelSubscriptionUserPreferencesFilterInput
    $owner: String
  ) {
    onUpdateUserPreferences(filter: $filter, owner: $owner) {
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
export const onDeleteUserPreferences = /* GraphQL */ `
  subscription OnDeleteUserPreferences(
    $filter: ModelSubscriptionUserPreferencesFilterInput
    $owner: String
  ) {
    onDeleteUserPreferences(filter: $filter, owner: $owner) {
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
export const onCreateResume = /* GraphQL */ `
  subscription OnCreateResume(
    $filter: ModelSubscriptionResumeFilterInput
    $owner: String
  ) {
    onCreateResume(filter: $filter, owner: $owner) {
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
export const onUpdateResume = /* GraphQL */ `
  subscription OnUpdateResume(
    $filter: ModelSubscriptionResumeFilterInput
    $owner: String
  ) {
    onUpdateResume(filter: $filter, owner: $owner) {
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
export const onDeleteResume = /* GraphQL */ `
  subscription OnDeleteResume(
    $filter: ModelSubscriptionResumeFilterInput
    $owner: String
  ) {
    onDeleteResume(filter: $filter, owner: $owner) {
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
export const onCreateSharePool = /* GraphQL */ `
  subscription OnCreateSharePool(
    $filter: ModelSubscriptionSharePoolFilterInput
    $owner: String
  ) {
    onCreateSharePool(filter: $filter, owner: $owner) {
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
export const onUpdateSharePool = /* GraphQL */ `
  subscription OnUpdateSharePool(
    $filter: ModelSubscriptionSharePoolFilterInput
    $owner: String
  ) {
    onUpdateSharePool(filter: $filter, owner: $owner) {
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
export const onDeleteSharePool = /* GraphQL */ `
  subscription OnDeleteSharePool(
    $filter: ModelSubscriptionSharePoolFilterInput
    $owner: String
  ) {
    onDeleteSharePool(filter: $filter, owner: $owner) {
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
export const onCreateUserPoolMeta = /* GraphQL */ `
  subscription OnCreateUserPoolMeta(
    $filter: ModelSubscriptionUserPoolMetaFilterInput
    $owner: String
  ) {
    onCreateUserPoolMeta(filter: $filter, owner: $owner) {
      id
      authorizationScope
      createdAt
      updatedAt
      sharePoolAuthorizedUserPoolsId
      owner
    }
  }
`;
export const onUpdateUserPoolMeta = /* GraphQL */ `
  subscription OnUpdateUserPoolMeta(
    $filter: ModelSubscriptionUserPoolMetaFilterInput
    $owner: String
  ) {
    onUpdateUserPoolMeta(filter: $filter, owner: $owner) {
      id
      authorizationScope
      createdAt
      updatedAt
      sharePoolAuthorizedUserPoolsId
      owner
    }
  }
`;
export const onDeleteUserPoolMeta = /* GraphQL */ `
  subscription OnDeleteUserPoolMeta(
    $filter: ModelSubscriptionUserPoolMetaFilterInput
    $owner: String
  ) {
    onDeleteUserPoolMeta(filter: $filter, owner: $owner) {
      id
      authorizationScope
      createdAt
      updatedAt
      sharePoolAuthorizedUserPoolsId
      owner
    }
  }
`;
export const onCreatePersonalData = /* GraphQL */ `
  subscription OnCreatePersonalData(
    $filter: ModelSubscriptionPersonalDataFilterInput
    $owner: String
  ) {
    onCreatePersonalData(filter: $filter, owner: $owner) {
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
export const onUpdatePersonalData = /* GraphQL */ `
  subscription OnUpdatePersonalData(
    $filter: ModelSubscriptionPersonalDataFilterInput
    $owner: String
  ) {
    onUpdatePersonalData(filter: $filter, owner: $owner) {
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
export const onDeletePersonalData = /* GraphQL */ `
  subscription OnDeletePersonalData(
    $filter: ModelSubscriptionPersonalDataFilterInput
    $owner: String
  ) {
    onDeletePersonalData(filter: $filter, owner: $owner) {
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
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress(
    $filter: ModelSubscriptionAddressFilterInput
    $owner: String
  ) {
    onCreateAddress(filter: $filter, owner: $owner) {
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
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress(
    $filter: ModelSubscriptionAddressFilterInput
    $owner: String
  ) {
    onUpdateAddress(filter: $filter, owner: $owner) {
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
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress(
    $filter: ModelSubscriptionAddressFilterInput
    $owner: String
  ) {
    onDeleteAddress(filter: $filter, owner: $owner) {
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
export const onCreateContact = /* GraphQL */ `
  subscription OnCreateContact(
    $filter: ModelSubscriptionContactFilterInput
    $owner: String
  ) {
    onCreateContact(filter: $filter, owner: $owner) {
      id
      email
      phone
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateContact = /* GraphQL */ `
  subscription OnUpdateContact(
    $filter: ModelSubscriptionContactFilterInput
    $owner: String
  ) {
    onUpdateContact(filter: $filter, owner: $owner) {
      id
      email
      phone
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteContact = /* GraphQL */ `
  subscription OnDeleteContact(
    $filter: ModelSubscriptionContactFilterInput
    $owner: String
  ) {
    onDeleteContact(filter: $filter, owner: $owner) {
      id
      email
      phone
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateOverview = /* GraphQL */ `
  subscription OnCreateOverview(
    $filter: ModelSubscriptionOverviewFilterInput
    $owner: String
  ) {
    onCreateOverview(filter: $filter, owner: $owner) {
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
export const onUpdateOverview = /* GraphQL */ `
  subscription OnUpdateOverview(
    $filter: ModelSubscriptionOverviewFilterInput
    $owner: String
  ) {
    onUpdateOverview(filter: $filter, owner: $owner) {
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
export const onDeleteOverview = /* GraphQL */ `
  subscription OnDeleteOverview(
    $filter: ModelSubscriptionOverviewFilterInput
    $owner: String
  ) {
    onDeleteOverview(filter: $filter, owner: $owner) {
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
export const onCreateSummary = /* GraphQL */ `
  subscription OnCreateSummary(
    $filter: ModelSubscriptionSummaryFilterInput
    $owner: String
  ) {
    onCreateSummary(filter: $filter, owner: $owner) {
      id
      Summary
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateSummary = /* GraphQL */ `
  subscription OnUpdateSummary(
    $filter: ModelSubscriptionSummaryFilterInput
    $owner: String
  ) {
    onUpdateSummary(filter: $filter, owner: $owner) {
      id
      Summary
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteSummary = /* GraphQL */ `
  subscription OnDeleteSummary(
    $filter: ModelSubscriptionSummaryFilterInput
    $owner: String
  ) {
    onDeleteSummary(filter: $filter, owner: $owner) {
      id
      Summary
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateAccomplishments = /* GraphQL */ `
  subscription OnCreateAccomplishments(
    $filter: ModelSubscriptionAccomplishmentsFilterInput
    $owner: String
  ) {
    onCreateAccomplishments(filter: $filter, owner: $owner) {
      id
      Accomplishment
      createdAt
      updatedAt
      overviewAccomplishmentsId
      owner
    }
  }
`;
export const onUpdateAccomplishments = /* GraphQL */ `
  subscription OnUpdateAccomplishments(
    $filter: ModelSubscriptionAccomplishmentsFilterInput
    $owner: String
  ) {
    onUpdateAccomplishments(filter: $filter, owner: $owner) {
      id
      Accomplishment
      createdAt
      updatedAt
      overviewAccomplishmentsId
      owner
    }
  }
`;
export const onDeleteAccomplishments = /* GraphQL */ `
  subscription OnDeleteAccomplishments(
    $filter: ModelSubscriptionAccomplishmentsFilterInput
    $owner: String
  ) {
    onDeleteAccomplishments(filter: $filter, owner: $owner) {
      id
      Accomplishment
      createdAt
      updatedAt
      overviewAccomplishmentsId
      owner
    }
  }
`;
export const onCreateExperience = /* GraphQL */ `
  subscription OnCreateExperience(
    $filter: ModelSubscriptionExperienceFilterInput
    $owner: String
  ) {
    onCreateExperience(filter: $filter, owner: $owner) {
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
export const onUpdateExperience = /* GraphQL */ `
  subscription OnUpdateExperience(
    $filter: ModelSubscriptionExperienceFilterInput
    $owner: String
  ) {
    onUpdateExperience(filter: $filter, owner: $owner) {
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
export const onDeleteExperience = /* GraphQL */ `
  subscription OnDeleteExperience(
    $filter: ModelSubscriptionExperienceFilterInput
    $owner: String
  ) {
    onDeleteExperience(filter: $filter, owner: $owner) {
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
export const onCreateEducation = /* GraphQL */ `
  subscription OnCreateEducation(
    $filter: ModelSubscriptionEducationFilterInput
    $owner: String
  ) {
    onCreateEducation(filter: $filter, owner: $owner) {
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
export const onUpdateEducation = /* GraphQL */ `
  subscription OnUpdateEducation(
    $filter: ModelSubscriptionEducationFilterInput
    $owner: String
  ) {
    onUpdateEducation(filter: $filter, owner: $owner) {
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
export const onDeleteEducation = /* GraphQL */ `
  subscription OnDeleteEducation(
    $filter: ModelSubscriptionEducationFilterInput
    $owner: String
  ) {
    onDeleteEducation(filter: $filter, owner: $owner) {
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
export const onCreateUIKey = /* GraphQL */ `
  subscription OnCreateUIKey(
    $filter: ModelSubscriptionUIKeyFilterInput
    $owner: String
  ) {
    onCreateUIKey(filter: $filter, owner: $owner) {
      id
      MuiKey
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUIKey = /* GraphQL */ `
  subscription OnUpdateUIKey(
    $filter: ModelSubscriptionUIKeyFilterInput
    $owner: String
  ) {
    onUpdateUIKey(filter: $filter, owner: $owner) {
      id
      MuiKey
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUIKey = /* GraphQL */ `
  subscription OnDeleteUIKey(
    $filter: ModelSubscriptionUIKeyFilterInput
    $owner: String
  ) {
    onDeleteUIKey(filter: $filter, owner: $owner) {
      id
      MuiKey
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
      id
      author
      body
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
      id
      author
      body
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
      id
      author
      body
      createdAt
      updatedAt
    }
  }
`;
export const onCreateResumeExperience = /* GraphQL */ `
  subscription OnCreateResumeExperience(
    $filter: ModelSubscriptionResumeExperienceFilterInput
    $owner: String
  ) {
    onCreateResumeExperience(filter: $filter, owner: $owner) {
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
export const onUpdateResumeExperience = /* GraphQL */ `
  subscription OnUpdateResumeExperience(
    $filter: ModelSubscriptionResumeExperienceFilterInput
    $owner: String
  ) {
    onUpdateResumeExperience(filter: $filter, owner: $owner) {
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
export const onDeleteResumeExperience = /* GraphQL */ `
  subscription OnDeleteResumeExperience(
    $filter: ModelSubscriptionResumeExperienceFilterInput
    $owner: String
  ) {
    onDeleteResumeExperience(filter: $filter, owner: $owner) {
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
export const onCreateResumeEducation = /* GraphQL */ `
  subscription OnCreateResumeEducation(
    $filter: ModelSubscriptionResumeEducationFilterInput
    $owner: String
  ) {
    onCreateResumeEducation(filter: $filter, owner: $owner) {
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
export const onUpdateResumeEducation = /* GraphQL */ `
  subscription OnUpdateResumeEducation(
    $filter: ModelSubscriptionResumeEducationFilterInput
    $owner: String
  ) {
    onUpdateResumeEducation(filter: $filter, owner: $owner) {
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
export const onDeleteResumeEducation = /* GraphQL */ `
  subscription OnDeleteResumeEducation(
    $filter: ModelSubscriptionResumeEducationFilterInput
    $owner: String
  ) {
    onDeleteResumeEducation(filter: $filter, owner: $owner) {
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
