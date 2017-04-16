import { combineReducers } from "redux";
import { BooksReducer } from "./reducer_books" 
import { ActiveBookReducer } from "./reducer_active_book"

export const rootReducer = combineReducers({
	books: BooksReducer,
	activeBook: ActiveBookReducer
});
