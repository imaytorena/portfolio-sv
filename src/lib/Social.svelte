<script lang="ts">
  export let socialLinks: Array<{
    name: string;
    url: string;
  }>;
</script>

<div class="section">
  <h2 class="gradient-text">Conectemos</h2>
  <div class="social-links">
    {#each socialLinks as link}
      <a href={link.url} target="_blank" rel="noopener noreferrer" class="social-link">
        {link.name}
      </a>
    {/each}
  </div>
</div>

<style>
  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
</style>