<script lang="ts">
	import 'uno.css';
	import 'github-markdown-css';
	import '../emblem.css';
	import Editor, { type EditorError } from '../components/Editor.svelte';
	import init, { build, EmblemError } from '../../src-wasm/pkg';
	import { onMount } from 'svelte';
	import { useMediaQuery } from '../store';
	import Navbar from '../components/Navbar.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let loaded = false;

	let input = data.template.replace(
		'{{sample}}',
		data.samples[Math.floor(Math.random() * data.samples.length)]
	);
	let output = '';
	let debug = '';
	let showDebug = false;
	let theme = 'vs-dark';
	let errors: EditorError[] = [];

	const dark = useMediaQuery('(prefers-color-scheme: dark)');
	$: theme = $dark ? 'vs-dark' : 'vs';

	function onUpdate(loaded: boolean, input: string) {
		if (!loaded) return;
		let out;
		try {
			out = build(input);
		} catch (ex) {
			const err = ex as EmblemError;
			const locations = err.locations;
			const errorPile: EditorError[] = [];
			for (let i = 0; i < locations.length; i += 4) {
				errorPile.push({
					message: err.message,
					location: [locations[i], locations[i + 1], locations[i + 2], locations[i + 3]]
				});
			}
			errors = errorPile;
			return;
		}

		errors = [];
		const [result, d] = out;
		output = result;
		debug = d;
	}
	$: onUpdate(loaded, input);

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
	<Navbar bind:showDebug />
	<div class="flex min-h-0 h-full">
		<Editor class="flex-1 overflow-hidden" bind:value={input} {theme} {errors} />
		<article class="flex-1 overflow-auto markdown-body p-3" id="output">
			{@html output}
		</article>
		{#if showDebug}
			<article class="flex-1 overflow-auto markdown-body">
				<pre class="min-h-100%" id="debug">{debug}</pre>
			</article>
		{/if}
	</div>
</div>

<style>
	/* This is hack to override uno.css's .h1 */
	:global(.h1) {
		height: auto;
	}
</style>
