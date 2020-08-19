import { fetchComments, getComments, setComments } from '../Comment/models'

export const ARTICLES = [
	{
		id: 1,
		title: 'Ваш шедевр готов!',
		preview: `С другой стороны дальнейшее развитие различных форм деятельности требуют определения и 
		уточнения систем массового участия. Повседневная практика показывает, что укрепление и развитие структуры 
		обеспечивает широкому кругу`,
		content: `С другой стороны дальнейшее развитие различных форм деятельности требуют определения и 
		уточнения систем массового участия. Повседневная практика показывает, что укрепление и развитие структуры 
		обеспечивает широкому кругу (специалистов) участие в формировании форм развития. Не следует, однако забывать, 
		что постоянный количественный рост и сфера нашей активности требуют от нас анализа систем массового участия. 
		Не следует, однако забывать, что сложившаяся структура организации играет важную роль в формировании новых предложений. 
		Задача организации, в особенности же консультация с широким активом позволяет выполнять важные задания по разработке 
		новых предложений.`,
	},
	{
		id: 2,
		title: 'Важная тема',
		preview: `Задача организации, в особенности же постоянный количественный рост и сфера нашей активности 
		влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач.`,
		content: `Задача организации, в особенности же постоянный количественный рост и сфера нашей активности 
		влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач. 
		Товарищи! сложившаяся структура организации позволяет оценить значение систем массового участия. 
		Таким образом новая модель организационной деятельности способствует подготовки и реализации существенных 
		финансовых и административных условий.`,
	},
]

if (!localStorage.getItem('articles')) {
	localStorage.setItem('articles', JSON.stringify(ARTICLES))
}

export const fetchArticles = () => {
	return JSON.parse(localStorage.getItem('articles')) || []
}

export const getArticles = () => {
	const articles = fetchArticles()

	return articles.map((article) => {
		return {
			...article,
			comments: getComments(article.id),
		}
	})
}

export const getArticle = (id) => {
	const articles = fetchArticles()

	return articles.find((article) => article.id === +id)
}

export const addArticle = (article) => {
	const articles = [...fetchArticles(), article]

	setArticles(articles)
}

export const updateArticle = (article) => {
	const articles = fetchArticles()

	const articleIndex = articles.findIndex(({ id }) => id === article.id)

	setArticles([...articles.slice(0, articleIndex), article, ...articles.slice(articleIndex + 1)])
}

export const removeArticle = (id) => {
	const articles = fetchArticles()
	const comments = fetchComments()

	const newArticle = articles.filter((article) => article.id !== id)
	const newComments = comments.filter((comment) => comment.articleId !== id)

	setArticles(newArticle)
	setComments(newComments)
}

export const setArticles = (articles) => {
	localStorage.setItem('articles', JSON.stringify(articles))
}
