<script>
	import { VirtualList } from 'svelte-virtuallists';

	const data = ['A', 'B', 'C', 'D', 'E', 'F' /* ... */];
</script>

<div class="list">
	<VirtualList width="100%" height={600} itemCount={data.length} itemSize={50}>
		{#snippet row({ style, index })}
			<div class="row" {style}>
				Letter: {data[index]}, Row: #{index}
			</div>
		{/snippet}
	</VirtualList>
</div>

<style>
	.list :global(.virtual-list-wrapper) {
		background-color: #0f0;
		/* ... */
	}

	.list :global(.virtual-list-inner) {
		background-color: #f00;
		/* ... */
	}
</style>
