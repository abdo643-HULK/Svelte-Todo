<style>
	.complete {
		text-decoration: line-through;
		color: green;
	}
	li {
		display: flex;
		font-size: 1.2em;
		font-weight: bold;
	}
	span {
		margin-right: auto;
	}
</style>

<script>
	import { fade, fly } from 'svelte/transition';

	import { createEventDispatcher } from 'svelte';

	export let id;
	export let complete;
	export let text;

	const dispatch = createEventDispatcher();

	function remove() {
		dispatch('remove', { id });
	}

	function toggleStatus() {
		let newStatus = !complete;
		dispatch('toggle', {
			id,
			newStatus,
		});
	}
</script>

<!-- out:fly={{ x: -500, duration: 500 }} -->
<li in:fly={{ x: 900, duration: 500 }} out:fade>
	<span class:complete>
		{text}
	</span>

	{#if complete}
		<button on:click={toggleStatus}> ✔️ </button>
	{:else}
		<button on:click={toggleStatus}> ❌ </button>
	{/if}
	<button on:click={remove}> 🗑️ </button>
</li>
