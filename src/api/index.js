import axios from 'axios';
import { setInterceptors } from './common/interceptors';

function createInstance() {
	const instance = axios.create({
		baseURL: process.env.VUE_APP_API_URL,
	});
	return setInterceptors(instance, false);
}

// axios 초기화
function createInstanceWithAuth() {
	const instance = axios.create({
		baseURL: process.env.VUE_APP_API_URL,
	});
	return setInterceptors(instance, true);
}

export const api = createInstance();
export const apiWithAuth = createInstanceWithAuth();
