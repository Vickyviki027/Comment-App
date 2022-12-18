// Write your code here
import './index.css'

const CommentItem = props => {
  const {eachComment, deleteCommentItem, toggleIsLicked} = props
  const {
    id,
    name,
    comment,
    commentDate,
    isLiked,
    initialClassName,
  } = eachComment

  const likeIcon = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeTextClassName = isLiked ? 'liked-color' : ''
  const onClickLike = () => {
    toggleIsLicked(id)
  }

  const onClickDelete = () => {
    deleteCommentItem(id)
  }

  return (
    <li className="comment-list-item">
      <div className="user-name-container">
        <h1 className={`logo ${initialClassName}`}>{name[0]}</h1>
        <div className=".name-and-time">
          <div className="name-con">
            <h1 className="name">{name}</h1>
            <p className="comment-time">{commentDate}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="icons-con">
        <div>
          <button
            className={`icon-button ${likeTextClassName}`}
            type="button"
            onClick={onClickLike}
          >
            <img src={likeIcon} className="icon" alt="like" />
            Like
          </button>
        </div>
        <button
          className="icon-button"
          testid="delete"
          type="button"
          onClick={onClickDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="icon"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default CommentItem
