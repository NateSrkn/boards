import { GET_CARDS } from '../actions/cardsActions'

export default function cardsReducer(state = '', { type, payload }) {
  switch(type) {
    case GET_CARDS:
      return payload.cards
    default:
      return state
  }
}