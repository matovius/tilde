<script lang="ts">
	import { Eye, EyeOff } from 'lucide-svelte';

	let passwordVisible: boolean = false;

	let EmailInput: HTMLInputElement;
	let PasswordInput: HTMLInputElement;
	let SignInButton: HTMLButtonElement;

	function handleSIgnInButtonActivity() {
		if (EmailInput.value !== '' && PasswordInput.value !== '') {
			SignInButton.removeAttribute('disabled');
		} else {
			SignInButton.setAttribute('disabled', '');
		}
	}
</script>

<svelte:head>
	<title>Sign Into Tilde</title>
</svelte:head>

<div id="heading" class="w-full flex justify-center items-center text-center">
	<h1 class="h1">Sign In</h1>
</div>

<form
	id="login-form"
	class="w-full max-w-lg p-24 flex flex-col justify-center items-center gap-24 rounded-3xl border border-black/10 dark:border-white/10"
	on:submit|preventDefault
>
	<label for="email-address" class="w-full flex flex-col gap-8">
		<span>Email address</span>
		<input
			type="email"
			name="email-address"
			id="email-address"
			placeholder="janedoe@example.com"
			class="input"
			bind:this={EmailInput}
			on:input={handleSIgnInButtonActivity}
		/>
	</label>
	<label for="password" class="w-full flex flex-col gap-8 relative">
		<span>Password</span>
		<div class="w-full flex flex-row gap-8">
			<input
				type="password"
				name="password"
				id="password"
				class="input"
				bind:this={PasswordInput}
				on:input={handleSIgnInButtonActivity}
			/>
			<button
				class="button"
				on:click={() => {
					passwordVisible = !passwordVisible;

					if (passwordVisible) {
						PasswordInput.type = 'text';
					} else {
						PasswordInput.type = 'password';
					}
				}}
			>
				{#if passwordVisible}
					<EyeOff />
					<span class="sr-only">Hide password</span>
				{:else}
					<Eye />
					<span class="sr-only">Show password</span>
				{/if}
			</button>
		</div>
	</label>
	<div class="w-full">
		<button
			class="button primary w-full justify-center items-center"
			disabled
			bind:this={SignInButton}>Sign In</button
		>
	</div>
</form>

<div class="w-full max-w-lg p-24 flex flex-col justify-center items-center gap-24">
	<h2 class="h2">Or</h2>

	<div class="w-full">
		<button class="button outline w-full justify-center items-center">Sign In as Guest</button>
	</div>
</div>
