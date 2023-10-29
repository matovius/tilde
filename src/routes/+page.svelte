<script lang="ts">
	import TildeLogo from '$lib/components/TildeLogo.svelte';
	import { ArrowRight } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Tilde: Your favorite online text editor</title>
</svelte:head>

<div class="w-full h-full overflow-y-auto flex flex-col justify-start items-center">
	<header class="w-full max-w-[52.5rem] p-24">
		<nav class="w-full">
			<ul class="w-full flex flex-row justify-center items-center gap-24">
				<li class="link">
					<a href="/why-tilde" class="link hover:text-white"> Why Tilde? </a>
				</li>
				<li class="link">
					<a href="/availability" class="link hover:text-white"> Availability </a>
				</li>
			</ul>
		</nav>
	</header>
	<main
		class="w-full max-w-[52.5rem] h-full flex flex-col justify-start items-center gap-24 tablet:gap-48 py-24 tablet:py-48 px-24"
	>
		<div class="w-96 h-96 aspect-square">
			<TildeLogo />
		</div>
		<h1 class="text-center text-6xl font-bold">Welcome to Tilde</h1>
		<h2 class="text-center text-4xl font-medium text-black/60 dark:text-white/60">
			The minimal web-based text editor
		</h2>
		<a
			href="/dashboard"
			class="button text-white bg-chrysler hover:bg-chrysler/80 focus:bg-chrysler/80"
		>
			<span>Get Started</span>
			<ArrowRight />
		</a>
	</main>
	<footer class="w-full max-w-[52.5rem] p-24 flex justify-center items-center">
		<span class="text-center text-xs font-medium">
			Tilde is currently only available as a demo. Read more about what this means
			<a href="/availability" class="link text-chrysler">here</a>.
		</span>
	</footer>
</div>
