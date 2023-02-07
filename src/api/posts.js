import { apiWithAuth } from '@/api/index';

// 학습 노트 조회 API
function fetchPosts() {
	return apiWithAuth.get('posts');
}

// 학습 노트 생성 API
function createPost(postData) {
	return apiWithAuth.post('posts', postData);
}

// 학습 노트 삭제 API
function deletePost(postId) {
	return apiWithAuth.delete(`posts/${postId}`);
}

// 특정 학습 노트 조회 API
function fetchPost(postId) {
	return apiWithAuth.get(`posts/${postId}`);
}

// 학습 노트 수정 API
function editPost(postId, postData) {
	return apiWithAuth.put(`posts/${postId}`, postData);
}

export { fetchPost, fetchPosts, createPost, deletePost, editPost };
