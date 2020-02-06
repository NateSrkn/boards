import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { apiCall, baseUrl } from '../helpers/api/callApi'
import { fetchBoardPending, fetchBoardSuccess, fetchBoardError } from '../actions/boardActions'

class BoardPage extends Component {

  componentDidMount() {
    const { shortLink } = this.props.match.params
    this.fetchBoard(shortLink)
  }
  
  fetchBoard(shortLink) {
    const { apiCall } = this.props
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

  shouldComponentRender() {
    const { meta: pending } = this.props
    if(pending) return false
    return true
  }

  render() {
    const { board, cards } = this.props
    const { meta: pending } = this.props

    if (pending) return <h1>Loading...</h1>
    return (
      <div>
        <div className="section">
          <h1 className="title">Board Page</h1>

        </div>
        <h1>{board.name}</h1>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  board: state.currentBoard.data,
  cards: state.currentBoard.data.cards,
  meta: state.currentBoard.meta
})

const mapDispatchToProps = dispatch => bindActionCreators({
  apiCall: apiCall
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BoardPage)