<template>
	<li>
		<div class="post-title">{{ postItem.title }}</div>
		<div class="post-contents">{{ postItem.contents }}</div>
		<div class="post-time">
			{{ postItem.createdAt | formatDate }}
			<i class="icon ion-md-create" @click="routeEditPage()"></i>
			<i class="icon ion-md-trash" @click="deleteItem()"></i>
		</div>
	</li>
</template>

<script>
import { deletePost } from '@/api/posts';
import bus from '@/utils/bus.js';

export default {
	props: {
		postItem: {
			type: Object,
			required: true,
		},
	},
	methods: {
		async deleteItem() {
			if (confirm('Delete it?')) {
				const response = await deletePost(this.postItem._id);
				bus.$emit('show:toast', `${response.data.title} was deleted`);
				this.$emit('refresh');
			}
		},
		routeEditPage() {
			this.$router.push(`/post/${this.postItem._id}`);
		},
	},
};
</script>
