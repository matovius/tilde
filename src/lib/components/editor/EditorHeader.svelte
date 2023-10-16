<script lang="ts">
	import { createPopover } from 'svelte-headlessui';

	const HeadingPopover = createPopover({});
</script>

<header class="header">
	<div class="header-content">
		<div class="app-icon" />
		<div class="editor-controls">
			<nav class="controls-nav">
				<ul class="controls-list">
					<li>
						<button class="button" use:HeadingPopover.button>
							<span>Headings</span>
						</button>
						<div
							class="overlay"
							use:HeadingPopover.panel
							on:click={HeadingPopover.close}
							role="button"
							tabindex="-1"
							on:keydown={() => {
								return;
							}}
							on:keyup={() => {
								return;
							}}
						>
							<div class="popover-wrapper">
								<button class="button">Heading 1</button>
								<button class="button">Heading 2</button>
								<button class="button">Heading 3</button>
							</div>
						</div>
					</li>
					<li>
						<button class="button">
							<span>Paragraph</span>
						</button>
					</li>
					<li>
						<button class="button">
							<span>Bold</span>
						</button>
					</li>
					<li>
						<button class="button">
							<span>Italic</span>
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
							<span>Lists</span>
						</button>
					</li>
				</ul>
			</nav>
		</div>
		<div class="more-options" />
	</div>
</header>
