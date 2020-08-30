<template>
	<article class="article">
		<button class="reset remove" @click="removeArticle">&times;</button>
		<router-link :to="articleLink" tag="h2">{{ article.title }}</router-link>
		<p>{{ article.preview }}</p>
		<div class="article-footer">
			<div>
				Комментариев: <span>{{ article.comments.length }}</span>
			</div>
			<router-link :to="articleLink" tag="button" class="reset link">Подробнее</router-link>
		</div>
	</article>
</template>

<script>
export default {
	name: 'ArticleItem',
	methods: {
		removeArticle() {
			this.$store.dispatch('removeArticle', this.article.id)
		},
	},
	computed: {
		articleLink() {
			return `/post-${this.article.id}`
		},
	},
	props: {
		article: Object,
	},
}
</script>

<style scoped>
h2 {
	cursor: pointer;
	display: inline;
}

.link:hover {
	text-decoration: underline;
}

.article {
	width: 100%;
	max-width: 700px;
	padding: 20px;
	margin: 20px 0;
	border: 1px solid #bababa;
	border-radius: 5px;
	transition: 100ms ease;
	position: relative;
}

.article:hover {
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
}

.article-footer {
	display: flex;
	justify-content: space-between;
	margin-top: 10px;
}

@media (max-width: 400px) {
	.article-footer {
		flex-direction: column;
	}

	.link {
		margin-top: 15px;
	}
}
</style>
