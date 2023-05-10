/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      text
      createdAt
      ownerId
      updatedAt
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        createdAt
        ownerId
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserPreferences = /* GraphQL */ `
  query GetUserPreferences($id: ID!) {
    getUserPreferences(id: $id) {
      id
      User
      DisplayName
      DarkMode
      createdAt
      updatedAt
    }
  }
`;
export const listUserPreferences = /* GraphQL */ `
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getResume = /* GraphQL */ `
  query GetResume($id: ID!) {
    getResume(id: $id) {
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
export const listResumes = /* GraphQL */ `
  query ListResumes(
    $filter: ModelResumeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResumes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSharePool = /* GraphQL */ `
  query GetSharePool($id: ID!) {
    getSharePool(id: $id) {
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
export const listSharePools = /* GraphQL */ `
  query ListSharePools(
    $filter: ModelSharePoolFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSharePools(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUserPoolMeta = /* GraphQL */ `
  query GetUserPoolMeta($id: ID!) {
    getUserPoolMeta(id: $id) {
      id
      authorizationScope
      createdAt
      updatedAt
      sharePoolAuthorizedUserPoolsId
    }
  }
`;
export const listUserPoolMetas = /* GraphQL */ `
  query ListUserPoolMetas(
    $filter: ModelUserPoolMetaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserPoolMetas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        authorizationScope
        createdAt
        updatedAt
        sharePoolAuthorizedUserPoolsId
      }
      nextToken
    }
  }
`;
export const getPersonalData = /* GraphQL */ `
  query GetPersonalData($id: ID!) {
    getPersonalData(id: $id) {
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
export const listPersonalData = /* GraphQL */ `
  query ListPersonalData(
    $filter: ModelPersonalDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPersonalData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
    getAddress(id: $id) {
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
export const listAddresses = /* GraphQL */ `
  query ListAddresses(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddresses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Street
        City
        State
        Zip
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getContact = /* GraphQL */ `
  query GetContact($id: ID!) {
    getContact(id: $id) {
      id
      email
      phone
      createdAt
      updatedAt
    }
  }
`;
export const listContacts = /* GraphQL */ `
  query ListContacts(
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        phone
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOverview = /* GraphQL */ `
  query GetOverview($id: ID!) {
    getOverview(id: $id) {
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
export const listOverviews = /* GraphQL */ `
  query ListOverviews(
    $filter: ModelOverviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOverviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSummary = /* GraphQL */ `
  query GetSummary($id: ID!) {
    getSummary(id: $id) {
      id
      Summary
      createdAt
      updatedAt
    }
  }
`;
export const listSummaries = /* GraphQL */ `
  query ListSummaries(
    $filter: ModelSummaryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSummaries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Summary
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAccomplishments = /* GraphQL */ `
  query GetAccomplishments($id: ID!) {
    getAccomplishments(id: $id) {
      id
      Accomplishment
      createdAt
      updatedAt
      overviewAccomplishmentsId
    }
  }
`;
export const listAccomplishments = /* GraphQL */ `
  query ListAccomplishments(
    $filter: ModelAccomplishmentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccomplishments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Accomplishment
        createdAt
        updatedAt
        overviewAccomplishmentsId
      }
      nextToken
    }
  }
`;
export const getExperience = /* GraphQL */ `
  query GetExperience($id: ID!) {
    getExperience(id: $id) {
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
export const listExperiences = /* GraphQL */ `
  query ListExperiences(
    $filter: ModelExperienceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExperiences(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getEducation = /* GraphQL */ `
  query GetEducation($id: ID!) {
    getEducation(id: $id) {
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
export const listEducations = /* GraphQL */ `
  query ListEducations(
    $filter: ModelEducationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEducations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUIKey = /* GraphQL */ `
  query GetUIKey($id: ID!) {
    getUIKey(id: $id) {
      id
      MuiKey
      createdAt
      updatedAt
    }
  }
`;
export const listUIKeys = /* GraphQL */ `
  query ListUIKeys(
    $filter: ModelUIKeyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUIKeys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        MuiKey
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      firstName
      lastName
      customerProfile {
        id
        user {
          id
          email
          firstName
          lastName
          createdAt
          updatedAt
          userCustomerProfileId
          userServiceProviderProfileId
        }
        userID
        address
        phone
        interests
        createdAt
        updatedAt
      }
      serviceProviderProfile {
        id
        user {
          id
          email
          firstName
          lastName
          createdAt
          updatedAt
          userCustomerProfileId
          userServiceProviderProfileId
        }
        userID
        companyName
        address
        phone
        skills
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userCustomerProfileId
      userServiceProviderProfileId
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        firstName
        lastName
        customerProfile {
          id
          userID
          address
          phone
          interests
          createdAt
          updatedAt
        }
        serviceProviderProfile {
          id
          userID
          companyName
          address
          phone
          skills
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userCustomerProfileId
        userServiceProviderProfileId
      }
      nextToken
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
      id
      user {
        id
        email
        firstName
        lastName
        customerProfile {
          id
          userID
          address
          phone
          interests
          createdAt
          updatedAt
        }
        serviceProviderProfile {
          id
          userID
          companyName
          address
          phone
          skills
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userCustomerProfileId
        userServiceProviderProfileId
      }
      userID
      address
      phone
      interests
      createdAt
      updatedAt
    }
  }
`;
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
          id
          email
          firstName
          lastName
          createdAt
          updatedAt
          userCustomerProfileId
          userServiceProviderProfileId
        }
        userID
        address
        phone
        interests
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getServiceProvider = /* GraphQL */ `
  query GetServiceProvider($id: ID!) {
    getServiceProvider(id: $id) {
      id
      user {
        id
        email
        firstName
        lastName
        customerProfile {
          id
          userID
          address
          phone
          interests
          createdAt
          updatedAt
        }
        serviceProviderProfile {
          id
          userID
          companyName
          address
          phone
          skills
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userCustomerProfileId
        userServiceProviderProfileId
      }
      userID
      companyName
      address
      phone
      skills
      createdAt
      updatedAt
    }
  }
`;
export const listServiceProviders = /* GraphQL */ `
  query ListServiceProviders(
    $filter: ModelServiceProviderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServiceProviders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        user {
          id
          email
          firstName
          lastName
          createdAt
          updatedAt
          userCustomerProfileId
          userServiceProviderProfileId
        }
        userID
        companyName
        address
        phone
        skills
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getResumeExperience = /* GraphQL */ `
  query GetResumeExperience($id: ID!) {
    getResumeExperience(id: $id) {
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
export const listResumeExperiences = /* GraphQL */ `
  query ListResumeExperiences(
    $filter: ModelResumeExperienceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResumeExperiences(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        resumeId
        experienceId
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getResumeEducation = /* GraphQL */ `
  query GetResumeEducation($id: ID!) {
    getResumeEducation(id: $id) {
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
export const listResumeEducations = /* GraphQL */ `
  query ListResumeEducations(
    $filter: ModelResumeEducationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResumeEducations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        resumeId
        educationId
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
        education {
          id
          Degree
          School
          Start
          End
          Overview
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const resumeExperiencesByResumeId = /* GraphQL */ `
  query ResumeExperiencesByResumeId(
    $resumeId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelResumeExperienceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    resumeExperiencesByResumeId(
      resumeId: $resumeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        resumeId
        experienceId
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const resumeExperiencesByExperienceId = /* GraphQL */ `
  query ResumeExperiencesByExperienceId(
    $experienceId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelResumeExperienceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    resumeExperiencesByExperienceId(
      experienceId: $experienceId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        resumeId
        experienceId
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const resumeEducationsByResumeId = /* GraphQL */ `
  query ResumeEducationsByResumeId(
    $resumeId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelResumeEducationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    resumeEducationsByResumeId(
      resumeId: $resumeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        resumeId
        educationId
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
        education {
          id
          Degree
          School
          Start
          End
          Overview
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const resumeEducationsByEducationId = /* GraphQL */ `
  query ResumeEducationsByEducationId(
    $educationId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelResumeEducationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    resumeEducationsByEducationId(
      educationId: $educationId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        resumeId
        educationId
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
        education {
          id
          Degree
          School
          Start
          End
          Overview
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
