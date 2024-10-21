<script lang="ts">
  import { VirtualList, type VLSlotSignature } from 'svelte-virtuallists';

  const myModel = new Array(10000).fill(1).map((v, i) => {
    return { text: '#' + i + ' - Item ' + i };
  });
</script>

<VirtualList items={myModel} style="height:600px">
  {#snippet vl_slot({ item }: VLSlotSignature<(typeof myModel)[0]>)}
    <div style="border: 1px solid rgb(204, 204, 204)">
      {item.text}
    </div>
  {/snippet}
</VirtualList>
