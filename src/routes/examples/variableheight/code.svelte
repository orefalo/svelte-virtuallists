<script lang="ts">
	import { VirtualList } from 'svelte-virtuallists';

	let virtualList: VirtualList;

	// on the component
	let rowHeights: Array<number> | number = $state([]);

	function randomize() {
		let newRowHeights = [];
		for (let i = 0; i < 10000; i++) {
			newRowHeights.push(Math.random() * (155 - 50) + 50);
		}
		rowHeights = newRowHeights;
	}

	function sameSize() {
		rowHeights = 50;
	}

	randomize();
</script>

<div class="list">
	<VirtualList bind:this={virtualList} height={500} width="auto" itemCount={10000} itemSize={rowHeights}>
		{#snippet row({ style, index }:{style:string, index:number})}
			<div class="row" {style}>
				Item #{index}
			</div>
		{/snippet}
	</VirtualList>
</div>

<div class="actions">
	<button onclick={randomize} class="button">Randomize row heights </button>
	<button onclick={sameSize} class="button">Same row heights </button>
</div>

<style>
	.row {
		padding: 0 15px;
		border-bottom: 1px solid #eee;
		box-sizing: border-box;
		line-height: 50px;
		font-weight: 500;
		background: #fff;
	}
</style>
