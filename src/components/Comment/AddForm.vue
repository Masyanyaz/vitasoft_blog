<template>
	<form @submit.prevent="submitForm">
		<h3>Добавить комментарий</h3>
		<label class="item">
			<span class="required">Имя</span>
			<input type="text" v-model.trim="name" />
		</label>
		<label class="item">
			<span class="required">Текст</span>
			<textarea v-model.trim="text" />
		</label>
		<button type="submit" :disabled="isDisabled">Отправить</button>
	</form>
</template>

<script>
export default {
	props: {
		id: Number,
	},
	data: () => ({
		name: '',
		text: '',
	}),
	computed: {
		isDisabled() {
			const { name, text } = this

			return !(name && text)
		},
	},
	methods: {
		submitForm() {
			const { id, name, text, resetForm } = this

			if (name && text) {
				this.$emit('addComment', {
					id: Date.now(),
					articleId: id,
					name,
					text,
				})

				resetForm()
			}
		},
		resetForm() {
			this.name = ''
			this.text = ''
		},
	},
	name: 'CommentAddForm',
}
</script>

<style scoped>
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

.item:last-child {
	margin-bottom: 0;
}

h3 {
	margin-bottom: 10px;
	font-size: 18px;
}
</style>
