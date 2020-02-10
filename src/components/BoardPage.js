import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { apiCall, baseUrl } from '../helpers/api/callApi'
import CardList from './CardList'
import { Loading } from './Loading'
import { fetchBoardPending, fetchBoardSuccess, fetchBoardError } from '../actions/boardActions'
class BoardPage extends Component {

  componentDidMount() {
    this.fetchBoard()
  }

  fetchBoard() {
    const { shortLink } = this.props.match.params
    const { apiCall } = this.props
    let options = {
      base: {
        url: baseUrl + `/1/boards/${shortLink}`,
        method: 'get',
      },
      params: {
        cards: 'all'
      }
    }
    apiCall(options, fetchBoardPending, fetchBoardSuccess, fetchBoardError)
  }

  render() {
    const { board, cards } = this.props
    const { meta: { isLoading } } = this.props

    if (isLoading) return <Loading fallback="Loading your board..." />
    return (
      <div className="text-left">
        <h3 className="title">{board.name}</h3>
        <CardList cards={cards} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  board: state.currentBoard.data,
  cards: state.currentBoard.data.cards || [],
  meta: state.currentBoard.meta
})

const mapDispatchToProps = dispatch => bindActionCreators({
  apiCall: apiCall
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BoardPage)