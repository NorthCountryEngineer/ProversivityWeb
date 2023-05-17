/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
`
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
      nextToken
    }
  }
`
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
`
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
      nextToken
    }
  }
`
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
`
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
      nextToken
    }
  }
`
export const getBlogPage = /* GraphQL */ `
  query GetBlogPage($id: ID!) {
    getBlogPage(id: $id) {
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
`
export const listBlogPages = /* GraphQL */ `
  query ListBlogPages(
    $filter: ModelBlogPageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogPages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`
export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
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
`
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        blogPage {
          id
          title
          overview
          authorId
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
      nextToken
    }
  }
`
export const getS3Object = /* GraphQL */ `
  query GetS3Object($id: ID!) {
    getS3Object(id: $id) {
      bucket
      region
      key
      id
      createdAt
      updatedAt
      owner
    }
  }
`
export const listS3Objects = /* GraphQL */ `
  query ListS3Objects(
    $filter: ModelS3ObjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listS3Objects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        bucket
        region
        key
        id
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`
