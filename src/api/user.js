import { api } from '@/api/index';

// 회원가입 API
function registerUser(userData) {
	return api.post('signup', userData);
}

// 로그인 API
function loginUser(userData) {
	return api.post('login', userData);
}

export { registerUser, loginUser };
