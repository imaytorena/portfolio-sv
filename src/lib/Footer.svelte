<script lang="ts">
  import Fa from 'svelte-fa';
  import { faHeart } from '@fortawesome/free-solid-svg-icons';
  
  const currentYear = new Date().getFullYear();
</script>

<footer>
  <div class="footer-content">
    <div class="footer-section">
      <h3 class="gradient-text">¡Gracias por visitar!</h3>
      <p>Siempre estoy abierto a nuevas oportunidades y colaboraciones.</p>
    </div>
    
    <div class="footer-section">
      <p class="made-with">
        Made with <Fa icon={faHeart} color="#ff6b6b"/> and Svelte
      </p>
      <p class="copyright">© {currentYear} Javier Maytorena. Todos los derechos reservados.</p>
    </div>
  </div>
</footer>

<style>
  footer {
    margin-top: 4rem;
    padding: 3rem 0;
    background: linear-gradient(135deg, rgba(70, 53, 177, 0.05), rgba(183, 113, 229, 0.05));
  }

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    text-align: center;
  }

  .footer-section {
    margin-bottom: 2rem;
  }

  .footer-section:last-child {
    margin-bottom: 0;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .made-with {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .copyright {
    color: var(--text);
    opacity: 0.8;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    footer {
      padding: 2rem 0;
    }
  }
</style>