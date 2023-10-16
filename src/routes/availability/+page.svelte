<script lang="ts">
	import TildeLogo from '$lib/components/TildeLogo.svelte';
</script>

<svelte:head>
	<title>Tilde's Availability</title>
</svelte:head>

<div class="w-full h-full overflow-y-auto flex justify-center items-start">
	<div
		class="w-full max-w-[640px] wysiwyg dark:wysiwyg-invert wysiwyg-sm tablet:wysiwyg tablet:dark:wysiwyg-invert p-6 selection:bg-chrysler-500/20 dark:selection:bg-chrysler-500"
	>
		<div class="w-full flex justify-center items-center not-wysiwyg py-12">
			<div class="w-24 h-24 aspect-square">
				<TildeLogo />
			</div>
		</div>
		<div class="w-full">
			<h1 class="text-center">Tilde's Availability</h1>

			<p>
				As mentioned on the landing page, Tilde is currently only available as a demo. This doesn't
				mean it has no functionality. All visible elements are functional.
			</p>
			<p>
				What this means is that anything you write in the editor is not saved on a server. It is
				however, saved to your browser's <code>localStorage</code>.
			</p>
			<p>
				There will eventually be a way for you to share what you write via a temporary URL that's
				only available for 24-hours until renewed by visiting that URL within 23 hours after
				creation.
			</p>

			<a href="/" class="not-wysiwyg link text-chrysler-500 dark:text-chrysler-200">Go Back</a>
		</div>
	</div>
</div>
