import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { apiCall, baseUrl } from '../helpers/api/callApi'
import BoardCard from './BoardCard'
import { Loading } from './Loading'
import { fetchBoardsPending, fetchBoardsSuccess, fetchBoardsError } from '../actions/boardsActions'

class BoardsView extends Component {
  
  componentDidMount() {
    this.fetchBoards()
  }

  fetchBoards() {
    const { apiCall } = this.props
    let options = {
      base: {
        url: baseUrl + `/1/members/me/boards`,
        method: 'get',
      }
    }
    apiCall(options, fetchBoardsPending, fetchBoardsSuccess, fetchBoardsError)
  }

  render() {
    const { boards } = this.props
    const { meta: { isLoading }} = this.props
    if(isLoading) return <Loading />

    return (
      <div className="container row justify-content-center">
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