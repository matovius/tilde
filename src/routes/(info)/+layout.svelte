<script lang="ts">
	import TildeLogo from '$lib/components/TildeLogo.svelte';
	import { ArrowLeft } from 'lucide-svelte';

	function goToPreviousPage(): void {
		window.history.back();
	}
</script>

<header class="w-full flex justify-center items-center">
	<div class="w-full max-w-[52.5rem] p-24 flex justify-center items-center">
		<div class="w-60 h-60 aspect-square">
			<TildeLogo />
		</div>
	</div>
</header>

<main class="w-full flex justify-center items-center">
	<div class="w-full max-w-[52.5rem] p-24 flex justify-center items-center">
		<div
			class="max-w-none wysiwyg dark:wysiwyg-invert wysiwyg-sm tablet:wysiwyg tablet:dark:wysiwyg-invert selection:bg-chrysler/20 dark:selection:bg-chrysler"
		>
			<slot />
		</div>
	</div>
</main>

<footer class="w-full flex justify-center items-center">
	<div class="w-full max-w-[52.5rem] p-24">
		<button class="button" on:click={goToPreviousPage}>
			<ArrowLeft />
			<span>Go Back</span>
		</button>
	</div>
</footer>
