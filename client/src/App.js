import Navbar from "./components/Navbar";
import {Route, Routes, BrowserRouter as Router} from "react-router-dom"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import AuthRoutes from "./components/Routes/AuthRoutes";
import UnAuthRoutes from "./components/Routes/UnAuthRoutes";
import { setContext } from '@apollo/client/link/context';
import Auth from './utils/auth'

const httpLink = createHttpLink({
  uri: '/graphql',
});


const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div>

      <Router>
      <Navbar/>
      {Auth.loggedIn()? (
      <AuthRoutes />) : (
      <UnAuthRoutes />) }
     </Router>

    </div>
  </ApolloProvider>
  );
}

export default App;