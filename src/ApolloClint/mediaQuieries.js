import { gql} from "@apollo/client";

export const addMovieQuiery =  gql`
mutation Mutation($showInput: ShowInput!) {
  createShow(showInput: $showInput) {
    name
  }
}
`

export const getActorData =  gql`
query Query($name: String!) {
  getActor(name: $name) {
    _id
    name
  }
}
`