import React from 'react'
import { fetchBoardPending, fetchBoardSuccess, fetchBoardError } from '../actions/boardActions'
import { fetchBoardsPending, fetchBoardsSuccess, fetchBoardsError } from '../actions/boardsActions'
import { connect } from 'react-redux'
import { apiCall, baseUrl } from '../helpers/api/callApi'
import { bindActionCreators } from 'redux'

export const fetchBoards = (dispatch) => {
  let settings = {
    url: baseUrl + `1/members/me/boards`,
    method: 'get',
    params: {
      key: process.env.REACT_APP_API_KEY,
      token: process.env.REACT_APP_TOKEN
    }
  }
  apiCall(settings, 'Boards retrieved', dispatch, fetchBoardsPending, fetchBoardsError, fetchBoardsSuccess)
}

export const fetchBoard = (shortLink) => {
  // const { apiCall } = this.props
  let settings = {
    url: baseUrl + `1//boards/${shortLink}`,
    method: 'get',
    params: {
      key: process.env.REACT_APP_API_KEY,
      token: process.env.REACT_APP_TOKEN,
      cards: 'all'
    }
  }
  apiCall(settings, `Board with id: ${shortLink} retrieved`, fetchBoardPending, fetchBoardError, fetchBoardSuccess)
}
