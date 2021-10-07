const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    username: String!
    email: String!
    savedBooks: [Book]
    _id: ID!
  }

  type Book {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Query {
    me: User
  }

  imput SavedBook {
    description: String
    titel: String
    bookId: String
    image: String
    link: String 
    authors [String]
  }

  type Auth {
    token: ID!
    user: User
  }

  type mutation {
    login(email: String!, password, String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: saveBook!): User
    removeBook(bookID: ID!): User
  }

`;

module.exports = typeDefs;
