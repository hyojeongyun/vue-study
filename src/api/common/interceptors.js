import store from '@/store/index';

const style = color => `font-weight: 800; font-size: 16px; color : ${color}`;

export function setInterceptors(instance) {
	// Add a request interceptor
	instance.interceptors.request.use(
		function (config) {
			console.log(config);
			config.headers['Authorization'] = store.state.token;
			console.log(`%c Request: ${config.url}`, style('#a34e24'));
			return config;
		},
		function (error) {
			return Promise.reject(error);
		},
	);

	// Add a response interceptor
	instance.interceptors.response.use(
		function (response) {
			console.log(
				`%c Response Suc: ${response.config.url}`,
				style('#2E64FE'),
				response.data,
			);
			return response;
		},
		function (error) {
			const err = error.response;
			console.log(
				`%c Response Err: ${err.config.url}`,
				style('#FA5858'),
				err,
			);
			return Promise.reject(error);
		},
	);

	return instance;
}
