<script>
  export let data
  const { composer } = data
console.info('data',composer.name)
  import ComposerCard from '$lib/components/ComposerCard.svelte'
</script>

<div class="composer-card">
  <ComposerCard {composer} />
</div>

<style>
  .composer-card {
    display: flex;
    max-width: 600px;
    background-color: white;
  }
</style>