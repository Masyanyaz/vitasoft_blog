<template>
	<div class="comments">
		<div class="comments-header">
			<h3>
				Комментарии <span>{{ comments.length }}</span>
			</h3>
		</div>

		<CommentItem
			v-for="comment in comments"
			:key="comment.id"
			:comment="comment"
			@removeComment="removeComment"
		/>

		<CommentAddForm @addComment="addComment" :id="id" />
	</div>
</template>

<script>
import CommentAddForm from './AddForm'
import CommentItem from './Item'
import { getComments, addComment, removeComment } from './models'

export default {
	props: {
		id: Number,
	},
	data: () => ({
		comments: [],
	}),
	created() {
		this.fetchComments()
	},
	methods: {
		fetchComments() {
			this.comments = getComments(this.id)
		},
		addComment(comment) {
			this.comments.push(comment)

			addComment(comment)
		},
		removeComment(id) {
			this.comments = this.comments.filter((comment) => comment.id !== id)

			removeComment(id)
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
