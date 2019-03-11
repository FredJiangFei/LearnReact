import React from 'react';
import _ from 'lodash';

const Pagination = props => {
  let { itemsCount, currentPage, pageSize, onPageChange } = props;

  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) {
    return null;
  }

  const pages = _.range(1, pageCount + 1);

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        {pages.map(page => (
          <li
            style={{ cursor: 'pointer' }}
            className={currentPage === page ? 'page-item active' : 'page-item'}
            key={page}
            onClick={() => onPageChange(page)}
          >
            <a className="page-link">{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
