<template>
	<section class="content">
		<h3>{{ heading }}</h3>
		<form @submit.prevent="submitForm">
			<label class="item">
				<span class="required">Заголовок</span>
				<input type="text" v-model.trim="title" />
			</label>
			<label class="item">
				<span class="required">Краткое описание</span>
				<textarea v-model.trim="preview" />
			</label>
			<label class="item">
				<span class="required">Полное описание</span>
				<textarea v-model.trim="content" />
			</label>
			<div v-if="isEdit" class="buttons">
				<button type="submit" :disabled="isDisabled">Сохранить</button>
				<button type="button" @click="closeModal">Отмена</button>
			</div>
			<button v-else type="submit" :disabled="isDisabled">Добавить</button>
		</form>
	</section>
</template>

<script>
export default {
	props: {
		id: Number,
		article: Object,
	},
	data: () => ({
		isEdit: false,
		title: '',
		preview: '',
		content: '',
	}),
	created() {
		if (this.article) {
			this.isEdit = true
			this.title = this.article.title
			this.preview = this.article.preview
			this.content = this.article.content
		}
	},
	computed: {
		heading() {
			return this.isEdit ? 'Редактирование записи' : 'Добавить новую запись'
		},
		isDisabled() {
			const { title, preview, content } = this

			return !(title && preview && content)
		},
	},
	methods: {
		submitForm() {
			const { isEdit, title, preview, content, resetForm, closeModal } = this

			if (title && preview && content) {
				if (isEdit) {
					this.$store.dispatch('updateArticle', {
						id: this.article.id,
						title,
						preview,
						content,
					})

					closeModal()
				} else {
					this.$store.dispatch('createArticle', {
						id: Date.now(),
						title,
						preview,
						content,
					})

					resetForm()
				}
			}
		},
		closeModal() {
			this.$emit('closeModal')
		},
		resetForm() {
			this.title = ''
			this.preview = ''
			this.content = ''
		},
	},
	name: 'ArticleForm',
}
</script>

<style scoped>
section {
	display: flex;
	flex-direction: column;
	align-items: center;
}

form {
	display: flex;
	flex-direction: column;
	max-width: 500px;
	width: 100%;
	margin-bottom: 20px;
}

textarea {
	resize: vertical;
	min-height: 100px;
	max-height: 500px;
}

.item {
	display: flex;
	flex-direction: column;
	margin-bottom: 15px;
}

.item .required {
	font-weight: 600;
}

.required:after {
	content: '*';
	color: #ff6e6e;
	margin-left: 5px;
}

.buttons {
	display: flex;
	justify-content: space-around;
}

.item:last-child {
	margin-bottom: 0;
}

h3 {
	margin-bottom: 10px;
	font-size: 18px;
}
</style>
