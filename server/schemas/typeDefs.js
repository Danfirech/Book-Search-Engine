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
`;

module.exports = typeDefs;
