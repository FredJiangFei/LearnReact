import React from 'react';

const ListGroup = props => {
  return (
    <ul className="list-group">
      {props.groups.map(g => (
        <li
          className={
            props.currentGroup === g.name
              ? 'list-group-item active'
              : 'list-group-item'
          }
          style={{ cursor: 'pointer' }}
          key={g._id}
          onClick={() => props.changeListGroup(g)}
        >
          {g.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
