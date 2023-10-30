<script lang="ts">
	import TildeLogo from '$lib/components/TildeLogo.svelte';
</script>

<header class="w-full flex justify-center items-center">
	<div class="w-full max-w-[52.5rem] p-24 flex justify-center items-center">
		<div class="w-48 h-48 aspect-square">
			<TildeLogo />
		</div>
	</div>
</header>

<main class="w-full flex justify-center items-center">
	<div class="w-full max-w-[52.5rem] p-24 flex flex-col justify-center items-center gap-48">
		<slot />
	</div>
</main>

<footer class="w-full flex justify-center items-center">
	<div class="w-full max-w-[52.5rem] p-24 text-center">
		<small class="">
			This instance of Tilde only works for one account set up by
			<a
				href="https://github.com/matovius"
				target="_blank"
				rel="noopener noreferrer"
				class="link text-chrysler">@matovius</a
			>. If you need to use the app, you can log in as a guest account or set up your own instance.
			<a href="/availability" class="link text-chrysler">Read more</a>.
		</small>
	</div>
</footer>
