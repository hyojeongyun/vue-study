<template>
	<div class="contents">
		<div class="form-wrapper form-wrapper-sm">
			<form @submit.prevent="submitForm" class="form">
				<div>
					<label for="username">ID</label>
					<input
						id="username"
						type="text"
						v-model="username"
						:class="usernameValidClass"
					/>
					<p class="validation-text">
						<span class="warning" v-if="!isUsernameValid">
							Please enter an email address
						</span>
					</p>
				</div>
				<div>
					<label for="password">PW</label>
					<input
						id="password"
						type="password"
						v-model="password"
						:class="passwordValidClass"
					/>
					<p class="validation-text">
						<span class="warning" v-if="!isPasswordValid">
							Password must be over 8 letters
						</span>
					</p>
				</div>
				<div>
					<label for="nickname">Nickname</label>
					<input
						id="nickname"
						type="text"
						v-model="nickname"
						:class="nicknameValidClass"
					/>
				</div>
				<button
					:class="isButtonDisabled"
					:disabled="isButtonDisabled"
					type="submit"
					class="btn"
				>
					Create
				</button>
			</form>
			<p class="log">{{ logMessage }}</p>
		</div>
	</div>
</template>

<script>
import { registerUser } from '@/api/user';
import { validateEmail, validatePassword } from '@/utils/validation';
import bus from '@/utils/bus.js';

export default {
	data() {
		return {
			// form value
			username: '',
			password: '',
			nickname: '',
			// log
			logMessage: '',
		};
	},
	computed: {
		isUsernameValid() {
			if (!this.username) {
				return true;
			}
			return validateEmail(this.username);
		},
		usernameValidClass() {
			if (!this.username) {
				return;
			}
			return validateEmail(this.username) ? 'valid' : 'invalid';
		},
		isPasswordValid() {
			if (!this.password) {
				return true;
			}
			return validatePassword(this.password);
		},
		passwordValidClass() {
			if (!this.password) {
				return true;
			}
			return validatePassword(this.password) ? 'valid' : 'invalid';
		},
		nicknameValidClass() {
			return this.nickname ? 'valid' : null;
		},
		isButtonDisabled() {
			return !this.username ||
				!this.password ||
				!this.nickname ||
				!validateEmail(this.username) ||
				!validatePassword(this.password)
				? 'disabled'
				: null;
		},
	},
	methods: {
		async submitForm() {
			try {
				await registerUser({
					username: this.username,
					password: this.password,
					nickname: this.nickname,
				});
				this.initForm();
				bus.$emit('show:toast', `User is created`);
				this.$router.push('/login');
			} catch (error) {
				if (error.response.status === 400) {
					this.logMessage = `${this.username} already exists`;
				}
			}
		},
		initForm() {
			this.username = '';
			this.password = '';
			this.nickname = '';
		},
	},
};
</script>

<style scoped></style>
