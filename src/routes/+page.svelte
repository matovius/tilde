<script lang="ts">
	import TildeLogo from '$lib/components/TildeLogo.svelte';
	import { ArrowRight } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Tilde: Your favorite online text editor</title>
</svelte:head>

<div class="w-full h-full flex flex-col justify-start items-center">
	<header class="w-full flex justify-center items-center">
		<div class="w-full max-w-[52.5rem] p-24 flex justify-center items-center">
			<nav class="w-fit mx-auto">
				<ul class="flex flex-row justify-center items-center gap-24">
					<li class="link">
						<a href="/why-tilde" class="link hover:text-white"> Why Tilde? </a>
					</li>
					<li class="link">
						<a href="/availability" class="link hover:text-white"> Availability </a>
					</li>
				</ul>
			</nav>
		</div>
	</header>
	<main class="w-full h-full flex flex-col justify-start items-center">
		<div
			class="w-full max-w-[52.5rem] py-24 tablet:py-48 px-24 flex flex-col justify-start items-center gap-24 tablet:gap-48"
		>
			<div class="w-96 h-96 aspect-square">
				<TildeLogo />
			</div>
			<h1 class="text-center text-6xl font-bold">Welcome to Tilde</h1>
			<h2 class="text-center text-4xl font-medium text-black/60 dark:text-white/60">
				The minimal web-based text editor
			</h2>
			<a
				href="/login"
				class="button text-white bg-chrysler hover:bg-chrysler/80 focus:bg-chrysler/80"
			>
				<span>Get Started</span>
				<ArrowRight />
			</a>
		</div>
	</main>
	<footer class="w-full flex justify-center items-center">
		<div class="text-center w-full max-w-[52.5rem] p-24 flex justify-center items-center">
			<small class="">&copy; The WebWare Workshop &centerdot; 2023 - Present</small>
		</div>
	</footer>
</div>
