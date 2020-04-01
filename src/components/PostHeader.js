import React from 'react';
import PropTypes from 'prop-types';

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

PostHeader.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
};

export default PostHeader;
