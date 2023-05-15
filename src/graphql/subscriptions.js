/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
          userBlogPageId
          owner
        }
        userID
        address
        phone
        interests
        createdAt
        updatedAt
        owner
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
          userBlogPageId
          owner
        }
        userID
        companyName
        address
        phone
        skills
        createdAt
        updatedAt
        owner
      }
      blogPage {
        id
        title
        overview
        author {
          id
          email
          firstName
          lastName
          createdAt
          updatedAt
          userCustomerProfileId
          userServiceProviderProfileId
          userBlogPageId
          owner
        }
        authorId
        posts {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      userCustomerProfileId
      userServiceProviderProfileId
      userBlogPageId
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
          userBlogPageId
          owner
        }
        userID
        address
        phone
        interests
        createdAt
        updatedAt
        owner
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
          userBlogPageId
          owner
        }
        userID
        companyName
        address
        phone
        skills
        createdAt
        updatedAt
        owner
      }
      blogPage {
        id
        title
        overview
        author {
          id
          email
          firstName
          lastName
          createdAt
          updatedAt
          userCustomerProfileId
          userServiceProviderProfileId
          userBlogPageId
          owner
        }
        authorId
        posts {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      userCustomerProfileId
      userServiceProviderProfileId
      userBlogPageId
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
          userBlogPageId
          owner
        }
        userID
        address
        phone
        interests
        createdAt
        updatedAt
        owner
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
          userBlogPageId
          owner
        }
        userID
        companyName
        address
        phone
        skills
        createdAt
        updatedAt
        owner
      }
      blogPage {
        id
        title
        overview
        author {
          id
          email
          firstName
          lastName
          createdAt
          updatedAt
          userCustomerProfileId
          userServiceProviderProfileId
          userBlogPageId
          owner
        }
        authorId
        posts {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      userCustomerProfileId
      userServiceProviderProfileId
      userBlogPageId
      owner
    }
  }
`;
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer(
    $filter: ModelSubscriptionCustomerFilterInput
    $owner: String
  ) {
    onCreateCustomer(filter: $filter, owner: $owner) {
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
          owner
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
          owner
        }
        blogPage {
          id
          title
          overview
          authorId
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        userCustomerProfileId
        userServiceProviderProfileId
        userBlogPageId
        owner
      }
      userID
      address
      phone
      interests
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer(
    $filter: ModelSubscriptionCustomerFilterInput
    $owner: String
  ) {
    onUpdateCustomer(filter: $filter, owner: $owner) {
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
          owner
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
          owner
        }
        blogPage {
          id
          title
          overview
          authorId
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        userCustomerProfileId
        userServiceProviderProfileId
        userBlogPageId
        owner
      }
      userID
      address
      phone
      interests
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer(
    $filter: ModelSubscriptionCustomerFilterInput
    $owner: String
  ) {
    onDeleteCustomer(filter: $filter, owner: $owner) {
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
          owner
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
          owner
        }
        blogPage {
          id
          title
          overview
          authorId
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        userCustomerProfileId
        userServiceProviderProfileId
        userBlogPageId
        owner
      }
      userID
      address
      phone
      interests
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateServiceProvider = /* GraphQL */ `
  subscription OnCreateServiceProvider(
    $filter: ModelSubscriptionServiceProviderFilterInput
    $owner: String
  ) {
    onCreateServiceProvider(filter: $filter, owner: $owner) {
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
          owner
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
          owner
        }
        blogPage {
          id
          title
          overview
          authorId
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        userCustomerProfileId
        userServiceProviderProfileId
        userBlogPageId
        owner
      }
      userID
      companyName
      address
      phone
      skills
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateServiceProvider = /* GraphQL */ `
  subscription OnUpdateServiceProvider(
    $filter: ModelSubscriptionServiceProviderFilterInput
    $owner: String
  ) {
    onUpdateServiceProvider(filter: $filter, owner: $owner) {
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
          owner
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
          owner
        }
        blogPage {
          id
          title
          overview
          authorId
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        userCustomerProfileId
        userServiceProviderProfileId
        userBlogPageId
        owner
      }
      userID
      companyName
      address
      phone
      skills
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteServiceProvider = /* GraphQL */ `
  subscription OnDeleteServiceProvider(
    $filter: ModelSubscriptionServiceProviderFilterInput
    $owner: String
  ) {
    onDeleteServiceProvider(filter: $filter, owner: $owner) {
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
          owner
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
          owner
        }
        blogPage {
          id
          title
          overview
          authorId
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        userCustomerProfileId
        userServiceProviderProfileId
        userBlogPageId
        owner
      }
      userID
      companyName
      address
      phone
      skills
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateBlogPage = /* GraphQL */ `
  subscription OnCreateBlogPage(
    $filter: ModelSubscriptionBlogPageFilterInput
    $owner: String
  ) {
    onCreateBlogPage(filter: $filter, owner: $owner) {
      id
      title
      overview
      author {
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
          owner
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
          owner
        }
        blogPage {
          id
          title
          overview
          authorId
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        userCustomerProfileId
        userServiceProviderProfileId
        userBlogPageId
        owner
      }
      authorId
      posts {
        items {
          id
          title
          content
          blogPageId
          createdAt
          updatedAt
          blogPagePostsId
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
export const onUpdateBlogPage = /* GraphQL */ `
  subscription OnUpdateBlogPage(
    $filter: ModelSubscriptionBlogPageFilterInput
    $owner: String
  ) {
    onUpdateBlogPage(filter: $filter, owner: $owner) {
      id
      title
      overview
      author {
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
          owner
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
          owner
        }
        blogPage {
          id
          title
          overview
          authorId
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        userCustomerProfileId
        userServiceProviderProfileId
        userBlogPageId
        owner
      }
      authorId
      posts {
        items {
          id
          title
          content
          blogPageId
          createdAt
          updatedAt
          blogPagePostsId
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
export const onDeleteBlogPage = /* GraphQL */ `
  subscription OnDeleteBlogPage(
    $filter: ModelSubscriptionBlogPageFilterInput
    $owner: String
  ) {
    onDeleteBlogPage(filter: $filter, owner: $owner) {
      id
      title
      overview
      author {
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
          owner
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
          owner
        }
        blogPage {
          id
          title
          overview
          authorId
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        userCustomerProfileId
        userServiceProviderProfileId
        userBlogPageId
        owner
      }
      authorId
      posts {
        items {
          id
          title
          content
          blogPageId
          createdAt
          updatedAt
          blogPagePostsId
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
export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog(
    $filter: ModelSubscriptionBlogFilterInput
    $owner: String
  ) {
    onCreateBlog(filter: $filter, owner: $owner) {
      id
      title
      content
      blogPage {
        id
        title
        overview
        author {
          id
          email
          firstName
          lastName
          createdAt
          updatedAt
          userCustomerProfileId
          userServiceProviderProfileId
          userBlogPageId
          owner
        }
        authorId
        posts {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      blogPageId
      media {
        bucket
        region
        key
        id
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      blogPagePostsId
      owner
    }
  }
`;
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog(
    $filter: ModelSubscriptionBlogFilterInput
    $owner: String
  ) {
    onUpdateBlog(filter: $filter, owner: $owner) {
      id
      title
      content
      blogPage {
        id
        title
        overview
        author {
          id
          email
          firstName
          lastName
          createdAt
          updatedAt
          userCustomerProfileId
          userServiceProviderProfileId
          userBlogPageId
          owner
        }
        authorId
        posts {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      blogPageId
      media {
        bucket
        region
        key
        id
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      blogPagePostsId
      owner
    }
  }
`;
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog(
    $filter: ModelSubscriptionBlogFilterInput
    $owner: String
  ) {
    onDeleteBlog(filter: $filter, owner: $owner) {
      id
      title
      content
      blogPage {
        id
        title
        overview
        author {
          id
          email
          firstName
          lastName
          createdAt
          updatedAt
          userCustomerProfileId
          userServiceProviderProfileId
          userBlogPageId
          owner
        }
        authorId
        posts {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      blogPageId
      media {
        bucket
        region
        key
        id
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      blogPagePostsId
      owner
    }
  }
`;
export const onCreateS3Object = /* GraphQL */ `
  subscription OnCreateS3Object(
    $filter: ModelSubscriptionS3ObjectFilterInput
    $owner: String
  ) {
    onCreateS3Object(filter: $filter, owner: $owner) {
      bucket
      region
      key
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateS3Object = /* GraphQL */ `
  subscription OnUpdateS3Object(
    $filter: ModelSubscriptionS3ObjectFilterInput
    $owner: String
  ) {
    onUpdateS3Object(filter: $filter, owner: $owner) {
      bucket
      region
      key
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteS3Object = /* GraphQL */ `
  subscription OnDeleteS3Object(
    $filter: ModelSubscriptionS3ObjectFilterInput
    $owner: String
  ) {
    onDeleteS3Object(filter: $filter, owner: $owner) {
      bucket
      region
      key
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
