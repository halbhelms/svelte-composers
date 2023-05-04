<script>
  export let composer

  function handleMissingImage(event) {
    event.target.src = 'https://via.placeholder.com/80x50?text=No+Image'
  }
</script>

<!-- HTML -->
<div class="card">
  <h2>{composer.name}</h2>
  <img src={composer.image} alt={composer.name} on:error={handleMissingImage}/>
  <div class="card-body">
    <div class="card-text">
      <p><strong>Genre</strong>: {composer.genre}</p>
      <p><strong>Birth</strong>: {composer.born}</p>
      <p><strong>Death</strong>: {composer.died}</p>
      <p><strong>Works</strong>: {composer.brief}</p>
    </div>
  </div>
</div>

<style>
  .card {
    border: 1px solid gray;
    border-radius: 6px;
    padding: 1rem;
    margin: 1rem;
    width: 500px;
  }

  .card-body {
    display: flex;
    justify-content: space-between;
  }

  .card-text {
    display: flex;
    flex-direction: column;
  }
</style>