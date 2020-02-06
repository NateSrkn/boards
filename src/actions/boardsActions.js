export const FETCH_BOARDS_PENDING = 'FETCH_BOARDS_PENDING'
export const FETCH_BOARDS_SUCCESS = 'FETCH_BOARDS_SUCCESS'
export const FETCH_BOARDS_ERROR = 'FETCH_BOARDS_ERROR'

export const fetchBoardsPending = () => ({
  type: FETCH_BOARDS_PENDING
}) 

export const fetchBoardsSuccess = (boards) => ({
  type: FETCH_BOARDS_SUCCESS,
  payload: boards
})

export const fetchBoardsError = (error) => ({
    type: FETCH_BOARDS_ERROR,
    error: error
})
