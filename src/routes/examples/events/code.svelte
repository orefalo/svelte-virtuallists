<script lang="ts">
	import { VirtualList } from 'svelte-virtuallists';
	import TextArea from '$comp/TextAreaAutosize.svelte';

	let val = $state('// Event name: Event params   (Last event at the top)');

	function handleMessage(event: any) {
		val = JSON.stringify(event) + '\n' + val;
	}

	let virtualList: VirtualList;

	// on the UI
	let theScrollToIndex: number | undefined = $state();
	let theScrollOffet: number | undefined = $state();

	// on the component
	let scrollToIndex: number | undefined = $state();
	let scrollOffet: number | undefined = $state();

	$effect(() => {
		// scrollToIndex and scrollOffset shall not be used together.
		scrollToIndex = undefined;
		scrollOffet = theScrollOffet;
	});

	$effect(() => {
		// scrollToIndex and scrollOffset shall not be used together.
		scrollOffet = undefined;
		scrollToIndex = theScrollToIndex;
	});
</script>

<TextArea value={val} minRows={4} maxRows={30} />

<div class="actions">
	<div class="select">
		<span>
			Scroll to row index
			<input id="index" type="number" placeholder="pick an index..." class="input" bind:value={theScrollToIndex} />
		</span>
	</div>
	<div class="select">
		<span>
			Scroll to pixel offset
			<input id="offset" type="number" placeholder="pick an offset..." class="input" bind:value={theScrollOffet} />
		</span>
	</div>
</div>

<div class="list">
	<VirtualList
		bind:this={virtualList}
		height={500}
		width="auto"
		itemCount={10000}
		itemSize={40}
		{scrollToIndex}
		scrollOffset={scrollOffet}
		onAfterScroll={handleMessage}
		onVisibleRangeUpdate={handleMessage}
	>
		{#snippet row({ style, index }:{style:string, index:number})}
			<div class="row" {style} class:highlighted={index === scrollToIndex}>
				Item #{index}
			</div>
		{/snippet}
	</VirtualList>
</div>

<style>
	:global(body),
	:global(html) {
		height: 100%;
		margin: 0;
		background-color: rgb(249, 249, 249);
		display: block;
	}

	:global(.virtual-list-wrapper) {
		margin: 20px;
		background: #fff;
		border-radius: 2px;
		background: #fafafa;
		font-family: -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
		color: #333;
		-webkit-font-smoothing: antialiased;
	}

	.row {
		padding: 0 15px;
		border-bottom: 1px solid #eee;
		box-sizing: border-box;
		line-height: 50px;
		font-weight: 500;
		background: #fff;
	}

	.row.highlighted {
		background: #efefef;
	}
</style>
