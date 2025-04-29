export const personalInfo = {
    name: "Javier Maytorena",
    title: "Full Stack Developer",
    description: "I am a web developer passionate about creating unique and functional digital experiences. " +
        "I really enjoy working with modern technologies or frameworks.",
    profileImage: "/images/d3895dbe1782.png"
};

export const socialLinks = [
    {name: "GitHub", url: "https://github.com/imaytorena"},
    {name: "LinkedIn", url: "https://www.linkedin.com/in/israel-maytorena"},
    {name: "Email", url: "mailto:javier@maytorena.xyz"}
]

export const resumeUrl = "/documents/JavierMaytorenaResume.pdf";

export const personalProjects = [
    {
        title: "ColectividApp",
        description: "A platform for collective management and collaboration",
        active: true,
        url: "https://colectividapp.maytorena.xyz",
        tools: [
            {name: "svelte", icon: "devicon-svelte-plain colored"},
            {name: "css", icon: "devicon-css3-plain colored"},
            {name: "typescript", icon: "devicon-typescript-plain colored"},
            {name: "vercel", icon: "devicon-vercel-plain colored"}
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
            {name: "svelte", icon: "devicon-svelte-plain colored"},
            {name: "css", icon: "devicon-css3-plain colored"},
            {name: "typescript", icon: "devicon-typescript-plain colored"},
            {name: "cloudflare", icon: "devicon-cloudflare-plain colored"}
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
            {name: "nextjs", icon: "devicon-nextjs-plain colored"},
            {name: "laravel", icon: "devicon-laravel-plain colored"},
            {name: "vercel", icon: "devicon-vercel-plain colored"},
            {name: "mysql", icon: "devicon-mysql-plain colored"}
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
            {name: "sveltekit", icon: "devicon-svelte-plain colored"},
            {name: "tailwind", icon: "devicon-tailwindcss-plain colored"},
            {name: "cloudflare", icon: "devicon-cloudflare-plain colored"}
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

export const technologies = [
    {
        name: "javascript",
        icon: "devicon-javascript-plain",
        tags: ['top', 'frontend'],
        score: 1
    },
    {
        name: "jquery",
        icon: "devicon-jquery-plain",
        tags: ['frontend'],
        score: 1
    },
    {
        name: "jetbrains",
        icon: "devicon-jetbrains-plain",
        tags: ['dev'],
        score: 1
    },
    {
        name: "nextjs",
        icon: "devicon-nextjs-plain",
        tags: ['top', 'frontend'],
        score: 1
    },
    {
        name: "nodejs",
        label: "node.js",
        icon: "devicon-nodejs-plain",
        tags: ['top', 'backend', 'frontend'],
        score: 1
    },
    {
        name: "react",
        icon: "devicon-react-original",
        tags: ['top', 'frontend'],
        score: 1
    },
    {
        name: "redux",
        icon: "devicon-redux-original",
        tags: ['frontend'],
        score: 1
    },
    {
        name: "svelte",
        icon: "devicon-svelte-plain",
        tags: ['top', 'frontend'],
        score: 1
    },
    {
        name: "vitejs",
        icon: "devicon-vitejs-plain",
        tags: ['frontend'],
        score: 1
    },
    {
        name: "nodemon",
        icon: "devicon-nodemon-plain",
        tags: ['backend', 'dev'],
        score: 1
    },
    {
        name: "nestjs",
        icon: "devicon-nestjs-original",
        tags: ['top', 'backend'],
        score: 1
    },
    {
        name: "jasmine",
        icon: "devicon-jasmine-original",
        tags: ['testing'],
        score: 1
    },
    {
        name: "express",
        icon: "devicon-express-original",
        tags: ['top', 'backend'],
        score: 1
    },
    {
        name: "angularjs",
        icon: "devicon-angularjs-plain",
        tags: ['frontend'],
        score: 1
    },
    {
        name: "gatsby",
        icon: "devicon-gatsby-original",
        tags: ['frontend'],
        score: 1
    },
    {
        name: "jest",
        icon: "devicon-jest-plain",
        tags: ['testing'],
        score: 1
    },
    {
        name: "json",
        icon: "devicon-json-plain",
        tags: ['dev'],
        score: 1
    },
    {
        name: "amazonwebservices",
        label: "aws",
        icon: "devicon-amazonwebservices-line",
        tags: ['top', 'devops'],
        score: 1
    },
    {
        name: "cloudflare",
        icon: "devicon-cloudflare-plain",
        tags: ['devops'],
        score: 1
    },
    {
        name: "mysql",
        icon: "devicon-mysql-plain",
        tags: ['top', 'backend', 'dbb'],
        score: 1
    },
    {
        name: "postgresql",
        icon: "devicon-postgresql-plain",
        tags: ['backend', 'dbb'],
        score: 1
    },
    {
        name: "sqlite",
        icon: "devicon-sqlite-plain",
        tags: ['backend', 'dbb'],
        score: 1
    },
    {
        name: "dynamodb",
        icon: "devicon-dynamodb-plain",
        tags: ['backend', 'dbb'],
        score: 1
    },
    {
        name: "laravel",
        icon: "devicon-laravel-original",
        tags: ['top', 'backend'],
        score: 1
    },
    {
        name: "postman",
        icon: "devicon-postman-plain",
        tags: ['dev'],
        score: 1
    },
    {
        name: "prisma",
        icon: "devicon-prisma-original",
        tags: ['backend', 'dbb'],
        score: 1
    },
    {
        name: "vercel",
        icon: "devicon-vercel-original",
        tags: ['devops'],
        score: 1
    },
    {
        name: "tailwindcss",
        label: "tailwind",
        icon: "devicon-tailwindcss-plain",
        tags: ['top', 'frontend', 'css'],
        score: 1
    },
    {
        name: "swagger",
        icon: "devicon-swagger-plain",
        tags: ['dev'],
        score: 1
    },
    {
        name: "selenium",
        icon: "devicon-selenium-original",
        tags: ['testing'],
        score: 1
    },
    {
        name: "sass",
        icon: "devicon-sass-original",
        tags: ['frontend', 'css'],
        score: 1
    },
    {
        name: "redis",
        icon: "devicon-redis-plain",
        tags: ['backend', 'dbb'],
        score: 1
    },
    {
        name: "railway",
        icon: "devicon-railway-original",
        tags: ['devops'],
        score: 1
    },
    {
        name: "python",
        icon: "devicon-python-plain",
        tags: ['dev'],
        score: 1
    },
    {
        name: "php",
        icon: "devicon-php-plain",
        tags: ['backend'],
        score: 1
    },
    {
        name: "linux",
        icon: "devicon-linux-plain",
        tags: ['devops'],
        score: 1
    },
    {
        name: "kubernetes",
        icon: "devicon-kubernetes-plain",
        tags: ['devops'],
        score: 1
    },
    {
        name: "junit",
        icon: "devicon-junit-plain",
        tags: ['testing'],
        score: 1
    },
    {
        name: "html5",
        icon: "devicon-html5-plain",
        tags: ['dev'],
        score: 1
    },
    {
        name: "graphql",
        icon: "devicon-graphql-plain",
        tags: ['backend', 'frontend','graphql'],
        score: 1
    },
    {
        name: "googlecloud",
        label: "gcp",
        icon: "devicon-googlecloud-plain",
        tags: ['devops'],
        score: 1
    },
    {
        name: "gitlab",
        icon: "devicon-gitlab-plain",
        tags: ['devops'],
        score: 1
    },
    {
        name: "firebase",
        icon: "devicon-firebase-plain",
        tags: ['backend', 'dbb'],
        score: 1
    },
    {
        name: "eslint",
        icon: "devicon-eslint-plain",
        tags: ['dev'],
        score: 1
    },
    {
        name: "docker",
        icon: "devicon-docker-plain",
        tags: ['devops'],
        score: 1
    },
    {
        name: "digitalocean",
        icon: "devicon-digitalocean-original",
        tags: ['devops'],
        score: 1
    },
    {
        name: "cypressio",
        icon: "devicon-cypressio-plain",
        tags: ['testing'],
        score: 1
    },
    {
        name: "css3",
        icon: "devicon-css3-plain",
        tags: ['frontend', 'css'],
        score: 1
    },
    {
        name: "cloudflareworkers",
        label: "cf workers",
        icon: "devicon-cloudflareworkers-plain",
        tags: ['devops'],
        score: 1
    },
    {
        name: "axios",
        icon: "devicon-axios-plain",
        tags: ['frontend'],
        score: 1
    },
    {
        name: "less",
        icon: "devicon-less-plain-wordmark",
        tags: ['frontend', 'css'],
        score: 1
    },
    {
        name: "github",
        icon: "devicon-github-original",
        tags: ['devops'],
        score: 1
    }
]
