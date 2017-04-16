import * as React from "react";
import * as ReactDOM from "react-dom";
import { BookListConnect } from "../containers/book_list";
import { BookDetailConnect } from "../containers/book_detail";

export const App = () => {
	return <div>
		<BookListConnect></BookListConnect>
		<BookDetailConnect></BookDetailConnect>
	</div>;
}
