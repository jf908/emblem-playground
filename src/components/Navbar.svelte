<script lang="ts">
	import { PUBLIC_EMBLEM_CORE_URL } from '$env/static/public';
	import MenuButton from './MenuButton.svelte';

	export let showDebug: boolean;
</script>

<nav class="flex items-center h-45px gap-4 text-fg-default bg-bg-default select-none">
	<h1 class="m-0 pl-3 text-5">Emblem Playground</h1>
	<a
		class="text-inherit no-underline hover:text-accent"
		href="https://github.com/jf908/emblem-playground"><span class="text-5 i-ph-github-logo" /></a
	>
	<a
		class="text-inherit no-underline hover:text-accent"
		href="https://kcza.net/emblem/introduction.html">Docs</a
	>
	<div class="ml-auto h-full flex">
		<MenuButton
			class="h-full w-10 ml-auto bg-transparent b-0 text-inherit hover:bg-bg-muted text-6"
		>
			<span class="i-ph-list" slot="button" />
			<div class="bg-bg-default w-80 p-3 shadow-lg flex flex-col gap-4">
				<div>
					Using emblem_core
					<a
						class="text-inherit no-underline rounded hover:text-accent px-1 bg-bg-muted"
						href={PUBLIC_EMBLEM_CORE_URL}
						><span class="i-ph-git-commit" />
						{PUBLIC_EMBLEM_CORE_URL.split('#')[1].substring(0, 8)}</a
					>
				</div>
				<div>
					<input id="show-debug" type="checkbox" bind:checked={showDebug} />
					<label for="show-debug">Show debug</label>
				</div>
			</div>
		</MenuButton>
	</div>
</nav>
