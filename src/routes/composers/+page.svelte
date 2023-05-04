<div id="filters">
<div class="cell">
  <input type="radio" name="sort" id="all" value="all" checked>
  <label for="all">All</label>
</div>
<div class="cell">
  <input type="radio" name="sort" id="Romantic" value="Romantic" />
  <label for="Romantic">Romantic</label>
</div>
<div class="cell">
  <input type="radio" name="sort" id="Classical" value="Classical">
  <label for="Classical">Classical</label>
</div>
<div class="cell">
  <input type="radio" name="sort" id="Baroque" value="Baroque">
  <label for="Baroque">Baroque</label>
</div>
<div class="cell">
  <input type="radio" name="sort" id="Modern" value="Modern">
  <label for="Modern">Modern</label>
</div>
<div class="cell">
  <input type="radio" name="sort" id="Opera" value="Opera">
  <label for="Opera">Opera</label>
</div>
</div>

{#each filteredComposers as composer}
  <div><a href="http://localhost:5173/composers/{composer.genre.toLowerCase()}/{composer.id}">{composer.name}</a></div>
{/each}

<!-- SCRIPT -->
<script>
  import { onMount } from 'svelte'

  function filterComposers(event) {
    console.log(event.target.value)
    filteredComposers = composers.filter(composer => {
      if (event.target.value === 'all') {
        return true
      } else {
        return composer.genre === event.target.value
      }
    })
  }

  onMount(() => {
    const filterButtons = document.querySelectorAll('input[type="radio"]')
    for (let filterButton of filterButtons) {
      filterButton.addEventListener('change', filterComposers)
    }
  })
  
  export let data
  const { composers } = data
  export let filteredComposers = composers


  
</script>

<style>
  #filters {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1rem;
    width: 30%;
    min-width: 300px;
  }
  .cell {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
</style>