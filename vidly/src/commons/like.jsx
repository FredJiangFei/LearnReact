import React from 'react';

const Like = props => {
  const className = props.liked ? 'fa fa-heart hand' : 'fa fa-heart-o hand';
  return <i className={className} onClick={props.onLike} />;
};

export default Like;
