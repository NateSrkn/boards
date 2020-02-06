import { FETCH_BOARD_PENDING, FETCH_BOARD_SUCCESS, FETCH_BOARD_ERROR } from '../actions/boardActions'

const initialState = {
  data: [],
  meta: {
    pending: false,
    error: null
  }
}

export default function boardReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_BOARD_PENDING:
      return {
        ...state,
        meta: {pending: true}
      }
    case FETCH_BOARD_SUCCESS:
      return {
        ...state,
        data: action.payload,
        meta: {pending: false}
      }
    case FETCH_BOARD_ERROR:
      return {
        ...state,
        meta: {pending: false, error: action.error}
      }
    default:
      return state
  }
}

export const getBoard = state => state.board
export const getBoardPending = state => state.pending
export const getBoardError = state => state.error