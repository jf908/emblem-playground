<script lang="ts" context="module">
	export type EditorError = { message: string; location: number[] };
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
	import type monaco from 'monaco-editor';
	import { conf, language } from '../lib/emblem';

	export let value: string;
	export let theme: string;
	export let errors: EditorError[];

	let monaco: typeof import('monaco-editor');
	let editor: monaco.editor.IStandaloneCodeEditor;
	let container: HTMLElement;

	$: if (theme && monaco) {
		monaco.editor.setTheme(theme);
	}

	$: updateErrors(monaco, editor, errors);

	function updateErrors(
		monaco: typeof import('monaco-editor'),
		editor: monaco.editor.IStandaloneCodeEditor,
		errors: EditorError[]
	) {
		if (!editor) return;
		const model = editor.getModel();
		if (!model) return;
		monaco.editor.setModelMarkers(
			model,
			'emblem',
			errors.map((err) => ({
				severity: monaco.MarkerSeverity.Error,
				startLineNumber: err.location[0],
				startColumn: err.location[1],
				endLineNumber: err.location[2],
				endColumn: err.location[3],
				message: err.message
			}))
		);
	}

	function reloadFont() {
		if (monaco) {
			monaco.editor.remeasureFonts();
		}
	}

	onMount(async () => {
		monaco = await import('monaco-editor');

		window.MonacoEnvironment = {
			globalAPI: true,
			getWorker() {
				return new editorWorker();
			}
		};

		monaco.languages.register({ id: 'emblem' });
		monaco.languages.setLanguageConfiguration('emblem', conf);
		monaco.languages.setMonarchTokensProvider('emblem', language);

		editor = monaco.editor.create(container, {
			automaticLayout: true,
			fontFamily: 'JetBrains Mono',
			theme,
			value,
			language: 'emblem',
			wordWrap: 'on'
		});

		const listener = editor.getModel()?.onDidChangeContent(() => {
			value = editor.getValue();
		});

		document.fonts.ready.then(reloadFont);

		return () => {
			listener?.dispose();
			editor.dispose();
		};
	});
</script>

<div class="monaco-container {$$props.class ?? ''}" bind:this={container} />
