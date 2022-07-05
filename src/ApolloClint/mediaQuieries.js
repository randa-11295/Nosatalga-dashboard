import { gql} from "@apollo/client";

export const addMovieQuiery =  gql`
mutation Mutation($showInput: ShowInput!) {
  createShow(showInput: $showInput) {
    name
  }
}
`