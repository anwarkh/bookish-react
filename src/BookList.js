const BookList = ({books}) => {
    return <div data-test='book-list'>
        {books.map(book => renderBook(book))
        }
    </div>;
}

const renderBook = (book) => {
    return <div className='book-item' key={book.id}>
        <h2>{book.name}</h2>
    </div>
}

export {BookList}