import React from 'react';
import PropTypes from 'prop-types';

function PostComments({ comments }) {
  return (
    <div className="post-comments">
      <div className="divider">
        {comments.map(comment => (
          <div key={comment.id} className="comment">
            <img className="avatar" src={comment.author.avatar}></img>
            <p>
              <span>{comment.author.name}</span>
              {comment.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

PostComments.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default PostComments;
