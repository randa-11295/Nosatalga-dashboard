import { ApolloClient, InMemoryCache, createHttpLink,} from "@apollo/client";
import { setContext } from "apollo-link-context";

const httpLink = createHttpLink({
  uri: "https://nostaliga.herokuapp.com/"
  //  "http://localhost:5000/"
  
});

const authLink = setContext(() => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzE2YmQ5MWJlZDAwYzc1MWM2ZDNjNyIsImVtYWlsIjoicmFuZGEubW9oYW1lZDEyOTVAZ21haWwuY29tIiwibmFtZSI6InJhbmRhIiwiaWF0IjoxNjU2ODQzMjI1LCJleHAiOjE2NTY5Mjk2MjV9.gNqWMvkTbDwQf_NObq1BT_g2GWbjPEhhc8-gunGG5OE";
  // JSON.parse(localStorage.getItem("token"));

  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client
  


