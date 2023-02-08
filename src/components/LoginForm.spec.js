import { shallowMount } from '@vue/test-utils';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
	test('ID가 이메일 형식이 아니면 경고 메세지 출력', () => {
		const wrapper = shallowMount(LoginForm, {
			data() {
				return {
					username: 'test',
				};
			},
		});

		const warningText = wrapper.find('.warning');
		expect(warningText.exists()).toBeTruthy();
	});

	test('ID와 PW가 입력되지 않으면 로그인 버튼 비활성화', () => {
		const wrapper = shallowMount(LoginForm, {
			data() {
				return {
					username: '',
					password: '',
				};
			},
		});

		const button = wrapper.find('.btn');
		expect(button.element.disabled).toBeTruthy();
	});
});
