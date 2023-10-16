<script lang="ts">
	import { page } from '$app/stores';
	import { Files, HelpCircle, Pencil, Plus, Settings, Star } from 'lucide-svelte';
	import TildeLogo from '../TildeLogo.svelte';
</script>

<aside id="sidebar" class="hidden tablet:block w-fit h-full border-r-2 border-black/10">
	<div id="sidebar-rail" class="w-20 h-full laptop:hidden flex flex-col justify-start items-center">
		<header class="w-full px-3 py-6 flex justify-center items-center">
			<div class="w-9 h-9">
				<TildeLogo />
			</div>
		</header>
		<main class="w-full h-full px-3 pt-6 flex flex-col justify-start items-center gap-6">
			<div id="sidebar-action-button">
				<button
					class="button bg-chrysler-500 hover:bg-chrysler-500/80 focus:bg-chrysler-500/80 text-white/80"
				>
					<Plus />
				</button>
			</div>
			<nav class="w-full flex flex-col justify-start items-center gap-2">
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
			</nav>
		</main>
		<footer class="w-full p-3">
			<nav class="w-full flex flex-col justify-start items-center gap-2">
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
					<button class="button" title="Help" aria-label="Help">
						<HelpCircle aria-hidden="true" />
					</button>
				</div>
			</nav>
		</footer>
	</div>
	<div
		id="sidebar-drawer"
		class="w-60 h-full hidden laptop:flex flex-col justify-start items-center"
	>
		<header class="w-full px-3 py-6 flex justify-start items-center gap-6">
			<div class="w-9 h-9">
				<TildeLogo />
			</div>
			<span class="font-bold text-xl text-start">Tilde</span>
		</header>
		<main class="w-full h-full px-3 pt-6 flex flex-col justify-start items-center gap-6">
			<div id="sidebar-action-button" class="w-full">
				<button
					class="button w-full justify-center bg-chrysler-500 hover:bg-chrysler-500/80 focus:bg-chrysler-500/80 text-white/80"
				>
					<span>New Note</span>
				</button>
			</div>
			<nav class="w-full flex flex-col justify-start items-center gap-2">
				<div class="w-full">
					<a
						href="/demo/all"
						class="button"
						title="All Notes"
						aria-label="All Notes"
						data-current-page={$page.url.pathname.includes('/all') ? 'current-page' : null}
					>
						<Files aria-hidden="true" />
						<span>All Notes</span>
					</a>
				</div>
				<div class="w-full">
					<a
						href="/demo/scratchpad"
						class="button"
						title="Scratchpad"
						aria-label="Scratchpad"
						data-current-page={$page.url.pathname.includes('/scratchpad') ? 'current-page' : null}
					>
						<Pencil aria-hidden="true" />
						<span>Scratchpad</span>
					</a>
				</div>
			</nav>
		</main>
		<footer class="w-full p-3">
			<nav class="w-full flex flex-col justify-start items-center gap-2">
				<div class="w-full">
					<a
						href="/demo/settings"
						class="button"
						title="Settings"
						aria-label="Settings"
						data-current-page={$page.url.pathname.includes('/settings') ? 'current-page' : null}
					>
						<Settings aria-hidden="true" />
						<span>Settings</span>
					</a>
				</div>
				<div class="w-full">
					<button class="button w-full" title="Help" aria-label="Help">
						<HelpCircle aria-hidden="true" />
						<span>Help</span>
					</button>
				</div>
			</nav>
		</footer>
	</div>
</aside>
