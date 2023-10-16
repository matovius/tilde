<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		setTimeout(() => {
			goto('/app/edit');
		}, 1000);
	});
</script>

<svelte:head>
	<title>Tilde</title>
</svelte:head>

<div />
