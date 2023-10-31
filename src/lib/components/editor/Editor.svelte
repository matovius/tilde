<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { Editor, type JSONContent } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';

	import {
		Bold,
		Code,
		Download,
		Heading1,
		Heading2,
		Heading3,
		Italic,
		List,
		ListOrdered,
		Pilcrow,
		Quote,
		Strikethrough,
		Trash,
		Trash2,
		X
	} from 'lucide-svelte';

	import TildeLogo from '../TildeLogo.svelte';

	let editorInterface: HTMLElement;
	let editor: Editor;
	let EditorContentHTML: string;
	let EditorContentJSON: JSONContent;

	let discardDialog: HTMLDialogElement;
	let discardDialogOpen: boolean = false;

	function toggleDiscardDialog() {
		if (!discardDialogOpen) {
			discardDialogOpen = true;
			discardDialog.showModal();
		} else {
			discardDialog.close();
			discardDialogOpen = false;
		}
	}

	let exportDialog: HTMLDialogElement;
	let exportDialogOpen: boolean = false;

	function toggleExportDialog() {
		if (!exportDialogOpen) {
			exportDialogOpen = true;
			exportDialog.showModal();
		} else {
			exportDialog.close();
			exportDialogOpen = false;
		}
	}

	function getEditorContent() {
		EditorContentHTML = editor.getHTML();
		EditorContentJSON = editor.getJSON();
		console.log('HTML: ', EditorContentHTML);
		console.log('JSON: ', EditorContentJSON);
	}

	function discardEditorContent() {
		editor.commands.clearContent();
		toggleDiscardDialog();
	}

	onMount(() => {
		editor = new Editor({
			editorProps: {
				attributes: {
					class:
						'wysiwyg dark:wysiwyg-invert wysiwyg-sm tablet:wysiwyg tablet:dark:wysiwyg-invert w-full max-w-none h-full m-0 outline-none selection:bg-chrysler/40 dark:selection:bg-chrysler'
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
				<h1>Welcome</h1>
				<p>You can type anything you want here...</p>
			`,
			editable: true,
			injectCSS: false,
			onTransaction: () => {
				// force re-render so `editor.isActive` works as expected
				editor = editor;
			},
			onUpdate: ({ editor }) => {
				EditorContentHTML = editor.getHTML();
				EditorContentJSON = editor.getJSON();
			}
		});
	});

	onDestroy(() => {
		if (editor) {
			editor.destroy();
		}
	});
</script>

<div class="w-full max-w-5xl h-full">
	<div
		class="w-full h-full flex flex-col tablet:flex-row tablet:justify-center tablet:items-center overflow-hidden"
	>
		<header
			class="w-full h-fit tablet:w-fit tablet:h-full flex flex-row tablet:flex-col justify-start items-center"
		>
			<div class="w-fit flex flex-row justify-center items-center gap-24 p-12">
				<div class="w-36 h-36" aria-label="Tilde logo">
					<TildeLogo />
				</div>
				<span class="sr-only laptop:not-sr-only text-xl font-bold">Tilde</span>
			</div>

			{#if editor}
				<div
					id="editor-controls"
					class="w-full h-full p-12 flex flex-row tablet:flex-col justify-start items-center laptop:items-start gap-8 overflow-y-hidden tablet:overflow-y-auto overflow-x-auto tablet:overflow-x-hidden"
				>
					<button
						class="button laptop:w-full"
						on:click={() => editor.chain().focus().setParagraph().run()}
						class:active={editor.isActive('paragraph')}
					>
						<Pilcrow />
						<span class="sr-only laptop:not-sr-only">Paragraph</span>
					</button>
					<button
						class="button laptop:w-full"
						on:click={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
						class:active={editor.isActive('heading', { level: 1 })}
					>
						<Heading1 />
						<span class="sr-only laptop:not-sr-only">Heading 1</span>
					</button>
					<button
						class="button laptop:w-full"
						on:click={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
						class:active={editor.isActive('heading', { level: 2 })}
					>
						<Heading2 />
						<span class="sr-only laptop:not-sr-only">Heading 2</span>
					</button>
					<button
						class="button laptop:w-full"
						on:click={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
						class:active={editor.isActive('heading', { level: 3 })}
					>
						<Heading3 />
						<span class="sr-only laptop:not-sr-only">Heading 3</span>
					</button>

					<button
						class="button laptop:w-full"
						on:click={() => editor.chain().focus().toggleBold().run()}
						class:active={editor.isActive('bold')}
					>
						<Bold />
						<span class="sr-only laptop:not-sr-only">Bold</span>
					</button>
					<button
						class="button w-full"
						on:click={() => editor.chain().focus().toggleItalic().run()}
						class:active={editor.isActive('italic')}
					>
						<Italic />
						<span class="sr-only laptop:not-sr-only">Italic</span>
					</button>
					<button
						class="button w-full"
						on:click={() => editor.chain().focus().toggleStrike().run()}
						class:active={editor.isActive('strike')}
					>
						<Strikethrough />
						<span class="sr-only laptop:not-sr-only">Strikethrough</span>
					</button>
					<button
						class="button w-full"
						on:click={() => editor.chain().focus().toggleBlockquote().run()}
						class:active={editor.isActive('blockquote')}
					>
						<Quote />
						<span class="sr-only laptop:not-sr-only">Blockquote</span>
					</button>
					<button
						class="button w-full"
						on:click={() => editor.chain().focus().toggleCodeBlock().run()}
						class:active={editor.isActive('codeBlock')}
					>
						<Code />
						<span class="sr-only laptop:not-sr-only">Codeblock</span>
					</button>
					<button
						class="button w-full"
						on:click={() => editor.chain().focus().toggleBulletList().run()}
						class:active={editor.isActive('bulletList')}
					>
						<List />
						<span class="sr-only laptop:not-sr-only">Bullet List</span>
					</button>
					<button
						class="button w-full"
						on:click={() => editor.chain().focus().toggleOrderedList().run()}
						class:active={editor.isActive('orderedList')}
					>
						<ListOrdered />
						<span class="sr-only laptop:not-sr-only">Numbered List</span>
					</button>
				</div>
			{/if}
		</header>

		<main class="w-full h-full flex flex-col justify-center items-start overflow-hidden">
			<div
				id="editor-interface"
				class="w-full h-full p-12 flex justify-center items-center overflow-y-auto border-y tablet:border-y-0 tablet:border-x border-black/10 dark:border-white/10"
				bind:this={editorInterface}
			/>
		</main>

		<footer
			class="w-full h-fit tablet:w-fit tablet:h-full p-12 flex flex-row tablet:flex-col justify-start items-center gap-12"
		>
			{#if editor}
				<div
					id="more-options"
					class="w-full tablet:h-full flex flex-row tablet:flex-col justify-between items-center laptop:items-start gap-8"
				>
					<div>
						<button class="button" on:click={toggleExportDialog}>
							<Download />
							<span class="sr-only laptop:not-sr-only">Export</span>
						</button>
						<dialog
							bind:this={exportDialog}
							class="w-full max-w-lg p-12 bg-transparent backdrop:bg-black/50 backdrop:backdrop-blur"
						>
							<div
								class="w-full p-12 rounded-3xl text-black/80 dark:text-white/80 bg-white dark:bg-black relative"
							>
								<div class="pt-12 pr-12 absolute top-0 right-0">
									<button class="button" on:click={toggleExportDialog}>
										<X />
										<span class="sr-only">Close</span>
									</button>
								</div>
								<header class="w-full p-24">
									<h2 class="text-xl">Export</h2>
								</header>
								<main class="w-full p-12 flex flex-col gap-12">
									<p>You can currently get your content as either JSON or HTML.</p>
									<p>
										There will eventually be support for Markdown, so be on the look-out for that.
									</p>
								</main>
								<footer class="w-full p-12 flex flex-col tablet:flex-row tablet:justify-end gap-8">
									<button class="button primary">
										<span>Download JSON</span>
									</button>
									<button class="button primary">
										<span>Download HTML</span>
									</button>
								</footer>
							</div>
						</dialog>
					</div>

					<div>
						<button class="button danger" on:click={toggleDiscardDialog}>
							<Trash2 />
							<span class="sr-only laptop:not-sr-only">Discard</span>
						</button>
						<dialog
							bind:this={discardDialog}
							class="w-full max-w-lg p-24 bg-transparent backdrop:bg-black/50 backdrop:backdrop-blur"
						>
							<div
								id="dialog-card"
								class="w-full p-12 rounded-3xl text-black/80 dark:text-white/80 bg-white dark:bg-black relative"
							>
								<div class="pt-12 pr-12 absolute top-0 right-0">
									<button class="button" on:click={toggleDiscardDialog}>
										<X />
										<span class="sr-only">Close</span>
									</button>
								</div>
								<header class="w-full p-12">
									<h2 class="text-xl">Discard</h2>
								</header>
								<main class="w-full p-12">
									<p>Are you sure you want to discard this note?</p>
								</main>
								<footer class="w-full p-24 flex flex-col tablet:flex-row tablet:justify-end gap-8">
									<button class="button" on:click={toggleDiscardDialog}>No, it's okay</button>
									<button class="button primary" on:click={discardEditorContent}
										>Yes, discard</button
									>
								</footer>
							</div>
						</dialog>
					</div>
				</div>
			{/if}
		</footer>
	</div>
</div>
