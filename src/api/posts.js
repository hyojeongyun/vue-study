import { apiWithAuth } from '@/api/index';

// 학습 노트 조회 API
function fetchPosts() {
	return apiWithAuth.get('posts');
}

// 학습 노트 생성 API
function createPost(postData) {
	return apiWithAuth.post('posts', postData);
}

export { fetchPosts, createPost };
