<template>
	<div class="home">
		<h1>Блог</h1>
		<section class="content articles" v-if="articles.length">
			<ArticleItem
				v-for="article in articles"
				:key="article.id"
				:article="article"
				@removeArticle="removeArticle"
			/>
		</section>
		<h3 v-else>Статей нет</h3>
	</div>
</template>

<script>
import ArticleItem from '../components/Article/Item'
import { getArticles, removeArticle } from '../components/Article/models'

export default {
	name: 'Home',
	data: () => ({
		articles: [],
	}),
	created() {
		this.fetchArticles()
	},
	methods: {
		fetchArticles() {
			this.articles = getArticles()
		},
		removeArticle(id) {
			if (confirm('Вы уверены, что хотите удалить статью?')) {
				this.articles = this.articles.filter((article) => article.id !== id)
				removeArticle(id)
			}
		},
	},
	components: {
		ArticleItem,
	},
}
</script>

<style scoped>
.articles {
	display: flex;
	align-items: center;
	flex-direction: column;
}
</style>
