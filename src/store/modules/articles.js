const setArticles = (articles) => {
	localStorage.setItem('articles', JSON.stringify(articles))
}

export default {
	state: {
		articles: JSON.parse(localStorage.getItem('articles')) || [],
	},
	mutations: {
		removeArticle(state, id) {
			const idx = state.articles.findIndex((a) => a.id === id)
			state.articles.splice(idx, 1)

			setArticles(state.articles)
		},
		updateArticle(state, { id, title, preview, content }) {
			const articles = [...state.articles]
			const idx = articles.findIndex((a) => a.id === id)
			const article = articles[idx]

			articles[idx] = {
				...article,
				title,
				preview,
				content,
			}

			state.articles = articles

			setArticles(state.articles)
		},
		createArticle(state, newArticle) {
			state.articles.push(newArticle)

			setArticles(state.articles)
		},
	},
	actions: {
		removeArticle({ commit }, id) {
			if (confirm('Вы уверены, что хотите удалить статью?')) {
				commit('removeArticle', id)
				commit('removeComments', id)
			}
		},
		createArticle({ commit }, newArticle) {
			commit('createArticle', newArticle)
		},
		updateArticle({ commit }, id) {
			commit('updateArticle', id)
		},
	},
	getters: {
		articles(state, getters) {
			return state.articles.map((article) => {
				return {
					...article,
					comments: getters.comments(article.id),
				}
			})
		},
		article: (state) => (id) => state.articles.find((a) => a.id === +id),
	},
}
