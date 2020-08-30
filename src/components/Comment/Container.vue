<template>
	<div class="comments">
		<div class="comments-header">
			<h3>
				Комментарии <span>{{ comments.length }}</span>
			</h3>
		</div>

		<CommentItem v-for="comment in comments" :key="comment.id" :comment="comment" />

		<CommentAddForm :id="id" />
	</div>
</template>

<script>
import CommentAddForm from './AddForm'
import CommentItem from './Item'

export default {
	props: {
		id: Number,
	},
	computed: {
		comments() {
			return this.$store.getters.comments(this.id)
		},
	},
	components: {
		CommentAddForm,
		CommentItem,
	},
}
</script>

<style scoped>
.comments-header {
	border-bottom: 1px solid #bababa;
	font-size: 20px;
	margin-bottom: 20px;
}

.comments-header span {
	color: #548eaa;
}
</style>
