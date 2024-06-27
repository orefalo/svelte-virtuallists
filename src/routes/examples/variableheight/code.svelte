<script lang="ts">
  import { VirtualList, type SlotAttributes } from 'svelte-virtuallists';

  const modelCount = 10000;

  let virtualList: VirtualList;

  // on the component
  let rowHeights: Array<number> | number = $state([]);

  interface MyItemsData {
    text: string;
  }

  const myModel: Array<MyItemsData> = new Array(modelCount).fill(1).map((v, i) => ({
    text: 'Item ' + i
  }));

  function randomize() {
    let newRowHeights = [];
    for (let i = 0; i < modelCount; i++) {
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
  <VirtualList
    bind:this={virtualList}
    model={myModel}
    height={500}
    width="auto"
    {modelCount}
    itemSize={rowHeights}>
    {#snippet slot({ item, style, index: _index }: SlotAttributes<MyItemsData>)}
      <div class="row" {style}>
        {item.text}
      </div>
    {/snippet}
  </VirtualList>
</div>

<div class="actions">
  <button onclick={randomize} class="button">Randomize row heights</button>
  <button onclick={sameSize} class="button">Same row heights</button>
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
