<script lang="ts">
	export let open: boolean = false;

	let el: HTMLElement;

	function toggle() {
		open = !open;
	}

	function onMouseDown(e: MouseEvent) {
		if (open && !el.contains(e.target as Element)) {
			open = false;
		}
	}
</script>

<div bind:this={el}>
	<button on:click={toggle} class={$$props.class ?? ''}><slot name="button" /></button>
	{#if open}
		<div class="fixed z-1 right-0">
			<slot />
		</div>
	{/if}
</div>

<svelte:window on:mousedown={onMouseDown} />
