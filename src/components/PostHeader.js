import React from 'react';

function PostHeader({ name, avatar, date }) {
  return (
    <div className="post-header">
      <img className="avatar" src={avatar} />
      <div className="details">
        <span>{name}</span>
        <span>
          {date.getUTCDate()} do {date.getMonth()} de {date.getFullYear()}
        </span>
      </div>
    </div>
  );
}

export default PostHeader;
