# To do

1. Conditional logic in header useEffect that valididates three things:
    * Is the user authenticated? 
    * Is the user verified?
    * Does the user have a User object?

    If the user is authenticated but not verified, or the user is verified but doesn't have a user object, I want the header to put an alert icon of some sort next to the link to ServiceProvider with a tooltip that says something about continuing signup.


2. Schema for future implementations:

type Customer @model  @auth(rules: [
  { allow: owner, operations: [create, update, read, delete]}
  { allow: public, operations: [read]}
]) {
  id: ID!
  user: User! @belongsTo(fields: ["userID"])
  userID: ID!
  address: String
  phone: String
  interests: [String!]
}

type ServiceProvider @model  @auth(rules: [
  { allow: owner, operations: [create, update, read, delete]}
  { allow: public, operations: [read]}
]) {
  id: ID!
  user: User! @belongsTo(fields: ["userID"])
  userID: ID!
  companyName: String
  address: String
  phone: String
  skills: [String!]
}

type BlogPage @model @auth(rules: [
  { allow: owner, operations: [create, read, update, delete] },
  { allow: public, operations: [read] }
]) {
  id: ID!
  title: String!
  overview: String
  author: User @belongsTo(fields: ["authorId"])
  authorId: ID!
  posts: [Blog] @hasMany
}

type Blog @model @auth(rules: [
  { allow: owner, operations: [create, read, update, delete] },
  { allow: public, operations: [read] }
]) {
  id: ID!
  title: String!
  content: String!
  blogPage: BlogPage @belongsTo(fields: ["blogPageId"])
  blogPageId: ID!
  media: [S3Object]
}

type S3Object @model @auth(rules: [
  { allow: owner, operations: [create, read, update, delete] },
  { allow: public, operations: [read] }
]) {
  bucket: String!
  region: String!
  key: String!
}
