// Nabulous
// State argument is not the application,
// only the state this reducer is responsible for

export function ActiveBookReducer(state = null, action) {
	switch(action.type) {
		case "BOOK_SELECTED":
			return action.payload;
		default:
			return state;
	}
}
