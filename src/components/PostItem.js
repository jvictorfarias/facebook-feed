import React from 'react';
import PostHeader from './PostHeader';
import PostComments from './PostComments';

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
