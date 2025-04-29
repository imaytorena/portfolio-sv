<script lang="ts">
  import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
  import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';

  export let resumeUrl: string ;
  export let socialLinks: Array<{
    name: string;
    url: string;
  }>;

  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'github': return faGithub;
      case 'linkedin': return faLinkedin;
      case 'twitter': return faTwitter;
      case 'email': return faEnvelope;
      default: return faEnvelope;
    }
  };
</script>

<nav>
  <div class="nav-content">
    <a href="/" class="logo gradient-text">
      <svg width="40px" height="40px" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M271.307 256.142C299.066 225.436 258.936 221.137 255.999 212.214C255.498 210.686 259.33 188.96 257.701 188.96C245.635 188.96 229.733 234.131 199.012 221.69C169.921 209.906 169.203 161.748 138.623 148.478C61.9259 115.192 88.7822 268.726 96.0932 298.343" stroke="var(--primary)" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M314 305.612C280.935 311.977 243.429 267.9 233.906 265.702C225.29 263.712 134.948 311.785 93.5223 199.469" stroke="var(--primary)" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M97.3463 154.616C141.211 4.23541 220.11 186.05 236.719 145.911" stroke="var(--primary
        )" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </a>
    <div class="nav-links">
      <a href={resumeUrl} target="_blank" rel="noopener noreferrer" class="cv-link">
        <Fa icon={faFileAlt} /> CV
      </a>
      {#each socialLinks as link}
        <a href={link.url} target="_blank" rel="noopener noreferrer" class="social-icon">
          <Fa icon={getIcon(link.name)} />
        </a>
      {/each}
    </div>
  </div>
</nav>

<style>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    z-index: 1000;
    padding: 1rem 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .nav-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    display: flex;
    align-items: center;
  }

  .nav-links {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }

  .social-icon {
    color: var(--primary);
    font-size: 1.5rem;
    transition: all 0.3s ease;
  }

  .social-icon:hover {
    color: var(--secondary);
    transform: translateY(-2px);
  }

  .cv-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: var(--primary);
    color: white;
    text-decoration: none;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
  }

  .cv-link:hover {
    background: var(--secondary);
    transform: translateY(-2px);
  }
</style>