interface Iprops{
  comments: string
}

const CommentsCard : React.FC<any> = ({comment}): JSX.Element => {
  return (
    <div className="comments-card">
      <div className="user-profile">
        <img src="/logo.webp" alt="" />
        <h5>
          <b>{comment.commentator.username}</b>
        </h5>
      </div>

      <div className="coms-value">
        <p>
        {comment.content}
        </p>
      </div>
    </div>
  );
};

export default CommentsCard;
