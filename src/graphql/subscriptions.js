/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
      id
      text
      createdAt
      ownerId
      updatedAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
      id
      text
      createdAt
      ownerId
      updatedAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
      id
      text
      createdAt
      ownerId
      updatedAt
    }
  }
`;
export const onCreateResume = /* GraphQL */ `
  subscription OnCreateResume($filter: ModelSubscriptionResumeFilterInput) {
    onCreateResume(filter: $filter) {
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
export const onUpdateResume = /* GraphQL */ `
  subscription OnUpdateResume($filter: ModelSubscriptionResumeFilterInput) {
    onUpdateResume(filter: $filter) {
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
export const onDeleteResume = /* GraphQL */ `
  subscription OnDeleteResume($filter: ModelSubscriptionResumeFilterInput) {
    onDeleteResume(filter: $filter) {
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
export const onCreateSharePool = /* GraphQL */ `
  subscription OnCreateSharePool(
    $filter: ModelSubscriptionSharePoolFilterInput
  ) {
    onCreateSharePool(filter: $filter) {
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
export const onUpdateSharePool = /* GraphQL */ `
  subscription OnUpdateSharePool(
    $filter: ModelSubscriptionSharePoolFilterInput
  ) {
    onUpdateSharePool(filter: $filter) {
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
export const onDeleteSharePool = /* GraphQL */ `
  subscription OnDeleteSharePool(
    $filter: ModelSubscriptionSharePoolFilterInput
  ) {
    onDeleteSharePool(filter: $filter) {
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
export const onCreateUserPoolMeta = /* GraphQL */ `
  subscription OnCreateUserPoolMeta(
    $filter: ModelSubscriptionUserPoolMetaFilterInput
  ) {
    onCreateUserPoolMeta(filter: $filter) {
      id
      authorizationScope
      createdAt
      updatedAt
      sharePoolAuthorizedUserPoolsId
    }
  }
`;
export const onUpdateUserPoolMeta = /* GraphQL */ `
  subscription OnUpdateUserPoolMeta(
    $filter: ModelSubscriptionUserPoolMetaFilterInput
  ) {
    onUpdateUserPoolMeta(filter: $filter) {
      id
      authorizationScope
      createdAt
      updatedAt
      sharePoolAuthorizedUserPoolsId
    }
  }
`;
export const onDeleteUserPoolMeta = /* GraphQL */ `
  subscription OnDeleteUserPoolMeta(
    $filter: ModelSubscriptionUserPoolMetaFilterInput
  ) {
    onDeleteUserPoolMeta(filter: $filter) {
      id
      authorizationScope
      createdAt
      updatedAt
      sharePoolAuthorizedUserPoolsId
    }
  }
`;
export const onCreatePersonalData = /* GraphQL */ `
  subscription OnCreatePersonalData(
    $filter: ModelSubscriptionPersonalDataFilterInput
  ) {
    onCreatePersonalData(filter: $filter) {
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
export const onUpdatePersonalData = /* GraphQL */ `
  subscription OnUpdatePersonalData(
    $filter: ModelSubscriptionPersonalDataFilterInput
  ) {
    onUpdatePersonalData(filter: $filter) {
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
export const onDeletePersonalData = /* GraphQL */ `
  subscription OnDeletePersonalData(
    $filter: ModelSubscriptionPersonalDataFilterInput
  ) {
    onDeletePersonalData(filter: $filter) {
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
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress($filter: ModelSubscriptionAddressFilterInput) {
    onCreateAddress(filter: $filter) {
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
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress($filter: ModelSubscriptionAddressFilterInput) {
    onUpdateAddress(filter: $filter) {
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
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress($filter: ModelSubscriptionAddressFilterInput) {
    onDeleteAddress(filter: $filter) {
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
export const onCreateContact = /* GraphQL */ `
  subscription OnCreateContact($filter: ModelSubscriptionContactFilterInput) {
    onCreateContact(filter: $filter) {
      id
      email
      phone
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateContact = /* GraphQL */ `
  subscription OnUpdateContact($filter: ModelSubscriptionContactFilterInput) {
    onUpdateContact(filter: $filter) {
      id
      email
      phone
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteContact = /* GraphQL */ `
  subscription OnDeleteContact($filter: ModelSubscriptionContactFilterInput) {
    onDeleteContact(filter: $filter) {
      id
      email
      phone
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOverview = /* GraphQL */ `
  subscription OnCreateOverview($filter: ModelSubscriptionOverviewFilterInput) {
    onCreateOverview(filter: $filter) {
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
export const onUpdateOverview = /* GraphQL */ `
  subscription OnUpdateOverview($filter: ModelSubscriptionOverviewFilterInput) {
    onUpdateOverview(filter: $filter) {
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
export const onDeleteOverview = /* GraphQL */ `
  subscription OnDeleteOverview($filter: ModelSubscriptionOverviewFilterInput) {
    onDeleteOverview(filter: $filter) {
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
export const onCreateSummary = /* GraphQL */ `
  subscription OnCreateSummary($filter: ModelSubscriptionSummaryFilterInput) {
    onCreateSummary(filter: $filter) {
      id
      Summary
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSummary = /* GraphQL */ `
  subscription OnUpdateSummary($filter: ModelSubscriptionSummaryFilterInput) {
    onUpdateSummary(filter: $filter) {
      id
      Summary
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSummary = /* GraphQL */ `
  subscription OnDeleteSummary($filter: ModelSubscriptionSummaryFilterInput) {
    onDeleteSummary(filter: $filter) {
      id
      Summary
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAccomplishments = /* GraphQL */ `
  subscription OnCreateAccomplishments(
    $filter: ModelSubscriptionAccomplishmentsFilterInput
  ) {
    onCreateAccomplishments(filter: $filter) {
      id
      Accomplishment
      createdAt
      updatedAt
      overviewAccomplishmentsId
    }
  }
`;
export const onUpdateAccomplishments = /* GraphQL */ `
  subscription OnUpdateAccomplishments(
    $filter: ModelSubscriptionAccomplishmentsFilterInput
  ) {
    onUpdateAccomplishments(filter: $filter) {
      id
      Accomplishment
      createdAt
      updatedAt
      overviewAccomplishmentsId
    }
  }
`;
export const onDeleteAccomplishments = /* GraphQL */ `
  subscription OnDeleteAccomplishments(
    $filter: ModelSubscriptionAccomplishmentsFilterInput
  ) {
    onDeleteAccomplishments(filter: $filter) {
      id
      Accomplishment
      createdAt
      updatedAt
      overviewAccomplishmentsId
    }
  }
`;
export const onCreateExperience = /* GraphQL */ `
  subscription OnCreateExperience(
    $filter: ModelSubscriptionExperienceFilterInput
  ) {
    onCreateExperience(filter: $filter) {
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
export const onUpdateExperience = /* GraphQL */ `
  subscription OnUpdateExperience(
    $filter: ModelSubscriptionExperienceFilterInput
  ) {
    onUpdateExperience(filter: $filter) {
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
export const onDeleteExperience = /* GraphQL */ `
  subscription OnDeleteExperience(
    $filter: ModelSubscriptionExperienceFilterInput
  ) {
    onDeleteExperience(filter: $filter) {
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
export const onCreateEducation = /* GraphQL */ `
  subscription OnCreateEducation(
    $filter: ModelSubscriptionEducationFilterInput
  ) {
    onCreateEducation(filter: $filter) {
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
export const onUpdateEducation = /* GraphQL */ `
  subscription OnUpdateEducation(
    $filter: ModelSubscriptionEducationFilterInput
  ) {
    onUpdateEducation(filter: $filter) {
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
export const onDeleteEducation = /* GraphQL */ `
  subscription OnDeleteEducation(
    $filter: ModelSubscriptionEducationFilterInput
  ) {
    onDeleteEducation(filter: $filter) {
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
export const onCreateUIKey = /* GraphQL */ `
  subscription OnCreateUIKey($filter: ModelSubscriptionUIKeyFilterInput) {
    onCreateUIKey(filter: $filter) {
      id
      MuiKey
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUIKey = /* GraphQL */ `
  subscription OnUpdateUIKey($filter: ModelSubscriptionUIKeyFilterInput) {
    onUpdateUIKey(filter: $filter) {
      id
      MuiKey
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUIKey = /* GraphQL */ `
  subscription OnDeleteUIKey($filter: ModelSubscriptionUIKeyFilterInput) {
    onDeleteUIKey(filter: $filter) {
      id
      MuiKey
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUserPreferences = /* GraphQL */ `
  subscription OnCreateUserPreferences(
    $filter: ModelSubscriptionUserPreferencesFilterInput
  ) {
    onCreateUserPreferences(filter: $filter) {
      id
      User
      DisplayName
      DarkMode
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserPreferences = /* GraphQL */ `
  subscription OnUpdateUserPreferences(
    $filter: ModelSubscriptionUserPreferencesFilterInput
  ) {
    onUpdateUserPreferences(filter: $filter) {
      id
      User
      DisplayName
      DarkMode
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserPreferences = /* GraphQL */ `
  subscription OnDeleteUserPreferences(
    $filter: ModelSubscriptionUserPreferencesFilterInput
  ) {
    onDeleteUserPreferences(filter: $filter) {
      id
      User
      DisplayName
      DarkMode
      createdAt
      updatedAt
    }
  }
`;
export const onCreateResumeExperience = /* GraphQL */ `
  subscription OnCreateResumeExperience(
    $filter: ModelSubscriptionResumeExperienceFilterInput
  ) {
    onCreateResumeExperience(filter: $filter) {
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
export const onUpdateResumeExperience = /* GraphQL */ `
  subscription OnUpdateResumeExperience(
    $filter: ModelSubscriptionResumeExperienceFilterInput
  ) {
    onUpdateResumeExperience(filter: $filter) {
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
export const onDeleteResumeExperience = /* GraphQL */ `
  subscription OnDeleteResumeExperience(
    $filter: ModelSubscriptionResumeExperienceFilterInput
  ) {
    onDeleteResumeExperience(filter: $filter) {
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
export const onCreateResumeEducation = /* GraphQL */ `
  subscription OnCreateResumeEducation(
    $filter: ModelSubscriptionResumeEducationFilterInput
  ) {
    onCreateResumeEducation(filter: $filter) {
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
export const onUpdateResumeEducation = /* GraphQL */ `
  subscription OnUpdateResumeEducation(
    $filter: ModelSubscriptionResumeEducationFilterInput
  ) {
    onUpdateResumeEducation(filter: $filter) {
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
export const onDeleteResumeEducation = /* GraphQL */ `
  subscription OnDeleteResumeEducation(
    $filter: ModelSubscriptionResumeEducationFilterInput
  ) {
    onDeleteResumeEducation(filter: $filter) {
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
