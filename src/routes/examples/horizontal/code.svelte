<script lang="ts">
  import VirtualList from '$lib/VirtualList2.svelte';

  const myModel = new Array(10000).fill(1).map((v, i) => {
    return {  text: 'ITEM ' + i +' - Item ' + i };
  });
</script>

<VirtualList items={myModel} style="width:600px" isHorizontal={true}>
  {#snippet vl_slot({ item, index })}
    <div style="border: 1px solid rgb(204, 204, 204)">
      {item.text}
    </div>
  {/snippet}
</VirtualList>
