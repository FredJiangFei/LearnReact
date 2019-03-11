import React from 'react';

const Like = props => {
  const className = props.liked ? 'fa fa-heart' : 'fa fa-heart-o';
  return (
    <i
      className={className}
      style={{ cursor: 'pointer' }}
      onClick={props.onLike}
    />
  );
};

export default Like;
