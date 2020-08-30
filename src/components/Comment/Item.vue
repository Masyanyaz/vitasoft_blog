<template>
	<div class="comment">
		<button class="reset remove" @click="$store.dispatch('removeComment', comment.id)">
			&times;
		</button>
		<h4>{{ comment.name }}</h4>
		<p>{{ comment.text }}</p>
	</div>
</template>

<script>
export default {
	name: 'CommentItem',
	props: {
		comment: Object,
	},
}
</script>

<style scoped>
.comment {
	padding: 10px 20px;
	position: relative;
	background-color: #f0f0f0;
	border-radius: 10px;
	margin-bottom: 15px;
}
</style>
