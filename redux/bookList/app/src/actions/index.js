export function selectBook(book) {
	// Selectbook is an action creator - an object with a type property
	return {
		type: "BOOK_SELECTED",
		payload: book
	};
}
