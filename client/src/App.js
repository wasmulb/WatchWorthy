import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import About from "./pages/About";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

function App() {
  return (
    <div>
      <Navbar/>
    </div>
  
  );
}

export default App;