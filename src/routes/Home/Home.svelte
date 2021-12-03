<script lang="ts">
  import { onMount } from "svelte";
  import ProjectCard from "../../components/ProjectCard/ProjectCard.svelte";
  import projects from "../Project/project";

  // scroll to top
  onMount(() => window.scrollTo(0, 0));
</script>

<svelte:head>
  <title>Home - Mwelwa Nkuta</title>
</svelte:head>

<header>
  <div class="left-home">
    <img src="/resources/mwelwa.png" alt="" />
    <h1>Mwelwa Nkuta</h1>
    <p>
      Full Stack Developer at <span class="company">Locas Technologies</span>
    </p>
    <ul>
      <li><a href="https://reactjs.org" target="_blank">React</a></li>
      <li><a href="https://svete.dev" target="_blank">Svelte</a></li>
      <li><a href="https://nodejs.org" target="_blank">Node.js</a></li>
      <li><a href="https://graphql.org" target="_blank">GraphQL</a></li>
      <li><a href="https://www.python.org" target="_blank">Python</a></li>
      <li><a href="https://javascript.com" target="_blank">Javascript</a></li>
    </ul>
    <button class="resume-btn">Download Resume</button>
  </div>

  <div class="right-home">
    <img src="/resources/mwelwa.png" alt="" />
  </div>
</header>
<main>
  <div class="projects-header">
    <h2>Projects</h2>
    <p>{projects.length} {projects.length === 1 ? "project" : "projects"}</p>
  </div>
  <div class="content">
    {#each projects as project (project.id)}
      <ProjectCard
        title={project.name}
        description={project.description}
        link={project.link}
      />
    {/each}
  </div>
</main>

<style lang="scss">
  @import "./style.scss";
</style>
