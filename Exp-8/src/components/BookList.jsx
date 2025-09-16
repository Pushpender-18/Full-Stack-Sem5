function Book({ title, author, onRemove }) {
	return (
		<div className="book">
			<p><strong>{title}</strong> by {author}</p>
			<button onClick={() => onRemove(title)}>Remove</button>
		</div>
	);
}

export default function BookList({ books, onRemove }) {
	return (
		<div className="book-list">
			{books.map(book => (
				<Book title={book.title} author={book.author} onRemove={onRemove} />
			))}
		</div>
	);
}