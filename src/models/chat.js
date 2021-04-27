const initialState = {
	users: []
};

const chatModel = {
	state: { ...initialState },

	reducers: {
		updateUsers(state, payload) {
			return {
				...state,
				users: payload
			};
		}
	},

	effects: (dispatch) => ({
		fetchUsers() {
			dispatch.chat.updateUsers([1, 2, 3]);
		}
	})
};

export default chatModel;