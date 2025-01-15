<script lang="ts">
    export let projects: Array<{
        title: string;
        description: string;
        tools?: string[];
        url: string;
        site: string;
        image: string;
    }>;
</script>

<div class="section">
    <h2 class="gradient-text">Some of my work</h2>
    <div class="projects">
        {#each projects as project}
            <div class="project-card">
                <div class="project-card-info">
                    <div class="project-image">
                        <img src={project.image} alt={project.title}/>
                    </div>
                    <h3 class="project-title">{project.title}</h3>
                    <p class="project-description">{project.description}</p>
                    {#if (project?.tools ?? null)}
                        <span style="font-size: .9rem;font-weight: bold">Made with</span>
                        <div class="tools">
                            {#each project.tools as tool}
                                <div class="tool">
                                    {tool}
                                </div>
                            {/each}
                        </div>
                    {/if}
                </div>

                <a href={project.url} target="_blank" rel="noopener noreferrer" class="project-link">
                    <span>Go to the site <b><i>{project.site}</i></b></span>
                </a>
            </div>
        {/each}
    </div>
</div>

<style>
    h2 {
        font-size: 2rem;
        margin-bottom: 2rem;
    }

    .project-image {
        width: 100%;
        height: 200px;
        margin-bottom: 1rem;
        border-radius: 0.5rem;
        overflow: hidden;

    }

    .project-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    .project-card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .project-card:hover .project-image img {
        transform: scale(1.05);
    }

    .tools {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 4px 8px;
        margin: 20px 0;
        margin-top: 5px;
    }

    .tool {
        font-size: .8rem;
        width: max-content;
        padding: 1px 5px;
        background: var(--highlight);
        color: var(--text);
        border-radius: 5px;
    }
</style>