/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
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
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
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
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
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
export const createServiceProvider = /* GraphQL */ `
  mutation CreateServiceProvider(
    $input: CreateServiceProviderInput!
    $condition: ModelServiceProviderConditionInput
  ) {
    createServiceProvider(input: $input, condition: $condition) {
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
export const updateServiceProvider = /* GraphQL */ `
  mutation UpdateServiceProvider(
    $input: UpdateServiceProviderInput!
    $condition: ModelServiceProviderConditionInput
  ) {
    updateServiceProvider(input: $input, condition: $condition) {
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
export const deleteServiceProvider = /* GraphQL */ `
  mutation DeleteServiceProvider(
    $input: DeleteServiceProviderInput!
    $condition: ModelServiceProviderConditionInput
  ) {
    deleteServiceProvider(input: $input, condition: $condition) {
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
export const createBlogPage = /* GraphQL */ `
  mutation CreateBlogPage(
    $input: CreateBlogPageInput!
    $condition: ModelBlogPageConditionInput
  ) {
    createBlogPage(input: $input, condition: $condition) {
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
export const updateBlogPage = /* GraphQL */ `
  mutation UpdateBlogPage(
    $input: UpdateBlogPageInput!
    $condition: ModelBlogPageConditionInput
  ) {
    updateBlogPage(input: $input, condition: $condition) {
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
export const deleteBlogPage = /* GraphQL */ `
  mutation DeleteBlogPage(
    $input: DeleteBlogPageInput!
    $condition: ModelBlogPageConditionInput
  ) {
    deleteBlogPage(input: $input, condition: $condition) {
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
export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
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
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
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
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
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
export const createS3Object = /* GraphQL */ `
  mutation CreateS3Object(
    $input: CreateS3ObjectInput!
    $condition: ModelS3ObjectConditionInput
  ) {
    createS3Object(input: $input, condition: $condition) {
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
export const updateS3Object = /* GraphQL */ `
  mutation UpdateS3Object(
    $input: UpdateS3ObjectInput!
    $condition: ModelS3ObjectConditionInput
  ) {
    updateS3Object(input: $input, condition: $condition) {
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
export const deleteS3Object = /* GraphQL */ `
  mutation DeleteS3Object(
    $input: DeleteS3ObjectInput!
    $condition: ModelS3ObjectConditionInput
  ) {
    deleteS3Object(input: $input, condition: $condition) {
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
