export const COMMENTS = [
	{
		id: 1,
		articleId: 1,
		name: 'Максим',
		text: 'Спасибо!',
	},
	{
		id: 2,
		articleId: 1,
		name: 'Петр',
		text: `Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности 
		представляет собой интересный эксперимент проверки форм развития. Идейные соображения высшего порядка, 
		а также сложившаяся структура организации позволяет выполнять важные задания по разработке дальнейших направлений развития.`,
	},
	{
		id: 3,
		articleId: 2,
		name: 'Вася',
		text: `Много интересного`,
	},
]

if (!localStorage.getItem('comments')) {
	localStorage.setItem('comments', JSON.stringify(COMMENTS))
}

export const fetchComments = () => {
	return JSON.parse(localStorage.getItem('comments')) || []
}

export const getComments = (id) => {
	const comments = fetchComments()

	return comments.filter(({ articleId }) => articleId === +id)
}

export const addComment = (comment) => {
	const comments = [...fetchComments(), comment]

	setComments(comments)
}

export const removeComment = (id) => {
	const comments = fetchComments()
	const newComments = comments.filter((comment) => comment.id !== id)

	setComments(newComments)
}

export const setComments = (comments) => {
	localStorage.setItem('comments', JSON.stringify(comments))
}
