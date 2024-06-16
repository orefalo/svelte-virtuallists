<script lang="ts">
	import ExampleArea from '$comp/ExampleArea.svelte';

	import example from './code.svelte?example';
</script>

<h2>Horizontal</h2>
<p>The component can layout its content horizontaly</p>

<ExampleArea {example} />
