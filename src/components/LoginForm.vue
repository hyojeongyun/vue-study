<template>
	<div class="contents">
		<div class="form-wrapper form-wrapper-sm">
			<form @submit.prevent="submitForm" class="form">
				<div>
					<label for="username">ID</label>
					<input id="username" type="text" v-model="username" />
					<p class="validation-text">
						<span
							class="warning"
							v-if="!isUsernameValid && username"
						>
							Please enter an email address
						</span>
					</p>
				</div>
				<div>
					<label for="password">PW</label>
					<input id="password" type="password" v-model="password" />
				</div>
				<button
					:disabled="!isUsernameValid || !password"
					type="submit"
					class="btn"
					:class="!isUsernameValid || !password ? 'disabled' : null"
				>
					Login
				</button>
			</form>
			<p class="log">{{ logMessage }}</p>
		</div>
	</div>
</template>

<script>
import { validateEmail } from '@/utils/validation';
import bus from '@/utils/bus.js';

export default {
	data() {
		return {
			//form value
			username: '',
			password: '',
			// log
			logMessage: '',
		};
	},
	computed: {
		isUsernameValid() {
			return validateEmail(this.username);
		},
	},
	methods: {
		async submitForm() {
			try {
				const userData = {
					username: this.username,
					password: this.password,
				};
				const response = await this.$store.dispatch('LOGIN', userData);
				bus.$emit('show:toast', response.message);
				this.$router.push('/main');
			} catch (error) {
				this.logMessage = error.response.data;
			} finally {
				this.initForm();
			}
		},

		initForm() {
			this.username = '';
			this.password = '';
		},
	},
};
</script>

<style></style>
