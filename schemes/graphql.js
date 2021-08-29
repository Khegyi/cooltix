import { InMemoryCache, gql, ApolloClient } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://cooltix-frontend-challenge.herokuapp.com",
    cache: new InMemoryCache(),
  });

const GET_MEMBER = gql `
  query ($memberId: ID!) {
    member(id: $memberId) {
      id
      firstName
      lastName
      email
      address {
        country
        state
        postalCode
        city
        addressLine
      }
      profilePictureUrl
    }
  }
`;

const ALL_MEMBERS = gql `
query Members {
  allMembers {
    id
    firstName
    lastName
    address {
      country
      state
      postalCode
      city
      addressLine
    }
    profilePictureUrl
  }
}
`;

export default {GET_MEMBER, client};