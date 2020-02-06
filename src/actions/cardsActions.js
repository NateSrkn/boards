const axios = require('axios').default

export const GET_CARDS = 'boards:getCards'

export function getCards() {
  return {
    type: GET_CARDS,
    payload: {
      boards: 'Hello'
    }
  }
}

export function boardsRequest() {
  return dispatch => {
    console.log('Fetching Board')
    let baseUrl = 'https://api.trello.com/1/members/me/boards'
    let apiKey = '6f3a2f486fb0f2b4bd1ee5fc426a9e5c'
    let token = '8fb9efddbf595cf38d75408e5b9851bca9a135008eaebdbc47fc4089d66b64af'
    const settings = {
      params: {
        key: apiKey,
        token: token
      }
    }
    return axios
      .get(baseUrl, settings)
      .then(res => res.data)
      .catch(err => console.log(err))
  }
}