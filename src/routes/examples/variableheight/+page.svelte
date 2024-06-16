<script>
	import ExampleArea from '$comp/ExampleArea.svelte';

	import example from './code.svelte?example';
</script>

<h2>Variable heights</h2>
<p>list items can have different sizes</p>

<ExampleArea {example} />
