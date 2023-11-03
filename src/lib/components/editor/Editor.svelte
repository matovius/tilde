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
	import Button from '../Button.svelte';

	let editorInterface: HTMLElement;
	let editor: Editor;
	let EditorContentHTML: string;
	let EditorContentJSON: JSONContent;

	let htmlFile: Blob;
	let jsonFile: Blob;

	let htmlDownloadButton: HTMLAnchorElement;
	let jsonDownloadButton: HTMLAnchorElement;

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
		//console.log('HTML: ', EditorContentHTML);
		//console.log('JSON: ', EditorContentJSON);

		jsonFile = new Blob([JSON.stringify(EditorContentJSON)], { type: 'application/json' });

		htmlFile = new Blob([EditorContentHTML], { type: 'text/html' });

		let jsonFileURL = URL.createObjectURL(jsonFile);
		let htmlFilURL = URL.createObjectURL(htmlFile);

		htmlDownloadButton.setAttribute('href', htmlFilURL);
		htmlDownloadButton.setAttribute('download', 'tilde-data.html');
		jsonDownloadButton.setAttribute('href', jsonFileURL);
		jsonDownloadButton.setAttribute('download', 'tilde-data.json');

		toggleExportDialog();
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

		jsonFile = new Blob([JSON.stringify(EditorContentJSON)], { type: 'application/json' });

		htmlFile = new Blob([EditorContentHTML], { type: 'text/html' });
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
						class="btn btn-ghost btn-neutral x-8 y-8 fit gap-12"
						on:click={() => editor.chain().focus().setParagraph().run()}
						class:btn-primary={editor.isActive('paragraph')}
					>
						<Pilcrow />
						<span class="sr-only laptop:not-sr-only">Paragraph</span>
					</button>

					<button
						class="btn btn-ghost btn-neutral x-8 y-8 fit gap-12"
						on:click={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
						class:btn-primary={editor.isActive('heading', { level: 1 })}
					>
						<Heading1 />
						<span class="sr-only laptop:not-sr-only">Heading 1</span>
					</button>

					<button
						class="btn btn-ghost btn-neutral x-8 y-8 fit gap-12"
						on:click={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
						class:btn-primary={editor.isActive('heading', { level: 2 })}
					>
						<Heading2 />
						<span class="sr-only laptop:not-sr-only">Heading 2</span>
					</button>
					<button
						class="btn btn-ghost btn-neutral x-8 y-8 fit gap-12"
						on:click={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
						class:btn-primary={editor.isActive('heading', { level: 3 })}
					>
						<Heading3 />
						<span class="sr-only laptop:not-sr-only">Heading 3</span>
					</button>

					<button
						class="btn btn-ghost btn-neutral x-8 y-8 fit gap-12"
						on:click={() => editor.chain().focus().toggleBold().run()}
						class:btn-primary={editor.isActive('bold')}
					>
						<Bold />
						<span class="sr-only laptop:not-sr-only">Bold</span>
					</button>
					<button
						class="btn btn-ghost btn-neutral x-8 y-8 fit gap-12"
						on:click={() => editor.chain().focus().toggleItalic().run()}
						class:btn-primary={editor.isActive('italic')}
					>
						<Italic />
						<span class="sr-only laptop:not-sr-only">Italic</span>
					</button>
					<button
						class="btn btn-ghost btn-neutral x-8 y-8 fit gap-12"
						on:click={() => editor.chain().focus().toggleStrike().run()}
						class:btn-primary={editor.isActive('strike')}
					>
						<Strikethrough />
						<span class="sr-only laptop:not-sr-only">Strikethrough</span>
					</button>
					<button
						class="btn btn-ghost btn-neutral x-8 y-8 fit gap-12"
						on:click={() => editor.chain().focus().toggleBlockquote().run()}
						class:btn-primary={editor.isActive('blockquote')}
					>
						<Quote />
						<span class="sr-only laptop:not-sr-only">Blockquote</span>
					</button>
					<button
						class="btn btn-ghost btn-neutral x-8 y-8 fit gap-12"
						on:click={() => editor.chain().focus().toggleCodeBlock().run()}
						class:btn-primary={editor.isActive('codeBlock')}
					>
						<Code />
						<span class="sr-only laptop:not-sr-only">Codeblock</span>
					</button>
					<button
						class="btn btn-ghost btn-neutral x-8 y-8 fit gap-12"
						on:click={() => editor.chain().focus().toggleBulletList().run()}
						class:btn-primary={editor.isActive('bulletList')}
					>
						<List />
						<span class="sr-only laptop:not-sr-only">Bullet List</span>
					</button>
					<button
						class="btn btn-ghost btn-neutral x-8 y-8 fit gap-12"
						on:click={() => editor.chain().focus().toggleOrderedList().run()}
						class:btn-primary={editor.isActive('orderedList')}
					>
						<ListOrdered />
						<span class="sr-only laptop:not-sr-only">Numbered List</span>
					</button>
				</div>
			{/if}
		</header>

		<main
			class="w-full max-w-[40rem] h-full flex flex-col justify-center items-start overflow-hidden"
		>
			<div
				id="editor-interface"
				class="w-full h-full p-24 flex justify-center items-center overflow-y-auto border-y tablet:border-y-0 tablet:border-x border-black/10 dark:border-white/10"
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
						<Button as="button" padX="x-8" on:click={getEditorContent}>
							<Download />
							<span class="sr-only laptop:not-sr-only">Export</span>
						</Button>
						<dialog
							bind:this={exportDialog}
							class="w-full max-w-lg p-24 bg-transparent backdrop:bg-black/50 backdrop:backdrop-blur"
						>
							<div
								class="w-full rounded-3xl text-black/80 dark:text-white/80 bg-white dark:bg-black relative"
							>
								<header class="w-full p-12 pl-24 flex flex-row justify-between items-center gap-24">
									<h2 class="text-xl">Export</h2>
									<Button as="button" padX="x-8" on:click={toggleExportDialog}>
										<X />
										<span class="sr-only">Close</span>
									</Button>
								</header>
								<main class="w-full p-24 flex flex-col gap-12">
									<p>You can currently get your content as either JSON or HTML.</p>
									<p>
										There will eventually be support for Markdown, so be on the look-out for that.
									</p>
								</main>
								<footer
									class="w-full p-12 flex flex-col tablet:flex-row justify-center items-center gap-8"
								>
									<a
										href="/"
										class="btn btn-ghost btn-neutral full x-12 y-8"
										bind:this={jsonDownloadButton}
									>
										<span>Download JSON</span>
									</a>
									<a
										href="/"
										class="btn btn-solid btn-neutral full x-12 y-8"
										bind:this={htmlDownloadButton}
									>
										<span>Download HTML</span>
									</a>
								</footer>
							</div>
						</dialog>
					</div>

					<div>
						<Button as="button" variant="btn-danger" padX="x-8" on:click={toggleDiscardDialog}>
							<Trash2 />
							<span class="sr-only laptop:not-sr-only">Discard</span>
						</Button>
						<dialog
							bind:this={discardDialog}
							class="w-full max-w-lg p-24 bg-transparent backdrop:bg-black/50 backdrop:backdrop-blur"
						>
							<div
								id="dialog-card"
								class="w-full rounded-3xl text-black/80 dark:text-white/80 bg-white dark:bg-black relative"
							>
								<header class="w-full p-12 pl-24 flex flex-row justify-between items-center gap-24">
									<h2 class="text-xl">Discard</h2>
									<Button as="button" padX="x-8" on:click={toggleDiscardDialog}>
										<X />
										<span class="sr-only">Close</span>
									</Button>
								</header>
								<main class="w-full p-24">
									<p>Are you sure you want to discard this note?</p>
								</main>
								<footer
									class="w-full p-12 flex flex-col tablet:flex-row justify-center items-center gap-8"
								>
									<Button as="button" width="full" on:click={toggleDiscardDialog}>
										<span>No, it's okay</span>
									</Button>
									<Button
										as="button"
										style="btn-solid"
										variant="btn-danger"
										width="full"
										on:click={discardEditorContent}
									>
										<span>Yes, discard</span>
									</Button>
								</footer>
							</div>
						</dialog>
					</div>
				</div>
			{/if}
		</footer>
	</div>
</div>
