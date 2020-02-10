const axios = require('axios').default

export const baseUrl = 'https://api.trello.com'

export const apiCall = (options, pendingDispatch, successDispatch, errorDispatch) => {
  let settings = {
    ...options.base,
    params: {
      key: process.env.REACT_APP_API_KEY,
      token: process.env.REACT_APP_TOKEN,
      ...options.params || null
    }
  }
  return dispatch => {
    dispatch(pendingDispatch())
    axios(settings).then(response => {
      dispatch(successDispatch(response.data))
      return response.data
    })
    .catch(error => {
      dispatch(errorDispatch(error))
    })
  }
}