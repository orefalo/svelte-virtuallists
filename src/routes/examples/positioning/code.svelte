<script lang="ts">
	import { VirtualList, ALIGNMENT, SCROLL_BEHAVIOR } from 'svelte-virtuallists';

	let virtualList: VirtualList;

	// on the UI
	let theScrollToIndex: number | undefined = $state();
	let theScrollOffet: number | undefined = $state();

	// on the component
	let rowHeights: Array<number> | number = $state([]);
	let scrollToIndex: number | undefined = $state();
	let scrollOffet: number | undefined = $state();

	let start = $state(0);
	let end = $state(0);

	function handleMessage(event: any) {
		if (event.type === 'range.update') {
			start = event.start;
			end = event.end;
		}
	}

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

	let scrollToAlignment: ALIGNMENT = $state(ALIGNMENT.AUTO);
	let scrollToBehaviour: SCROLL_BEHAVIOR = $state(SCROLL_BEHAVIOR.SMOOTH);

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
	<div class="select">
		<span>
			Alignment
			<select id="alignment" bind:value={scrollToAlignment}>
				<option value="auto">auto</option>
				<option value="start">start</option>
				<option value="center">center</option>
				<option value="end">end</option>
			</select>
		</span>
	</div>
	<div class="select">
		<span>
			Behaviour
			<select id="behaviour" bind:value={scrollToBehaviour}>
				<option value="auto">auto</option>
				<option value="smooth">smooth</option>
				<option value="instant">instant</option>
			</select>
		</span>
	</div>
</div>
<div style="float: right;font-weight: bold">
	<span>Visible Area: start</span>
	<span>{start}</span>
	- <span>end</span>
	<span>{end}</span>
</div>
<div class="list">
	<VirtualList
		bind:this={virtualList}
		height={500}
		width="auto"
		itemCount={10000}
		itemSize={rowHeights}
		{scrollToIndex}
		scrollOffset={scrollOffet}
		{scrollToAlignment}
		{scrollToBehaviour}
		onVisibleRangeUpdate={handleMessage}
	>
		{#snippet row({ style, index }:{style:string, index:number})}
			<div class="row" {style} class:highlighted={index === scrollToIndex}>
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
