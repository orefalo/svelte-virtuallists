<script lang="ts">
  import VirtualList from 'svelte-virtuallists/new/VirtualList2.svelte';

  const myModel = new Array(10000).fill(1).map((v, i) => {
    return { text: 'ITEM ' + i + ' - Item ' + i };
  });
</script>

<VirtualList items={myModel} class="list-table" style="height:600px" isTable={true}>
  {#snippet header()}
    <thead>
      <tr>
        <th>Text</th>
        <th>Index</th>
      </tr>
    </thead>
  {/snippet}
  {#snippet vl_slot({ item, index })}
    <tr>
      <td>{index}</td>
      <td>ITEM: {index} - {item.text}</td>
    </tr>
  {/snippet}
</VirtualList>

<style global>
  .list-table table,
  .list-table td,
  .list-table th {
    border: 1px solid #ccc;
  }
  .list-table table {
    border-collapse: collapse;
    width: 100%;
  }
</style>
