<script lang="ts">
	import { page } from '$app/stores';
	import { Files, HelpCircle, Pencil, Plus, Settings, Star } from 'lucide-svelte';

	export let state: boolean;
</script>

<nav
	id="bottom-nav"
	class="w-full h-[88px] flex justify-between items-center px-3 py-6 border-t-2 border-black/10 absolute bottom-0 left-0 right-0 tablet:hidden {state
		? 'hidden'
		: 'block'}"
>
	<div id="floating-action-button" class="absolute bottom-full right-0 pb-6 pr-6">
		<button
			class="button p-4 bg-chrysler-500 hover:bg-chrysler-500/80 focus:bg-chrysler-500/80 text-white/80"
		>
			<Plus />
		</button>
	</div>
	<div>
		<a
			href="/demo/all"
			class="button"
			title="All Notes"
			aria-label="All Notes"
			data-current-page={$page.url.pathname.includes('/all') ? 'current-page' : null}
		>
			<Files aria-hidden="true" />
		</a>
	</div>
	<div>
		<a
			href="/demo/scratchpad"
			class="button"
			title="Scratchpad"
			aria-label="Scratchpad"
			data-current-page={$page.url.pathname.includes('/scratchpad') ? 'current-page' : null}
		>
			<Pencil aria-hidden="true" />
		</a>
	</div>
	<div>
		<a
			href="/demo/starred"
			class="button"
			title="Starred"
			data-current-page={$page.url.pathname.includes('/starred') ? 'current-page' : null}
		>
			<Star aria-hidden="true" />
		</a>
	</div>
	<div>
		<a
			href="/demo/settings"
			class="button"
			title="Settings"
			aria-label="Settings"
			data-current-page={$page.url.pathname.includes('/settings') ? 'current-page' : null}
		>
			<Settings aria-hidden="true" />
		</a>
	</div>
	<div>
		<a href="/demo#help" class="button" title="Help" aria-label="Help">
			<HelpCircle aria-hidden="true" />
		</a>
	</div>
</nav>
