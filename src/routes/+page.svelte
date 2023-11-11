<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import TildeLogo from '$lib/components/TildeLogo.svelte';
	import { ArrowRight } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Tilde: Your favorite online text editor</title>
</svelte:head>

<div class="w-full h-full flex flex-col justify-start items-center">
	<header class="w-full flex flex-row justify-end items-center">
		<nav class="w-fit p-24">
			<ul class="flex flex-row justify-center items-center gap-24">
				<li class="link">
					<Button as="link" url="/availability">
						<span>Availability</span>
					</Button>
				</li>
			</ul>
		</nav>
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
			<Button as="link" url="/app" variant="btn-primary" style="btn-solid">
				<span>Get Started</span>
				<ArrowRight />
			</Button>
		</div>
	</main>
	<footer class="w-full flex justify-center items-center">
		<div class="text-center w-full max-w-[52.5rem] p-24 flex justify-center items-center">
			<small class="">&copy; The WebWare Workshop &centerdot; 2023 - Present</small>
		</div>
	</footer>
</div>
