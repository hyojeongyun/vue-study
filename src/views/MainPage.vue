<template>
	<div>
		<div class="main list-container contents">
			<h1 class="page-header">Today I Learned</h1>
			<LoadingSpinner v-if="isLoading"></LoadingSpinner>
			<ul v-else>
				<PostListItem
					v-for="(postItem, index) in postItems"
					:key="index"
					:postItem="postItem"
				></PostListItem>
			</ul>
		</div>
	</div>
</template>

<script>
import { fetchPosts } from '@/api/index';
import PostListItem from '@/components/posts/PostListItem.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';

export default {
	components: {
		PostListItem,
		LoadingSpinner,
	},
	created() {
		this.fetchData();
	},
	data() {
		return {
			postItems: [],
			isLoading: false,
		};
	},
	methods: {
		async fetchData() {
			this.isLoading = true;
			const { data } = await fetchPosts();
			this.isLoading = false;
			this.postItems = data.posts;
		},
	},
};
</script>

<style lang="scss" scoped></style>
