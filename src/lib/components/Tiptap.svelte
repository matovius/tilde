<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { Editor } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';
	import { createSelect } from '@melt-ui/svelte';
	import { Check, ChevronsUpDown } from 'lucide-svelte';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let element: HTMLElement;
	let editor: Editor;

	interface BlockOption {
		name: string;
		description: string;
	}

	const BlockOptions: BlockOption[] = [
		{
			name: 'Paragraph',
			description: 'Make text block'
		},
		{
			name: 'Heading 1',
			description: 'Make top-level heading'
		},
		{
			name: 'Heading 2',
			description: 'Make sub-heading'
		},
		{
			name: 'Heading 3',
			description: 'Make section heading'
		},
		{
			name: 'Ordered List',
			description: 'Make numbered list'
		},
		{
			name: 'Unordered List',
			description: 'Make bullet list'
		},
		{
			name: 'Code',
			description: 'Make block of code'
		},
		{
			name: 'Link',
			description: 'Create link'
		},
		{
			name: 'Image',
			description: 'Upload an image'
		}
	];

	const {
		elements: { trigger, menu, option, group, groupLabel, label },
		states: { selectedLabel, open },
		helpers: { isSelected }
	} = createSelect({
		defaultSelected: 0,
		forceVisible: true,
		positioning: {
			placement: 'bottom-start',
			fitViewport: true,
			sameWidth: true
		},
		multiple: false
	});

	onMount(() => {
		editor = new Editor({
			element: element,
			extensions: [StarterKit],
			content: '<p>Hello World! 🌍️</p>',
			editable: true,
			injectCSS: false,
			onTransaction: () => {
				// force re-render so `editor.isActive` works as expected
				editor = editor;
			}
		});
	});

	onDestroy(() => {
		if (editor) {
			editor.destroy();
		}
	});
</script>

<!--
<header class="header" style="display: none;">
	<div class="header-content">
		<div class="app-icon" />
		<div class="editor-controls">
			<nav class="controls-nav">
				<ul class="controls-list">
					{#if editor}
						<li>
							<button
								class="button"
								on:click={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
								class:active={editor.isActive('heading', { level: 1 })}
							>
								<span>Heading 1</span>
							</button>
						</li>
						<li>
							<button
								class="button"
								on:click={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
								class:active={editor.isActive('heading', { level: 2 })}
							>
								<span>Heading 2</span>
							</button>
						</li>
						<li>
							<button
								class="button"
								on:click={() => editor.chain().focus().setParagraph().run()}
								class:active={editor.isActive('paragraph')}
							>
								<span>Paragraph</span>
							</button>
						</li>
						<li>
							<button class="button" on:click={() => editor.chain().focus().setBold().run()}>
								<span>Bold</span>
							</button>
						</li>
						<li>
							<button class="button" on:click={() => editor.chain().focus().setItalic().run()}>
								<span>Italics</span>
							</button>
						</li>
						<li>
							<button class="button">
								<span>Underline</span>
							</button>
						</li>
						<li>
							<button class="button">
								<span>Strikethrough</span>
							</button>
						</li>
						<li>
							<button class="button">
								<span>Link</span>
							</button>
						</li>
						<li>
							<button class="button">
								<span>Quote</span>
							</button>
						</li>
						<li>
							<button class="button">
								<span>Ordered List</span>
							</button>
						</li>
						<li>
							<button class="button">
								<span>Unordered List</span>
							</button>
						</li>
					{/if}
				</ul>
			</nav>
		</div>
		<div class="more-options" />
	</div>
</header>
-->
<div
	id="editor-wrapper"
	class="w-full max-w-[52.5rem] h-full overflow-hidden bg-white/10 rounded-3xl"
>
	<div id="editor-controls" class="w-full bg-black/90 p-6 rounded">
		<div class="flex flex-col gap-2">
			<button
				class="button min-w-[220px] flex flex-row justify-between bg-white/10 transition-opacity"
				use:melt={$trigger}
				aria-label="Blocks"
			>
				{$selectedLabel || 'Paragraph'}
				<ChevronsUpDown />
			</button>
			{#if $open}
				<div
					class="z-10 max-h-60 flex flex-col gap-1 p-1 rounded-xl border border-white/10 bg-black/90 backdrop-blur overflow-y-auto shadow focus:!ring-0"
					use:melt={$menu}
					transition:fly={{
						duration: 200,
						y: '-5%'
					}}
				>
					{#each BlockOptions as item}
						<div
							class="relative cursor-pointer flex justify-start items-center rounded-lg py-2 pr-2 pl-10 text-white focus:z-10 data-[highlighted]:bg-white/5 data-[selected]:bg-white/10 data-[selected]:text-chrysler-200"
							use:melt={$option({ value: item.name, label: item.name })}
						>
							{#if $isSelected(item.name)}
								<Check class="absolute left-2 w-4 h-4" />
							{/if}
							<span>{item.name}</span>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</div>
	<div id="editor" class="w-full h-full p-6 overflow-y-auto" bind:this={element} />
</div>

<style>
	/*
	.header {
		width: 100%;
		height: calc(var(--base-size) * 8.2);
		display: flex;
		justify-content: center;
		align-items: center;
		padding: calc(var(--base-size) * 1.2);

		& > .header-content {
			width: 100%;
			max-width: 52.5rem /* 840px ;
			height: 100%;
			display: flex;
			flex-direction: row;
			justify-content: start;
			align-items: center;
			background: hsl(0, 0%, 0%, 0.05);
			border-radius: calc(var(--base-size) * 2);

			& > hr {
				width: 1px;
				height: calc(100% - 16px);
				color: hsl(0, 0%, 0%, 0.2);
			}
		}
	}

	.app-icon {
		width: 48px;
		height: 48px;
		aspect-ratio: 1;
		border-radius: calc(var(--base-size) * 0.8);
		background: hsl(0, 0%, 0%, 0.1);
		margin-left: calc(var(--base-size) * 0.8);
		margin-right: calc(var(--base-size) * 0.8);
	}

	.button {
		& > span {
			width: max-content;
		}
	}

	.editor-controls {
		width: 100%;
		mask: linear-gradient(90deg, transparent, hsl(0, 0%, 100%) 16px);
		overflow: hidden;

		& > .controls-nav {
			width: 100%;
			max-width: 100%;
			padding: calc(var(--base-size) * 0.8);
			margin-right: calc(var(--base-size) * 0.8);
			overflow-x: auto;

			& > .controls-list {
				list-style-type: none;
				display: flex;
				flex-direction: row;
				justify-content: start;
				align-items: center;
				gap: calc(var(--base-size) * 0.4);
			}
		}
	}

	.more-options {
		height: 100%;
		aspect-ratio: 1;
		margin-left: calc(var(--base-size) * 0.8);
		margin-right: calc(var(--base-size) * 0.8);
		background: hsl(0, 0%, 0%, 0.1);
	}*/
</style>
