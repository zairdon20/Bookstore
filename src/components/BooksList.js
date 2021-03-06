import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

function BooksList({ books }) {
  return (
    <ul>
      {books.map((book) => (
        <BookItem
          key={book.item_id}
          book={book}
        />
      ))}
    </ul>
  );
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(BookItem.propTypes.book).isRequired,
};

export default BooksList;
