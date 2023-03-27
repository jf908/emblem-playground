<script lang="ts">
	import 'uno.css';
	import baseCss from 'github-markdown-css/github-markdown.css?inline';
	import emblemCss from '../emblem.css?inline';
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
	let iframe: HTMLIFrameElement | undefined;

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

	$: srcdoc = `
<html>
<head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Jost:ital,wght@0,400;0,700;1,400;1,700&family=Libre+Bodoni:ital,wght@0,400;0,700;1,400;1,700&display=swap"
		rel="stylesheet"
	/>
	<style>
		* { box-sizing: border-box; }
		body { margin: 0; }
		.markdown-body { min-height: 100vh; padding: 1rem; }
	</style>
	<style>${baseCss}</style>
	<style>${emblemCss}</style>
</head>
<body><article class="markdown-body">${output}</article></body>
</html>
		`;

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
		<iframe title="Output" class="flex-1 b-0" {srcdoc} />
		{#if showDebug}
			<article class="flex-1 overflow-auto markdown-body">
				<pre class="min-h-100% m-0 p-3" id="debug">{debug}</pre>
			</article>
		{/if}
	</div>
</div>

<style>
	#debug {
		font-size: 14px;
		font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
	}
</style>
