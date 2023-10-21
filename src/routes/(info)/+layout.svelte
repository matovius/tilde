<script lang="ts">
	import TildeLogo from '$lib/components/TildeLogo.svelte';
</script>

<div class="w-full h-full overflow-y-auto flex justify-center items-start">
	<div class="w-full max-w-[640px] h-full p-6 flex flex-col">
		<header class="w-full flex justify-center items-center not-wysiwyg py-6 laptop:py-12">
			<div class="w-24 laptop:w-24 h-12 laptop:h-24 aspect-square">
				<TildeLogo />
			</div>
		</header>

		<main
			class="w-full max-w-none h-full overflow-y-auto wysiwyg dark:wysiwyg-invert wysiwyg-sm tablet:wysiwyg tablet:dark:wysiwyg-invert selection:bg-chrysler-500/20 dark:selection:bg-chrysler-500"
		>
			<slot />
		</main>

		<footer class="w-full flex justify-start items-start py-2">
			<a href="/" class="not-wysiwyg link text-chrysler-500 dark:text-chrysler-200">Go Back</a>
		</footer>
	</div>
</div>
