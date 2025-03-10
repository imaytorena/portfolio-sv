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
    profileImage: "/images/d3895dbe1782.png"
  };

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/imaytorena" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/israel-maytorena" },
    { name: "Email", url: "mailto:javier@maytorena.xyz" }
  ];

  const projects = [
    {
      title: "ColectividApp",
      description: "A platform for collective management and collaboration",
      active: true,
      url: "https://colectividapp.maytorena.xyz",
      tools: [
        { name: "svelte", icon: "devicon-svelte-plain colored" },
        { name: "css", icon: "devicon-css3-plain colored" },
        { name: "typescript", icon: "devicon-typescript-plain colored" },
        { name: "vercel", icon: "devicon-vercel-plain colored" }
      ],
      technicalDetails: [
        "Map implementation with Leaflet",
        "User authentication and authorization",
        "Responsive design with modern CSS",
      ],
      image: "/images/colectividapp.png",
      site: "colectividapp.maytorena.xyz"
    },
    {
      title: "Portfolio",
      description: "Website to show my profile as a developer and connect with my work",
      url: "/",
      tools: [
        { name: "svelte", icon: "devicon-svelte-plain colored" },
        { name: "css", icon: "devicon-css3-plain colored" },
        { name: "typescript", icon: "devicon-typescript-plain colored" },
        { name: "cloudflare", icon: "devicon-cloudflare-plain colored" }
      ],
      technicalDetails: [
        "Contact form implementation with Cloudflare Turnstile protection",
        "Responsive design with modern CSS and smooth animations",
        "Strict typing with TypeScript for better maintainability",
        "Modular components in Svelte for better reusability",
      ],
      image: "/images/portfolio.png",
      site: "portfolio.maytorena.xyz"
    },
    {
      title: "Easy Library",
      description: "Simple crud for an scholar library, its suppose to be able to scale",
      url: "https://easylibrary.maytorena.xyz",
      tools: [
        { name: "nextjs", icon: "devicon-nextjs-plain colored" },
        { name: "laravel", icon: "devicon-laravel-plain colored" },
        { name: "vercel", icon: "devicon-vercel-plain colored" },
        { name: "mysql", icon: "devicon-mysql-plain colored" }
      ],
      technicalDetails: [
        "RESTful API with Laravel for resource management",
        "Frontend in Next.js with Server-Side Rendering",
        "MySQL database optimized for frequent queries",
        "Automated deployment in Vercel"
      ],
      image: "/images/easy-library.png",
      site: "easylibrary.maytorena.xyz"
    },
    {
      title: "Counter",
      description: "Project to test my knowledge using a funny YouTube video as an example",
      tools: [
        { name: "sveltekit", icon: "devicon-svelte-plain colored" },
        { name: "tailwind", icon: "devicon-tailwindcss-plain colored" },
        { name: "cloudflare", icon: "devicon-cloudflare-plain colored" }
      ],
      deprecated: true,
      technicalDetails: [
        "Implementing Cloudflare Workers for edge processing",
        "Distributed storage with Cloudflare KV",
        "Continuous deployment on Cloudflare Pages",
        "Serverless architecture for maximum scalability",
      ],
      url: "https://counter.maytorena.xyz",
      site: "counter.maytorena.xyz",
      image: "/images/counter.png"
    }
  ];

  const cvUrl = "/documents/JavierMaytorenaResume.pdf";
</script>

<Navbar {socialLinks} {cvUrl} />

<main style="margin-top: 5rem">
  <Header {...personalInfo} />
  <Projects {projects} />
  <ContactForm />
  <SvelteToast />
</main>

<Footer />