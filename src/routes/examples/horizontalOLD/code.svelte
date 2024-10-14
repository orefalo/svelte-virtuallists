<script lang="ts">
  import { DIRECTION, VirtualList, type VirtualListModel } from 'svelte-virtuallists';

  interface MyItemsData {
    text: string;
    lineHeight: string;
    width: string;
  }

  const myModel: Array<MyItemsData> = new Array(10000).fill(1).map((v, i) => ({
    text: 'Item ' + i,
    lineHeight: 20 + (i % 20) + 'px',
    width: 100 + (i % 30) + 'px'
  }));
</script>

<div class="list horizontal">
  <VirtualList
    height="200px"
    width={680}
    scrollDirection={DIRECTION.HORIZONTAL}
    model={myModel}
    modelCount={myModel.length}
    itemSize={150}>
    {#snippet slot({ item: _item, style, index }: VirtualListModel<any>)}
      <div class="col" {style}>
        Item #{index}
      </div>
    {/snippet}
  </VirtualList>
</div>

<style>
  :global(body),
  :global(html) {
    height: 100%;
    margin: 0;
    background-color: rgb(249, 249, 249);
  }

  :global(.virtual-list-wrapper) {
    margin: 20px;
    background: #fff;
    border-radius: 2px;
    box-shadow:
      0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 1px 5px 0 rgba(0, 0, 0, 0.12);
    background: #fafafa;
    font-family: -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
    color: #333;
    -webkit-font-smoothing: antialiased;
  }

  .col {
    padding: 0 15px;
    padding-top: 30px;
    border-right: 1px solid #eee;
    box-sizing: border-box;
    line-height: 50px;
    font-weight: 500;
    text-align: center;
    background: #fff;
  }

  .horizontal {
    margin: 50px auto;
  }
</style>
