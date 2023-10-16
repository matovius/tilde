<script lang="ts">
	import TildeLogo from '$lib/components/TildeLogo.svelte';
	import { ArrowRight } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Tilde</title>
</svelte:head>

<div class="w-full h-full overflow-y-auto px-9 flex flex-col justify-between items-center">
	<main
		class="w-full max-w-[720px] flex flex-col justify-start items-center gap-8 tablet:gap-16 pt-6 tablet:pt-[120px]"
	>
		<div class="w-24 h-24 aspect-square">
			<TildeLogo />
		</div>
		<h1 class="text-center text-6xl font-bold">Welcome to Tilde</h1>
		<h2 class="text-center text-4xl font-medium text-black/60 dark:text-white/60">
			Your favorite web-based scratchpad
		</h2>
		<a
			href="/app"
			class="button tablet:flex tablet:landscape:flex focus-visible:outline-black/50 dark:focus-visible:outline-white/50 focus:bg-chrysler-500 focus:text-white/80"
		>
			<span>Get Started</span>
			<ArrowRight />
		</a>
	</main>
	<footer class="w-full max-w-[720px] py-6 flex justify-center items-center">
		<span class="text-center text-xs font-medium">
			Tilde is currently only available as a demo. Read more about what this means
			<a href="#availability" class="link text-chrysler-500">here</a>.
		</span>
	</footer>
</div>
