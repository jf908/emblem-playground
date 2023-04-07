const HTMLElement = globalThis.HTMLElement ?? class {};

export class EmblemPreview extends HTMLElement {
	wrapper: HTMLElement;
	styleEl: HTMLStyleElement;

	static get observedAttributes() {
		return ['data-style', 'data-html'];
	}

	constructor() {
		super();

		const shadow = this.attachShadow({ mode: 'open' });
		this.wrapper = document.createElement('article');
		this.wrapper.classList.add('markdown-body');
		this.wrapper.style.height = '100%';
		this.wrapper.style.padding = '16px';
		this.wrapper.style.boxSizing = 'border-box';
		this.wrapper.style.overflow = 'auto';

		this.styleEl = document.createElement('style');
		this.styleEl.textContent = this.getAttribute('data-style');
		shadow.appendChild(this.styleEl);
		shadow.appendChild(this.wrapper);
	}

	connectedCallback() {
		this.wrapper.innerHTML = this.getAttribute('data-html') ?? '';
	}

	attributeChangedCallback(name: string, oldValue: string, newValue: string) {
		if (name === 'data-style') {
			this.styleEl.textContent = newValue;
		} else if (name === 'data-html') {
			this.wrapper.innerHTML = newValue;
		}
	}
}

globalThis.customElements?.define('emblem-preview', EmblemPreview);
