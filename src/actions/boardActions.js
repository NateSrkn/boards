export const FETCH_BOARD_PENDING = 'FETCH_BOARD_PENDING'
export const FETCH_BOARD_SUCCESS = 'FETCH_BOARD_SUCCESS'
export const FETCH_BOARD_ERROR = 'FETCH_BOARD_ERROR'

export const fetchBoardPending = () => ({
  type: FETCH_BOARD_PENDING
}) 

export const fetchBoardSuccess = (board) => ({
  type: FETCH_BOARD_SUCCESS,
  payload: board
})

export const fetchBoardError = (error) => ({
    type: FETCH_BOARD_ERROR,
    error: error
})
