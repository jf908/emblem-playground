<script lang="ts">
	import { onMount } from 'svelte';
	import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
	import type monaco from 'monaco-editor';

	export let value: string;
	export let theme: string;

	let monaco: typeof import('monaco-editor');
	let editor: monaco.editor.IStandaloneCodeEditor;
	let container: HTMLElement;

	$: if (theme && monaco) {
		monaco.editor.setTheme(theme);
	}

	onMount(async () => {
		monaco = await import('monaco-editor');

		window.MonacoEnvironment = {
			globalAPI: true,
			getWorker() {
				return new editorWorker();
			}
		};

		editor = monaco.editor.create(container, {
			automaticLayout: true,
			theme,
			value
		});

		const listener = editor.getModel()?.onDidChangeContent(() => {
			value = editor.getValue();
		});

		return () => {
			listener?.dispose();
			editor.dispose();
		};
	});
</script>

<div class="monaco-container {$$props.class ?? ''}" bind:this={container} />
