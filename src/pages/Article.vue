<template>
	<section class="content" v-if="article">
		<div class="article">
			<div class="title">
				<h1>{{ article.title }}</h1>
				<img src="../assets/edit.svg" @click="openModal" alt="" width="20" title="Редактировать" />
				<img src="../assets/delete.svg" @click="removeArticle" alt="" width="20" title="Удалить" />
			</div>
			<p>{{ article.content }}</p>
		</div>

		<CommentContainer :id="article.id" />

		<section v-if="isOpenModal" class="form" @click.self="closeModal">
			<div class="modal">
				<button class="reset close" @click="closeModal">&times;</button>
				<ArticleForm :article="article" @closeModal="closeModal" />
			</div>
		</section>
	</section>
</template>

<script>
import CommentContainer from '../components/Comment/Container'
import ArticleForm from '../components/Article/Form'

export default {
	data: () => ({
		isOpenModal: false,
	}),
	computed: {
		article() {
			const { id } = this.$route.params
			return this.$store.getters.article(id)
		},
	},
	created() {
		if (!this.article) {
			this.$router.push('/404')
		}
	},
	methods: {
		openModal() {
			this.isOpenModal = true
		},
		closeModal() {
			this.isOpenModal = false
		},
		removeArticle() {
			this.$store.dispatch('removeArticle', this.article.id)
			this.$router.push('/')
		},
	},
	components: {
		CommentContainer,
		ArticleForm,
	},
}
</script>

<style scoped>
.article {
	margin-bottom: 30px;
}

.title {
	display: flex;
	align-items: center;
}

.title img {
	margin-left: 10px;
	cursor: pointer;
}

.form {
	position: fixed;
	top: 0;
	bottom: -100px;
	right: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.3);
	z-index: 15;
}

.modal {
	min-width: 520px;
	background-color: #fff;
	position: absolute;
	padding: 20px 30px 10px;
	left: 50%;
	top: 10%;
	border-radius: 10px;
	transform: translateX(-50%);
	box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
}

.close {
	position: absolute;
	top: 0;
	right: 0;
	font-size: 22px;
	line-height: 22px;
	transition: 0.1s ease;
}

.close:hover {
	transform: scale(1.3);
}

@media (max-width: 576px) {
	.modal {
		width: 100%;
		min-width: 320px;
	}
}
</style>
