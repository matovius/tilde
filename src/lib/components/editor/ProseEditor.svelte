<script lang="ts">
	import { EditorView } from 'codemirror';
	import { markdown } from '@codemirror/lang-markdown';
	import { syntaxHighlighting } from '@codemirror/language';
	import { onMount } from 'svelte';

	let editorParent: HTMLElement;

	let theme = EditorView.baseTheme({});

	onMount(() => {
		let editor = new EditorView({
			extensions: [markdown()],
			parent: editorParent
		});
	});
</script>

<main class="w-full h-full flex flex-col justify-center items-start overflow-hidden">
	<div
		id="editor-interface"
		class="w-full h-full p-6 flex justify-start items-start overflow-y-auto bg-black/5 dark:bg-white/5"
		bind:this={editorParent}
	/>
</main>
