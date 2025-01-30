<script lang="ts">
    import { slide } from "svelte/transition";

    export let projects: Array<{
        title: string;
        description: string;
        tools: Array<{
            name: string;
            icon: string;
        }>;
        technicalDetails: string[];
        url: string;
        site: string;
        image: string;
    }>;

    let expandedProject: string | null = null;

    function toggleProject(title: string) {
        expandedProject = expandedProject === title ? null : title;
    }
</script>

<svelte:head>
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
    />
</svelte:head>

<div class="section">
    <h2 class="gradient-text">Some of my work</h2>
    <div class="projects">
        {#each projects as project}
            <div class="project-accordion">
                <button
                    class="project-header"
                    class:expanded={expandedProject === project.title}
                    on:click={() => toggleProject(project.title)}
                >
                    <div class="header-content">
                        <h3 class="project-title">{project.title}</h3>
                        <div class="tools">
                            {#each project.tools as tool}
                                <i class={tool.icon} title={tool.name}></i>
                            {/each}
                        </div>
                    </div>
                    <i class="expand-icon">▼</i>
                </button>

                {#if expandedProject === project.title}
                    <div class="project-content" transition:slide>
                        <div class="project-image">
                            <img src={project.image} alt={project.title} />
                        </div>

                        <p class="project-description">{project.description}</p>

                        <div class="technical-details">
                            <h4>Technical Highlights:</h4>
                            <ul>
                                {#each project.technicalDetails as detail}
                                    <li>{detail}</li>
                                {/each}
                            </ul>
                        </div>

                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="project-link"
                        >
                            <span
                                >Go to the site <b><i>{project.site}</i></b
                                ></span
                            >
                        </a>
                    </div>
                {/if}
            </div>
        {/each}
    </div>
</div>

<style>
    .projects {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 1rem;
    }

    .project-accordion {
        background: var(--card-background);
        border-radius: 0.5rem;
        overflow: hidden;
        width: 100%;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .project-header {
        width: 100%;
        padding: 1rem 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: none;
        border: none;
        cursor: pointer;
        transition: background-color 0.2s ease;
    }

    .project-header:hover {
        background-color: var(--highlight);
    }

    .header-content {
        display: flex;
        align-items: center;
        gap: 1rem;
        flex: 1;
    }

    .project-title {
        margin: 0;
        font-size: 1.2rem;
        color: var(--text);
    }

    .tools {
        display: flex;
        gap: 0.5rem;
        align-items: center;
    }

    .tools i {
        font-size: 1.5rem;
        opacity: 0.8;
        transition: opacity 0.2s ease;
    }

    .tools i:hover {
        opacity: 1;
    }

    .expand-icon {
        font-size: 0.8rem;
        transition: transform 0.3s ease;
    }

    .expanded .expand-icon {
        transform: rotate(180deg);
    }

    .project-content {
        padding: 1.5rem;
        border-top: 1px solid var(--border);
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .project-image {
        width: 100%;
        height: 200px;
        border-radius: 0.5rem;
        overflow: hidden;
    }

    .project-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    .project-description {
        color: var(--text-secondary);
    }

    .technical-details h4 {
        color: var(--text);
        font-size: 1.1rem;
    }

    .technical-details ul {
        list-style-type: none;
        padding-left: 0;
    }

    .technical-details li {
        color: var(--text-secondary);
        margin: 0.5rem 0;
        padding-left: 1.5rem;
        position: relative;
    }

    .technical-details li::before {
        content: "•";
        position: absolute;
        left: 0;
        color: var(--accent);
    }

    .project-link {
        align-self: end;
        padding: 0.5rem 1rem;
        color: white;
        text-decoration: none;
        border-radius: 0.25rem;
        transition: all 0.3s ease;
        display: inline-block;
        margin-top: 1rem;
        color: var(--primary);
        text-decoration: none;
        font-weight: 500;
        transition: color 0.2s ease;
        width: max-content;
    }

    .project-link:hover {
        text-decoration: underline;
        /* font-weight: bold; */
        /* transform: translateY(-2px); */
    }
</style>
