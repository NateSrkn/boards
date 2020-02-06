const axios = require('axios').default
export const baseUrl = 'https://api.trello.com/'

export const apiCall = (settings, message = "Request Successful", pendingDispatch, errorDispatch, successDispatch) => {
  
  return dispatch => {
    dispatch(pendingDispatch())
    axios(settings).then(response => {
      console.log(message)
      dispatch(successDispatch(response.data))
      return response.data
    })
    .catch(error => {
      // if ( error.response.status ) {
      //   console.log(`Status: ${error.response.status} \nStatus Text: ${error.response.statusText} \nURL: ${error.config.url} \nMethod: ${error.config.method} \nData: ${error.config.data}`)
      // } else {
      //   console.log(error)
      // }
      dispatch(errorDispatch(error))
    })
  }
}

