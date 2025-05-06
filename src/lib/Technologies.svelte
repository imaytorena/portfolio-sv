<script lang="ts">
    import {onMount} from "svelte";

    type Technologies = Array<{
        name: string;
        label?: string;
        icon: string;
        tags: string[];
        score: number;
    }>
    export let technologies: Technologies;
    let filter = ""
    let filtered: Technologies = [];

    const filterChanged = (f: string) => {
        filter = f.toLowerCase();
        if (f === "all") {
            filtered = technologies
        } else {
            filtered = technologies.filter(i => i.tags.includes(!!f ? f : "top"))
        }
    }

    onMount(() => {
        filterChanged("");
    })
</script>

<div class="section" style="position: relative; display: flex; flex-direction: column; gap: 2rem">
    <h2 class="gradient-text">Technologies I'm proficient</h2>
    <div class="filters">
        {#each [{title: 'Favs ✨', filter: "top"}, {title: 'Frontend', filter: "frontend"}, {
            title: 'Backend',
            filter: "backend"
        }, {title: 'DevOps', filter: "devops"}, {title: 'Databases', filter: "dbb"}, {
            title: 'CSS',
            filter: "css"
        }, {title: "All", filter: "all"}] as f}
            <button class={`filter_button ${filter === f.filter || (!filter && f.filter === "top") ? "filter_button-selected" : ""}`}
                    on:click={() => filterChanged(f.filter)}>{f.title}</button>
        {/each}
    </div>

    <div class="technologies">
        {#each filtered as t, i}
            <div class="tech">
                <i id={t.name} style="--color:{ i%3 === 0 ? '#9AC184' : i%3 === 1  ? '#8FBC8F': '#76a376'}"
                   class={t.icon} title={t.name}></i>
                <label for={t.name}
                       style="--color:{ i%3 === 0 ? '#9AC184' : i%3 === 1  ? '#8FBC8F': '#76a376'}">{t.label ? t.label.toUpperCase() : t.name.toUpperCase()}</label>
            </div>
        {/each}
    </div>
</div>

<style>
    .technologies {
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 1rem;
        flex-wrap: wrap;
    }

    .tech {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        width: 150px;
        height: 150px;
    }

    .tech label {
        color: var(--color);
        font-size: .8rem;
    }

    .tech i {
        color: var(--color);
        font-size: 5rem;
    }

    .filters {
        display: flex;
        gap: 1rem;
        align-self: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    .filter_button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        cursor: pointer;

        padding: 1rem 1.5rem;

        background-color: snow;
        border-radius: 1rem;
        border: 1px solid var(--primary);
        color: var(--primary);

        font-weight: bold;
        font-size: .8rem;
    }

    .filter_button-selected {
        background-color: var(--primary);
        color: snow;
    }
</style>