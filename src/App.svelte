<script lang="ts">
  import Navbar from './lib/Navbar.svelte';
  import Header from './lib/Header.svelte';
  import Projects from './lib/Projects.svelte';
  import Technologies from "./lib/Technologies.svelte";
  import ContactForm from './lib/ContactForm.svelte';
  import Footer from './lib/Footer.svelte';
  import { SvelteToast } from '@zerodevx/svelte-toast';
  import {
      socialLinks,
      resumeUrl,
      personalInfo as info,
      personalProjects as projects,
      technologies
  } from "./config/data";
</script>

<Navbar {socialLinks} {resumeUrl} />

<main style="margin-top: 5rem">
  <Header {...info} />
  <Projects {projects} />
  <div class="section badges">
    <h2 class="gradient-text">Badges & Certifications</h2>
    <div style="display: flex; align-items: center; justify-content: flex-start; flex-wrap: wrap; margin-top: 1rem; gap: 1rem;">
      <a href="https://www.credly.com/badges/790a08df-33ca-410c-86da-d578f86dd959/public_url">
        <img src="/images/badges/aws-certified-cloud-practitioner.png" />
      </a>
      <a href="https://www.credly.com/badges/c433b5d8-d0bd-4837-991c-558675b8f386/public_url">
        <img src="/images/badges/aws-partner-technical-accredited.png" />
      </a>
    </div>
  </div>
  <Technologies {technologies} />
  <ContactForm />
  <SvelteToast />
</main>

<Footer />