<script lang="ts">
  import { type VLSlotSignature } from 'svelte-virtuallists';
  import VirtualList from 'svelte-virtuallists/new/VirtualListNew.svelte';

  const myModel = new Array(10000).fill(1).map((v, i) => {
    return {
      text: 'Item ' + i + ' item ' + i
    };
  });

  let rowHeights = $state();

  function randomize() {
    rowHeights = (index: number, item: any) => Math.round(Math.random() * (155 - 30) + 30);
  }

  function sameSize() {
    rowHeights = (index: number, item: any) => 25;
  }

  randomize();
</script>

<h2>Horizontal</h2>

<VirtualList items={myModel} style="width:100%" isHorizontal={true}>
  {#snippet vl_slot({ index, item, size }: VLSlotSignature)}
    <div style="border: 1px solid rgb(204, 204, 204); width: {size}px;">
      {item.text}
    </div>
  {/snippet}
</VirtualList>

<h2>Vertical</h2>

<VirtualList items={myModel} style="height:600px">
  {#snippet vl_slot({ index, item, size }: VLSlotSignature)}
    <div style="border: 1px solid rgb(204, 204, 204); line-height: {size}px;">
      {item.text}
    </div>
  {/snippet}
</VirtualList>

<div class="actions">
  <button onclick={randomize} class="button">Randomize row heights</button>
  <button onclick={sameSize} class="button">Same row heights</button>
</div>
