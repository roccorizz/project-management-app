import { RouterProvider } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import './App.css';
import router from './Router/Routes/Routes';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: 'https://project-management-app-server.vercel.app/graphql',
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <RouterProvider router={router}></RouterProvider>
      </ApolloProvider>
    </>
  );
}

export default App;