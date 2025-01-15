<script lang="ts">
  export let name: string;
  export let title: string;
  export let description: string;
  export let profileImage: string;
</script>

<header class="section">
  <div class="header-content">
    <div class="text-content">
      <h1 class="gradient-text">{name}</h1>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
    <div class="image-container">
      <img src={profileImage} alt={name} />
    </div>
  </div>
</header>

<style>
  .header-content {
    display: flex;
    align-items: center;
    gap: 4rem;
  }

  .text-content {
    flex: 1;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.5rem;
    color: var(--secondary);
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    max-width: 600px;
  }

  .image-container {
    flex-shrink: 0;
  }

  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid var(--primary);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    .header-content {
      flex-direction: column-reverse;
      text-align: center;
      gap: 2rem;
    }

    img {
      width: 200px;
      height: 200px;
    }
  }
</style>