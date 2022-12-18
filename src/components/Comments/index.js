import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
const userCommentList = []

class Comments extends Component {
  state = {
    name: '',
    comment: '',
    commentList: userCommentList,
  }

  onAddComment = event => {
    event.preventDefault()

    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const dateTime = new Date()
    const StringDateTime = dateTime.toString()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      commentDate: StringDateTime.slice(0, 24),
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      comment: '',
    }))
  }

  //   timerCountDown = () => {
  //     this.timerID = setInterval(this.tick, 1000)
  //   }

  //    tick = () => {

  //   }

  toggleIsLicked = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isLiked: !eachItem.isLiked}
        }
        return eachItem
      }),
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeTextArea = event => {
    this.setState({comment: event.target.value})
  }

  deleteCommentItem = id => {
    const {commentList} = this.state
    const filteredCommentList = commentList.filter(
      eachItem => eachItem.id !== id,
    )
    this.setState({commentList: filteredCommentList})
  }

  render() {
    const {name, comment, commentList} = this.state
    const commentCount = commentList.length
    return (
      <div className="bg-container">
        <h1 className="comment-heading">Comments</h1>
        <div className="content-container">
          <form className="content-sub-container" onSubmit={this.onAddComment}>
            <p className="comment-description">
              Say something about 4.0 Technology
            </p>
            <input
              type="text"
              className="user-name"
              onChange={this.onChangeName}
              placeholder="Your Name"
              value={name}
            />
            <div className="col-75">
              <textarea
                className="text-area"
                onChange={this.onChangeTextArea}
                placeholder="Your Comment"
                value={comment}
              />
            </div>
            <button className="add-comment-button" type="submit">
              Add Comment
            </button>
          </form>
          <div className="img-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              className="img"
              alt="comments"
            />
          </div>
        </div>
        <hr className="hr-line" />
        <div className="button-container">
          <p className="comments-counts">
            <span className="comment-count-span">{commentCount}</span> Comments
          </p>
          <ul className="comment-list">
            {commentList.map(eachComment => (
              <CommentItem
                eachComment={eachComment}
                toggleIsLicked={this.toggleIsLicked}
                deleteCommentItem={this.deleteCommentItem}
                key={eachComment.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Comments
