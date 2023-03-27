import type { languages } from 'monaco-editor';

export const conf: languages.LanguageConfiguration = {
	comments: {
		lineComment: '//',
		blockComment: ['/*', '*/']
	},
	brackets: [
		['{', '}'],
		['[', ']']
	],
	autoClosingPairs: [
		{ open: '{', close: '}' },
		{ open: '[', close: ']' }
	],
	surroundingPairs: [
		{ open: '{', close: '}' },
		{ open: '[', close: ']' },
		{ open: '`', close: '`' }
	],
	onEnterRules: [
		{
			beforeText: new RegExp('^\\s*.*?:\\s*$'),
			// Should use proper enum constant but can't work out monaco editor importing
			// action: { indentAction: languages.IndentAction.Indent }
			action: { indentAction: 1 }
		}
	],
	folding: {
		markers: {
			start: /^\\s*\/\/ region:\\b/,
			end: /^\\s*\/\/ endregion\\b/
		}
	}
};

// Built from markdown
export const language = <languages.IMonarchLanguage>{
	defaultToken: '',
	tokenPostfix: '.em',

	// escape codes
	control: /[\\`*_\[\]{}()#+\-\.!]/,
	noncontrol: /[^\\`*_\[\]{}()#+\-\.!]/,
	escapes: /\\(?:@control)/,

	tokenizer: {
		root: [
			// comments
			[/\/\*/, 'comment', '@comment'],
			[/\/\/.*$/, 'comment'],

			// headers (with #)
			[/^(\s{0,3})(#+)((?:[^\\#]|@escapes)+)((?:#+)?)/, ['white', 'keyword', 'keyword', 'keyword']],

			// delimiter
			[/(:)\n/, 'delimiter'],

			// tag
			[/\.[^ \t{}\[\]\r\n:+]+\+*/, 'tag'],

			// markup within lines
			{ include: '@linecontent' }
		],
		linecontent: [
			// escapes
			[/&\w+;/, 'string.escape'],
			[/@escapes/, 'escape'],

			// various markup
			[/\b__([^\\_]|@escapes|_(?!_))+__\b/, 'strong'],
			[/\*\*([^\\*]|@escapes|\*(?!\*))+\*\*/, 'strong'],
			[/\b_[^_]+_\b/, 'emphasis'],
			[/\*([^\\*]|@escapes)+\*/, 'emphasis'],
			[/`([^\\`]|@escapes)+`/, 'variable'],
			[/!([^\\!]|@escapes)+!/, 'string'],

			// different font
			[/==([^\\*]|@escapes|=(?!=))+==/, 'emphasis'],
			// small-caps
			[/=([^\\*]|@escapes)+=/, 'strong']
		],

		comment: [
			[/[^\/*]+/, 'comment'],
			[/\/\*/, 'comment', '@push'],
			['\\*/', 'comment', '@pop'],
			[/[\/*]/, 'comment']
		]
	}
};
