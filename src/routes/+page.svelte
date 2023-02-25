<script lang="ts">
	import 'uno.css';
	import 'github-markdown-css';
	import Editor from '../components/Editor.svelte';
	import init, { build } from '../../src-wasm/pkg';
	import { onMount } from 'svelte';
	import { useMediaQuery } from '../store';

	let loaded = false;

	let input = '';
	let output = '';
	let debug = '';
	let showDebug = false;
	let theme = 'vs-dark';

	const dark = useMediaQuery('(prefers-color-scheme: dark)');
	$: theme = $dark ? 'vs-dark' : 'vs';

	function onUpdate(input: string) {
		if (!loaded) return;
		let out;
		try {
			out = build(input);
		} catch (ex) {
			console.error(ex);
			return;
		}

		const [result, d] = out;
		output = result;
		debug = d;
	}
	$: onUpdate(input);

	onMount(() => {
		init().then(() => {
			loaded = true;
		});
	});
</script>

<svelte:head>
	<title>Emblem Playground</title>
</svelte:head>

<div class="flex flex-col h-100vh">
	<nav class="flex items-baseline p-2 gap-4 text-#c8c9db bg-#14191F select-none">
		<h1 class="m-0 text-5">Emblem Playground</h1>
		<a
			class="text-inherit no-underline hover:text-#ffb454"
			href="https://kcza.net/emblem/introduction.html">Docs</a
		>
		<div class="flex items-center gap-1 ml-auto">
			<input id="show-debug" type="checkbox" bind:checked={showDebug} />
			<label for="show-debug">Show debug</label>
		</div>
	</nav>
	<div class="flex h-full">
		<Editor class="flex-1 overflow-auto" bind:value={input} {theme} />
		<article class="flex-1 overflow-auto markdown-body p-3" id="output">
			{@html output}
		</article>
		{#if showDebug}
			<article class="flex-1 overflow-auto markdown-body">
				<pre style="min-height: 100%" id="debug">{debug}</pre>
			</article>
		{/if}
	</div>
</div>
