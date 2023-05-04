<script>
  export let data
  const { composer } = data
console.info('data',composer.name)
  import ComposerCard from '$lib/components/ComposerCard.svelte'
</script>

<ComposerCard {composer} />
