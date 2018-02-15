import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import typeDefs from  './graphql/schema';
import resolvers from './graphql/resolver';
import { makeExecutableSchema } from 'graphql-tools';

// https://www.youtube.com/watch?v=DqJGNqtx3Pk

const myGraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });
const PORT = 3000;
const app = express();

// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }));
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })); // if you want GraphiQL enabled

app.listen(PORT, () => {
    console.log("Server running...");
});