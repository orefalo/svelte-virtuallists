<script lang="ts">
  import { VirtualList, type VLSlotSignature } from 'svelte-virtuallists';
  import { getRandomSushi } from '../sushi';

  const myModel = new Array(10000).fill(1).map((v, i) => {
    return { text: '#' + i + ' ' + getRandomSushi() };
  });
</script>

<VirtualList items={myModel} style="height:600px">
  {#snippet vl_slot({ index, item }: VLSlotSignature<(typeof myModel)[0]>)}
    <div style="border: 1px solid rgb(204, 204, 204)">
      <img src="https://picsum.photos/id/{index % 1000}/100/100.webp" alt="nono" />
      {item.text}
    </div>
  {/snippet}
</VirtualList>
