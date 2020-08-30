const setComments = (comments) => {
	localStorage.setItem('comments', JSON.stringify(comments))
}

export default {
	state: {
		comments: JSON.parse(localStorage.getItem('comments')) || [],
	},
	mutations: {
		createComment(state, newComment) {
			state.comments.push(newComment)

			setComments(state.comments)
		},
		removeComment(state, id) {
			const idx = state.comments.findIndex((c) => c.id === id)
			state.comments.splice(idx, 1)

			setComments(state.comments)
		},
		removeComments(state, articleId) {
			state.comments = state.comments.filter((c) => c.articleId !== articleId)

			setComments(state.comments)
		},
	},
	actions: {
		createComment({ commit }, newComment) {
			commit('createComment', newComment)
		},
		removeComment({ commit }, id) {
			commit('removeComment', id)
		},
	},
	getters: {
		comments: (state) => (id) => state.comments.filter((c) => c.articleId === +id),
	},
}
