<template>
	<div class="home">
		<h1>Блог</h1>
		<section class="content articles" v-if="articles.length">
			<ArticleItem v-for="article in articles" :key="article.id" :article="article" />
		</section>
		<h3 v-else>Статей нет</h3>
	</div>
</template>

<script>
import ArticleItem from '../components/Article/Item'
import { mapGetters } from 'vuex'

export default {
	name: 'Home',
	computed: {
		...mapGetters(['articles']),
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
