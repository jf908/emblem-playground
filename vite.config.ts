import { sveltekit } from '@sveltejs/kit/vite';
import Unocss from 'unocss/vite';
import { presetUno } from 'unocss';
import presetIcons from '@unocss/preset-icons';
import { defineConfig } from 'vite';
import fs from 'fs';

function getEmblemCoreVer() {
	const lock = fs.readFileSync('src-wasm/Cargo.lock', 'utf-8').split('\n');
	for (let i = 0; i < lock.length; i++) {
		if (lock[i] === 'name = "emblem_core"') {
			const [_a, source, _b] = lock[i + 2].split('"');
			const [_git, url] = source.split('+');
			return url;
		}
	}
}

export default defineConfig(() => {
	process.env.PUBLIC_EMBLEM_CORE_URL = getEmblemCoreVer();
	return {
		plugins: [
			sveltekit(),
			Unocss({
				theme: {
					colors: {
						fg: {
							default: '#c8c9db'
						},
						bg: {
							default: '#14191F',
							muted: '#2b323a'
						},
						accent: '#ffb454'
					}
				},
				presets: [
					presetUno(),
					presetIcons({
						extraProperties: {
							display: 'inline-block',
							'vertical-align': 'middle'
						}
					})
				]
			})
		],
		server: {
			fs: {
				allow: ['.']
			}
		}
	};
});
