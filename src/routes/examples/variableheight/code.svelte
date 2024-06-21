<script lang="ts">
	import { VirtualList, type SlotAttributes } from 'svelte-virtuallists';

	const itemCount = 10000;

	let virtualList: VirtualList;

	// on the component
	let rowHeights: Array<number> | number = $state([]);

	interface MyItemsData {
		text: string;
	}

	const myItems: Array<MyItemsData> = new Array(itemCount).fill(1).map((v, i) => ({
		text: 'Item ' + i
	}));

	function randomize() {
		let newRowHeights = [];
		for (let i = 0; i < itemCount; i++) {
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
	<VirtualList bind:this={virtualList} items={myItems} height={500} width="auto" {itemCount} itemSize={rowHeights}>
		{#snippet slot({ item, style, index }: SlotAttributes<MyItemsData>)}
			<div class="row" {style}>
				{item.text}
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
