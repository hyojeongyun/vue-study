<template>
	<div class="contents">
		<h1 class="page-header">Edit Post</h1>
		<div class="form-wrapper">
			<form class="form" @submit.prevent="submitForm">
				<div>
					<label for="title">Title</label>
					<input id="title" type="text" v-model="title" />
				</div>
				<div>
					<label for="contents">Contents</label>
					<textarea
						id="contents"
						type="text"
						cols="30"
						rows="5"
						v-model="contents"
					/>
					<p
						class="validation-text"
						:class="{ reverse: isContentTooLong }"
					>
						<span v-if="isContentTooLong" class="warning">
							Contents must be less than 200
						</span>
						<span>{{ contentsLength }} / 200</span>
					</p>
				</div>
				<button
					type="submit"
					class="btn"
					:disabled="isButtonDisabled"
					:class="isButtonDisabled"
				>
					Edit
				</button>
			</form>
			<p class="log">{{ logMessage }}</p>
		</div>
	</div>
</template>

<script>
import bus from '@/utils/bus.js';
import { fetchPost, editPost } from '@/api/posts';

export default {
	data() {
		return {
			title: '',
			contents: '',
			logMessage: '',
		};
	},
	async created() {
		const id = this.$route.params.id;
		const { data } = await fetchPost(id);
		this.title = data.title;
		this.contents = data.contents;
	},
	computed: {
		contentsLength() {
			return this.contents.length;
		},
		isContentTooLong() {
			return this.contents.length > 200;
		},
		isButtonDisabled() {
			return !this.title || !this.contents || this.contents.length > 200
				? 'disabled'
				: null;
		},
	},
	methods: {
		async submitForm() {
			const id = this.$route.params.id;
			try {
				const response = await editPost(id, {
					title: this.title,
					contents: this.contents,
				});
				bus.$emit('show:toast', `${response.data.title} was editted`);
				this.$router.push('/main');
			} catch (error) {
				this.logMessage = error.response.data.message;
			}
		},
	},
};
</script>

<style scoped>
.form-wrapper .form {
	width: 100%;
}
.btn {
	color: white;
}
</style>
