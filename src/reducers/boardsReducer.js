import { FETCH_BOARDS_PENDING, FETCH_BOARDS_SUCCESS, FETCH_BOARDS_ERROR } from '../actions/boardsActions'

const initialState = {
  data: [],
  meta: {
    pending: false,
    error: null
  }
}

export default function boardsReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_BOARDS_PENDING:
      return {
        ...state,
        meta: {pending: true}
      }
    case FETCH_BOARDS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        meta: {pending: false}
      }
    case FETCH_BOARDS_ERROR:
      return {
        ...state,
        meta: {pending: false, error: action.error}
      }
    default:
      return state
  }
}

export const getBoards = state => state.boards
export const getBoardsPending = state => state.pending
export const getBoardsError = state => state.error