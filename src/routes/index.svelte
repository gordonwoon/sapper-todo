<script context="module">
  export async function preload({ params }) {
    const watches = await this.fetch(`/watch.json`).then(res => res.json());
    const tasks = await this.fetch(`/task.json`).then(res => res.json());

    return { watches, tasks };
  }
</script>

<script>
  import Watches from 'routes/_components/Watches.svelte';

  export let watches
  export let tasks
</script>

<div>
  <Watches {watches} {tasks} />
</div>
