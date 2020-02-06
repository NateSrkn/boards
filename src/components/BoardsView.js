import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { apiCall, baseUrl } from '../helpers/api/callApi'
import BoardCard from './BoardCard'
import { fetchBoardsPending, fetchBoardsSuccess, fetchBoardsError } from '../actions/boardsActions'

class BoardsView extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentRender = this.shouldComponentRender.bind(this)
  }

  componentDidMount() {
    this.fetchBoards()
  }

  fetchBoards() {
    const { apiCall } = this.props
    let settings = {
      url: baseUrl + `1/members/me/boards`,
      method: 'get',
      params: {
        key: process.env.REACT_APP_API_KEY,
        token: process.env.REACT_APP_TOKEN
      }
    }
    apiCall(settings, 'Boards retrieved', fetchBoardsPending, fetchBoardsError, fetchBoardsSuccess)
  }

  shouldComponentRender() {
    const { meta: pending } = this.props
    if(pending === false) return false
    return true
  }

  render() {
    const { boards } = this.props
    if(!this.shouldComponentRender()) return <h1>Loading boards...</h1>

    return (
      <div className="columns">
        {boards.map(board => (
          <div className="column" key={board.id}>
            <BoardCard board={board} />
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  boards: state.boards.data,
  meta: state.boards.meta,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  apiCall: apiCall
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BoardsView)