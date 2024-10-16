<p align="center"><img src="./static/favicon.svg" alt="Logo" width="225"></p>
<h2 align="center">svelte-virtuallists</h2>
<p align="center">Keep your page efficient and fast: only shows the visible items!</p>

<p align="center">
  <a href="https://badgen.net/npm/v/svelte-virtuallists"><img src="https://badgen.net/npm/v/svelte-virtuallists" alt="NPM VERSION"></a>
  <a href="https://badgen.net/packagephobia/publish/svelte-virtuallists"><img src="https://badgen.net/packagephobia/publish/svelte-virtuallists" alt="publish size"></a>
  <a href="https://badgen.net/packagephobia/publish/svelte-virtuallists"><img src="https://orefalo.github.io/svelte-virtuallists/minified-size-badge.svg" alt="minified size"></a>
    <a href="https://orefalo.github.io/svelte-virtuallists/minified-size-badge.svg"><img src="https://badgen.net/bundlephobia/dependency-count/svelte-virtuallists" alt="deps"></a>
      <a href="https://badgen.net/github/contributors/orefalo/svelte-virtuallists"><img src="https://badgen.net/github/contributors/orefalo/svelte-virtuallists" alt="contributors"></a>
</p>
<p align="center">
  <a href="#about">About</a> •
  <a href="#features">Features</a> •
  <a href="#usage">Usage</a> •
  <a href="#demos">Demos</a> •
  <a href="#samples">Samples</a>
</p>

## About

Keep your page efficient and fast: only shows the visible items, instead of displaying all your data in large lists.

This package originated from [svelte-tiny-virtual-list](https://github.com/jonasgeiler/svelte-tiny-virtual-list) and was modified to support Svelte 5, improved model handling, types, bug fixes, and overall project enhancement. Many thanks to the original [author](https://github.com/jonasgeiler).

## Features

- ❺➎⓹ **Svelte 5+ only**
  Build for Svelte 5+ in Typescript.

- 🚀 **Performant**
  Render millions of items, without breaking a sweat.

- 🛠 **Configurable**
  Customize width, heigh, position, style, content.
  
- 💠 **Layout Control**
  Headless, support fixed and variables sizing, along with vertical and horizontal lists.

- 🧩 **Programming Interface**
  Set positions and properties, raises events on state mutation.

- 💼 **Small**
  Compact and dependency free – Only ~5kb when compressed.

## Usage

This component can be used two different ways:

- 🤖 As a scrollable listover a large number of items, optionally read incrementally.

- 🧠 As a fondation for more complex components - TreeViews and DataGrids.

## Browser Support

| ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Latest ✔                                                                                | Latest ✔                                                                                   | Latest ✔                                                                                | Latest ✔                                                                             | Latest ✔                                                                          | 11 ✔                                                                                                                        |

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=orefalo/svelte-virtuallists&type=Date)](https://star-history.com/#orefalo/svelte-virtuallists&Date)

## Demos

- [REPL Demo](https://svelte.dev/repl/1e96cbd4bcd148e3b85a4c8ca76d7309)
- [More complex demos and examples](https://orefalo.github.io/svelte-virtuallists/)

## Samples

```svelte
<script>
	import { VirtualList } from 'svelte-virtuallists';

	const data = ['A', 'B', 'C', 'D', 'E', 'F' /* ... */];
</script>

<VirtualList width="100%" height={600} model={data} modelCount={data.length} itemSize={50}>
	{#snippet slot({ item, style, index })}
		<div class="row" {style}>
			Item: {item}, Row: #{index}
		</div>
	{/snippet}
</VirtualList>
```

You can also perform dynamic loading with a PartialLoader.

```svelte
TODO: explain that model vs views, which translates into model and items
```

### Props

The component accepts the following properties

| Property          | Type        | Required? | Description  |
| ----------------- | ----------- | :-------: | ------------ |
| width             | `number` or `string`\*             |     ✓     | Width of List. This property will determine the number of rendered items when scrollDirection is `'horizontal'`.                                                                                                   |
| height            | `number` or `string`\*             |     ✓     | Height of List. This property will determine the number of rendered items when scrollDirection is `'vertical'`.                                                                                                          |
| model | any[] | ✓ | the model, the data for the items to display in the list. |
| modelCount        | `number`                           |     ✓     | The number of items you want to render.                                                                                                |
| sizeCalculator    | `(index: number, item:any) => number   or   SizingCalculatorFn`                                                                                                                                                                                           | ✓   | A function that returns the size (height or width) of the row/column being rendered. the output of this function is used for scrollbar positioning and is passed to the `vl_slot` |
| row               | (r:RowAttributes) => SnippetResult |     ✓     | Snippet called to render every item, see description below.                                                                                                                                                                 |
| scrollDirection   | `string`                           |           | Whether the list should scroll vertically or horizontally. One of `'vertical'` (default) or `'horizontal'`.                           |
| scrollToOffset      | `number`                           |           | Can be used to control the scroll offset; Also useful for setting an initial scroll offset.             |
| scrollToIndex     | `number`                           |           | Item index to scroll to (by forcefully scrolling if necessary).              |
| scrollToAlignment | `string`                           |           | Used in combination with `scrollToIndex`, this prop controls the alignment of the scrolled to item. One of: `'start'`, `'center'`, `'end'` or `'auto'`. Use `'start'` to always align items to the top of the container and `'end'` to align them bottom. Use `'center`' to align them in the middle of the container. `'auto'` scrolls the least amount possible to ensure that the specified `scrollToIndex` item is fully visible. |
| scrollToBehaviour | `string`                           |           | Used in combination with `scrollToIndex`, this prop controls the behaviour of the scrolling. One of: `'auto'`, `'smooth'` or `'instant'` (default).                                                                                                                                                                                                                                                                                   |
| windowOverPadding | `number`                           |           | Number of extra items to render above/below the visible items. Tweaking this can help reduce scroll flickering on certain browsers and devices.                                                                                                                                                                                                                                                                                    |
| estimatedItemSize | `number`                           |           | Used to estimate the total size of the list before all of its items have actually been measured. The estimated total height is progressively adjusted as items are rendered.                                                                                                                                                                                                                                                          |
| getKey            | `(index: number) => any`           |           | Function that returns the key of an item in the list, which is used to uniquely identify an item. This is useful for dynamic data coming from a database or similar. By default, it's using the item's index.    |

_\* `height` must be a number when `scrollDirection` is `'vertical'`. Similarly, `width` must be a number if `scrollDirection` is `'horizontal'`_
_\** `model` is stored, `items` are rendered

### Snippets

- `header` - an optional snippet for the elements that should appear at the top of the list, typically used in table mode
- `footer` - an optional snippet for the elements that should appear at the bottom of the list, typically used in table mode
- `vl_slot` - a required snipper property called to render each row of the list with the signature `vl_slot({index, item, size?})`. `size` is only present if a custom **sizeCalculator** is in place.



for instance,

```svelte
<VirtualList items={myModel} style="height:600px">
  {#snippet vl_slot({ index, item }: VLSlotSignature)}
    <div style="border: 1px solid rgb(204, 204, 204);">
      Index:{index} Content:{item.text}
    </div>
  {/snippet}
</VirtualList>
```

### Events

- `onAfterScroll` - Fired after handling the scroll event

Accepts a function with the following signature `(event: AfterScrollEvent) => void`

```typescript
export interface AfterScrollEvent {
	type: 'range.update';
	// either the value of `wrapper.scrollTop` or `wrapper.scrollLeft`
	offset: number | string;
	// the original event
	event: Event;
}
```

- `onVisibleRangeUpdate` - Fired when the visible items are updated

Accepts a function with the following signature `(range: VirtualRange) => void`

```typescript
export interface VirtualRangeEvent {
	type: 'scroll.update';
	start: number; //Index of the first visible item
	end: number; //Index of the last visible item
}
```

## Contributing

Please read [CODE OF CONDUCT](CODE_OF_CONDUCT.md) and the [CONTRIBUTION](CONTRIBUTING.md) guide for more details.
