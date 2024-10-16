<script lang="ts">
  import { type SizingCalculatorFn, type VLSlotSignature } from 'svelte-virtuallists';
  import VirtualList from 'svelte-virtuallists/new/VirtualListNew.svelte';

  const myModel = new Array(10000).fill(1).map((v, i) => {
    return {
      text: 'Item ' + i
    };
  });

  function randomize() {
    calculator = (index: number, item: any) => Math.round(Math.random() * (155 - 30) + 30);
  }

  function sameSize() {
    calculator = (index: number, item: any) => 25;
  }

  // @ts-expect-error undefined
  let calculator: SizingCalculatorFn = $state();

  randomize();
</script>

<h2>Horizontal</h2>

<VirtualList items={myModel} style="width:100%" isHorizontal={true} sizingCalculator={calculator}>
  {#snippet vl_slot({ index, item, size }: VLSlotSignature)}
    <div style="border: 1px solid rgb(204, 204, 204); width: {size}px;">
      {item.text}
    </div>
  {/snippet}
</VirtualList>

<h2>Vertical</h2>

<VirtualList items={myModel} style="height:600px" sizingCalculator={calculator}>
  {#snippet vl_slot({ index, item, size }: VLSlotSignature)}
    <div style="border: 1px solid rgb(204, 204, 204); line-height: {size}px;">
      Index:{index} Content:{item.text}
    </div>
  {/snippet}
</VirtualList>

<div class="actions">
  <button onclick={randomize} class="button">Randomize row heights</button>
  <button onclick={sameSize} class="button">Same row heights</button>
</div>
