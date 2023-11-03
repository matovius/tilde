<script lang="ts">
	export let as: 'button' | 'link';
	export let style: 'btn-solid' | 'btn-outline' | 'btn-ghost' = 'btn-ghost';
	export let variant: 'btn-primary' | 'btn-neutral' | 'btn-danger' = 'btn-neutral';
	export let padX: 'x-4' | 'x-8' | 'x-12' | 'x-24' | 'x-36' = 'x-12';
	export let padY: 'y-4' | 'y-8' | 'y-12' | 'y-24' | 'y-36' = 'y-8';
	export let width: 'fit' | 'full' = 'fit';
	export let spacing: string = 'gap-12';
	export let url: string = '/';
</script>

{#if as === 'button'}
	<button class={`btn ${style} ${variant} ${padX} ${padY} ${width} ${spacing}`} on:click>
		<slot />
	</button>
{:else if as === 'link'}
	<a href={url} class={`btn ${style} ${variant} ${padX} ${padY} ${width} ${spacing}`} on:click>
		<slot />
	</a>
{/if}
