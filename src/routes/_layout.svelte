<script>
  import Nav from 'routes/_components/Nav.svelte'
  export let segment
</script>

<Nav {segment} />

<main>
	<slot></slot>
</main>
