<script lang="ts">
	import { onMount, onDestroy, createEventDispatcher } from 'svelte';
	import { Editor, type JSONContent } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';
	import {
		Bold,
		Code,
		Heading1,
		Heading2,
		Heading3,
		Italic,
		List,
		MoreHorizontal,
		Pilcrow,
		Quote,
		Strikethrough,
		Underline
	} from 'lucide-svelte';
	import TildeLogo from '../TildeLogo.svelte';

	let editorInterface: HTMLElement;
	let editor: Editor;
	let EditorContent: JSONContent;

	onMount(() => {
		editor = new Editor({
			editorProps: {
				attributes: {
					class: 'h-full w-full m-0 outline-none selection:bg-chrysler-500/20'
				}
			},
			element: editorInterface,
			extensions: [
				StarterKit.configure({
					heading: {
						levels: [1, 2, 3]
					}
				})
			],
			content: '',
			editable: true,
			injectCSS: true,
			onTransaction: () => {
				// force re-render so `editor.isActive` works as expected
				editor = editor;
			},
			onUpdate: ({ editor }) => {
				setTimeout(() => {
					EditorContent = editor.getJSON();
				}, 5000);
			}
		});
	});

	onDestroy(() => {
		if (editor) {
			editor.destroy();
		}
	});
</script>

<div class="z-50 w-full max-w-2xl h-full border-x-2 border-black/10 dark:border-white/10">
	<div class="w-full h-full flex flex-col overflow-hidden">
		<header class="w-full p-6 flex flex-row justify-between items-center sticky top-0">
			<div class="w-full px-3 py-6 flex justify-start items-center gap-4" aria-label="Tilde logo">
				<div class="w-9 h-9" aria-hidden="true">
					<TildeLogo />
				</div>
				<span class="font-bold text-xl text-start">Tilde</span>
			</div>
			<button class="button">
				<MoreHorizontal />
			</button>
		</header>
		<main class="w-full h-full flex flex-col overflow-hidden">
			{#if editor}
				<div
					id="editor-controls"
					class="px-6 py-3 flex flex-row justify-start items-center gap-2 border-b-2 border-black/10 dark:border-white/10 overflow-y-hidden overflow-x-auto sticky top-0"
				>
					<button
						class="button"
						on:click={() => editor.chain().focus().setParagraph().run()}
						class:active={editor.isActive('paragraph')}
					>
						<Pilcrow />
					</button>
					<button
						class="button"
						on:click={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
						class:active={editor.isActive('heading', { level: 1 })}
					>
						<Heading1 />
					</button>
					<button
						class="button"
						on:click={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
						class:active={editor.isActive('heading', { level: 2 })}
					>
						<Heading2 />
					</button>
					<button
						class="button"
						on:click={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
						class:active={editor.isActive('heading', { level: 3 })}
					>
						<Heading3 />
					</button>
					<button
						class="button"
						on:click={() => editor.chain().focus().toggleBold().run()}
						class:active={editor.isActive('bold')}
					>
						<Bold />
					</button>
					<button
						class="button"
						on:click={() => editor.chain().focus().toggleItalic().run()}
						class:active={editor.isActive('italic')}
					>
						<Italic />
					</button>
					<button class="button">
						<Underline />
					</button>
					<button
						class="button"
						on:click={() => editor.chain().focus().toggleStrike().run()}
						class:active={editor.isActive('strike')}
					>
						<Strikethrough />
					</button>
					<button class="button">
						<Quote />
					</button>
					<button
						class="button"
						on:click={() => editor.chain().focus().toggleCode().run()}
						class:active={editor.isActive('code')}
					>
						<Code />
					</button>
					<button class="button">
						<List />
					</button>
				</div>
			{/if}

			<div
				id="editor-interface"
				class="w-full h-full p-6 overflow-y-auto"
				bind:this={editorInterface}
			/>
		</main>
	</div>
</div>
