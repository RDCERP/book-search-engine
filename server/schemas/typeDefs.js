const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Book {
    bookid: ID
    authors: [String]
    description: String
    title: String
    image: String
    link: String
    }


  input InputBook {
    bookid: ID
    authors: [String]
    description: String
    title: String
    image: String
    link: String
    }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    savedBook(newBook: InputBook): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;