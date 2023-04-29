/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const searchResumes = /* GraphQL */ `
  query SearchResumes(
    $filter: SearchableResumeFilterInput
    $sort: [SearchableResumeSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableResumeAggregationInput]
  ) {
    searchResumes(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
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
      owner
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
        owner
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
        createdAt
        updatedAt
        owner
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
      owner
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
        owner
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
      owner
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
        owner
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
      owner
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
        owner
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
      owner
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
        owner
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
      owner
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
        owner
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
        owner
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
        owner
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
      owner
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
        owner
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      author
      body
      createdAt
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
        author
        body
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
        resumeID
        experienceID
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
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getResumeEducation = /* GraphQL */ `
  query GetResumeEducation($id: ID!) {
    getResumeEducation(id: $id) {
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
        resumeID
        educationID
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
          owner
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
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
