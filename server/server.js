const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
const { ApolloServer} = require('apollo-server-express');                   //<--- const ApolloServer

const { typeDefs, resolvers } = require('./schemas');                       //<--- import schemas
const db = require('./config/connection');                                  //<--- import connection

const app = express();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({                                           //<--- Apollo Server
  typeDefs,
  resolvers,
  context: ({ req }) => req.user,
  playground: true,
  introspection: true,
});

server.applyMiddleware({ app });                                            //<--- apply Apollo Server

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));           //<--- serve up static assets
});

db.once('open', () => {                                                       //<--- start server
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});


// app.use(routes);                                                           //<--- remove routes










db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
