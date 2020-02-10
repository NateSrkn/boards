import { FETCH_BOARDS_PENDING, FETCH_BOARDS_SUCCESS, FETCH_BOARDS_ERROR } from '../actions/boardsActions'

const initialState = {
  data: [],
  meta: {
    isLoading: false,
    error: null
  }
}

export default function boardsReducer(state = initialState, action) {
  let { type, payload, error } = action
  switch(type) {
    case FETCH_BOARDS_PENDING:
      return {
        ...state,
        meta: {isLoading: true}
      }
    case FETCH_BOARDS_SUCCESS:
      return {
        ...state,
        data: payload,
        meta: {isLoading: false}
      }
    case FETCH_BOARDS_ERROR:
      return {
        ...state,
        meta: {isLoading: false, error: error}
      }
    default:
      return state
  }
}

export const getBoards = state => state.boards
export const getBoardsPending = state => state.pending
export const getBoardsError = state => state.error