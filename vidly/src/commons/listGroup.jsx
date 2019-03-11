import React from 'react';

const ListGroup = props => {
  let {
    genres,
    textProperty,
    valueProperty,
    onItemSelect,
    selectedGenre
  } = props;

  return (
    <ul className="list-group">
      {genres.map(genre => (
        <li
          className={
            selectedGenre === genre
              ? 'list-group-item hand active'
              : 'list-group-item hand'
          }
          key={genre[valueProperty]}
          onClick={() => onItemSelect(genre)}
        >
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id'
};

export default ListGroup;
