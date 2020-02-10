import { FETCH_BOARD_PENDING, FETCH_BOARD_SUCCESS, FETCH_BOARD_ERROR } from '../actions/boardActions'

const initialState = {
  data: [],
  meta: {
    isLoading: false,
    error: null
  }
}

export default function boardReducer(state = initialState, action) {
  let { type, payload, error } = action
  switch(type) {
    case FETCH_BOARD_PENDING:
      return {
        ...state,
        meta: {isLoading: true}
      }
    case FETCH_BOARD_SUCCESS:
      return {
        ...state,
        data: payload,
        meta: {isLoading: false}
      }
    case FETCH_BOARD_ERROR:
      return {
        ...state,
        meta: {isLoading: false, error: error}
      }
    default:
      return state
  }
}

export const getBoard = state => state.board
export const getBoardPending = state => state.pending
export const getBoardError = state => state.error