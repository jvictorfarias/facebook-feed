import React from 'react';
import PostHeader from './PostHeader';
import PostComments from './PostComments';
import PropTypes from 'prop-types';

function PostItem({ author, date, subject, comments }) {
  return (
    <div className="post">
      <PostHeader {...author} date={date} />
      <p className="post-subject">{subject}</p>
      <PostComments comments={comments} />
    </div>
  );
}

export default PostItem;

PostItem.propTypes = {
  author: PropTypes.object.isRequired,
  date: PropTypes.object.isRequired,
  subject: PropTypes.string.isRequired,
  comments: PropTypes.array,
};

PostItem.defaultProps = {
  comments: [],
};
