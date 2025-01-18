<script lang="ts">
  import Navbar from './lib/Navbar.svelte';
  import Header from './lib/Header.svelte';
  import Projects from './lib/Projects.svelte';
  import ContactForm from './lib/ContactForm.svelte';
  import Footer from './lib/Footer.svelte';
  import { SvelteToast } from '@zerodevx/svelte-toast';

  const personalInfo = {
    name: "Javier Maytorena",
    title: "Full Stack Developer",
    description: "I am a web developer passionate about creating unique and functional digital experiences. " +
            "I really enjoy working with modern technologies or frameworks.",
    profileImage: "/images/img.png"
  };

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/imaytorena" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/israel-maytorena" },
    { name: "Email", url: "javier@maytorena.xyz" }
  ];

  const projects = [

    {
      title: "Portfolio",
      description: "Website to show my profile as a developer and connect with my work",
      url: "/",
      tools: ["svelte", "css", "typescript", "turnstile"],
      image: "/images/portfolio.png",
      site: "portfolio.maytorena.xyz"
    },
    {
      title: "Easy Library",
      description: "Simple crud for an scholar library, its suppose to be able to scale",
      url: "https://easylibrary.maytorena.xyz",
      tools: ["nexjs", "laravel", "vercel", "mysql"],
      image: "/images/easy-library.png",
      site: "easylibrary.maytorena.xyz"
    },
    {
      title: "Counter",
      description: "Project to test my knowledge using a funny YouTube video as an example",
      // https://youtu.be/dRsuD_ygvOc
      tools: ["sveltekit", "cloudflare-pages", "cloudflare-workers", "cloudflare-kv"],
      url: "https://counter.maytorena.xyz",
      site: "counter.maytorena.xyz",
      image: "/images/counter.png"
    }
  ];

  const cvUrl = "/documents/cv.pdf";
</script>

<Navbar {socialLinks} {cvUrl} />

<main style="margin-top: 5rem">
  <Header {...personalInfo} />
  <Projects {projects} />
  <ContactForm />
  <SvelteToast />
</main>

<Footer />