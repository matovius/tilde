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
		ListOrdered,
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
					class:
						'wysiwyg dark:wysiwyg-invert wysiwyg-sm tablet:wysiwyg tablet:dark:wysiwyg-invert w-full max-w-none h-full p-6 bg-black/5 dark:bg-white/5 m-0 outline-none selection:bg-chrysler-500/20 dark:selection:bg-chrysler-500'
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
			content: `
				<h1>Welcome to Tilde</h1>
				<p>You can type anything you want here...</p>
			`,
			editable: true,
			injectCSS: false,
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

<div class="z-50 w-full max-w-4xl h-full">
	<div
		class="w-full h-full flex flex-col tablet:flex-row tablet:justify-center tablet:items-center overflow-hidden"
	>
		<header
			class="w-full tablet:w-fit tablet:h-full p-3 flex flex-row tablet:flex-col justify-start items-center gap-3 sticky top-0"
		>
			<div class="w-fit flex flex-row justify-center items-center gap-3">
				<div class="w-9 h-9" aria-label="Tilde logo">
					<TildeLogo />
				</div>
				<span class="sr-only laptop:not-sr-only text-xl font-bold">Tilde</span>
			</div>

			{#if editor}
				<div
					id="editor-controls"
					class="w-full tablet:h-full p-2 flex flex-row tablet:flex-col justify-start items-center laptop:items-start gap-1 overflow-y-hidden tablet:overflow-y-auto overflow-x-auto tablet:overflow-x-hidden sticky top-0"
				>
					<button
						class="button"
						on:click={() => editor.chain().focus().setParagraph().run()}
						class:active={editor.isActive('paragraph')}
					>
						<Pilcrow />
						<span class="sr-only laptop:not-sr-only">Paragraph</span>
					</button>
					<button
						class="button"
						on:click={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
						class:active={editor.isActive('heading', { level: 1 })}
					>
						<Heading1 />
						<span class="sr-only laptop:not-sr-only">Heading 1</span>
					</button>
					<button
						class="button"
						on:click={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
						class:active={editor.isActive('heading', { level: 2 })}
					>
						<Heading2 />
						<span class="sr-only laptop:not-sr-only">Heading 2</span>
					</button>
					<button
						class="button"
						on:click={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
						class:active={editor.isActive('heading', { level: 3 })}
					>
						<Heading3 />
						<span class="sr-only laptop:not-sr-only">Heading 3</span>
					</button>
					<button
						class="button"
						on:click={() => editor.chain().focus().toggleBold().run()}
						class:active={editor.isActive('bold')}
					>
						<Bold />
						<span class="sr-only laptop:not-sr-only">Bold</span>
					</button>
					<button
						class="button"
						on:click={() => editor.chain().focus().toggleItalic().run()}
						class:active={editor.isActive('italic')}
					>
						<Italic />
						<span class="sr-only laptop:not-sr-only">Italic</span>
					</button>
					<button
						class="button"
						on:click={() => editor.chain().focus().toggleStrike().run()}
						class:active={editor.isActive('strike')}
					>
						<Strikethrough />
						<span class="sr-only laptop:not-sr-only">Strikethrough</span>
					</button>
					<button class="button">
						<Quote />
						<span class="sr-only laptop:not-sr-only">Quote</span>
					</button>
					<button
						class="button"
						on:click={() => editor.chain().focus().toggleCode().run()}
						class:active={editor.isActive('code')}
					>
						<Code />
						<span class="sr-only laptop:not-sr-only">Code</span>
					</button>
					<button
						class="button"
						on:click={() => editor.chain().focus().toggleBulletList().run()}
						class:active={editor.isActive('bulletList')}
					>
						<List />
						<span class="sr-only laptop:not-sr-only">Bullet List</span>
					</button>
					<button
						class="button"
						on:click={() => editor.chain().focus().toggleOrderedList().run()}
						class:active={editor.isActive('orderedList')}
					>
						<ListOrdered />
						<span class="sr-only laptop:not-sr-only">Numbered List</span>
					</button>
				</div>
			{/if}

			<button class="button">
				<MoreHorizontal />
				<span class="sr-only laptop:not-sr-only">More Options</span>
			</button>
		</header>
		<main class="w-full h-full flex flex-col justify-center items-start overflow-hidden">
			<div
				id="editor-interface"
				class="w-full h-full flex justify-center items-center overflow-y-auto"
				bind:this={editorInterface}
			/>
		</main>
	</div>
</div>
