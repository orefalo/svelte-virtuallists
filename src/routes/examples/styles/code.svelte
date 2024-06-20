<script lang="ts">
	import { VirtualList } from 'svelte-virtuallists';
	const data = ['A', 'B', 'C', 'D', 'E', 'F' /* ... */];
</script>

<div class="list">
	<VirtualList width="100%" height={600} items={data} itemCount={data.length} itemSize={50}>
		{#snippet slot({ item, style, index }:{item:any, style:string, index:number})}
			<div class="row" {style}>
				Letter: {item}, Row: #{index}
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
