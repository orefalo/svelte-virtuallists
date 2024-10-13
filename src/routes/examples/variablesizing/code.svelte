<script lang="ts">
  import VirtualList from '$lib/VirtualList2.svelte';

  const myModel = new Array(10000).fill(1).map((v, i) => {
    return { text: 'Item ' + i + ' item ' + i, lineHeight: 20 + (i % 30) + 'px' };
  });

  let rowHeights = (item: any, index: number) => 25;

  function randomize() {
    rowHeights = (item: any, index: number) => Math.round(Math.random() * (155 - 30) + 30);
  }

  function sameSize() {
    rowHeights = (item: any, index: number) => 25;
  }

  randomize()
</script>

<h2>Horizontal</h2>

<VirtualList items={myModel} style="width:100%" isHorizontal={true}>
  {#snippet vl_slot({ item, index })}
    <div style="border: 1px solid rgb(204, 204, 204)">
      {item.text}
    </div>
  {/snippet}
</VirtualList>

<h2>Vertical</h2>

<VirtualList items={myModel} style="height:600px">
  {#snippet vl_slot({ item, index })}
    <div style="border: 1px solid rgb(204, 204, 204); line-height: {rowHeights(item,index)}px;">
      {item.text}
    </div>
  {/snippet}
</VirtualList>

<div class="actions">
  <button onclick={randomize} class="button">Randomize row heights</button>
  <button onclick={sameSize} class="button">Same row heights</button>
</div>
