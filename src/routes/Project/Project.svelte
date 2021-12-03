<script lang="ts">
  import { useParams } from "svelte-navigator";
  import projects from "./project";

  let project;
  import { blur } from "svelte/transition";

  let projectName: string;

  const params = useParams();
  projectName = $params.name;

  project = projects.filter((p) => p.name === projectName)[0];

  const { name, description, link, image, technologies } = project;
</script>

<svelte:head>
  <title>Mwelwa Nkuta - {name}</title>
  <meta name="description" content={description} />
</svelte:head>

<main in:blur>
  <div class="info">
    <h1 class="title">{name}</h1>
    <p class="description">{description}</p>
    <a href={link} target="_blank" class="link">{link}</a>
  </div>

  <img src={`/projects/${image}`} alt="" class="image" />

  <div class="about-project-info">
    <h2 class="title">Technologies Used</h2>
    <ul>
      {#each technologies as technology (technology)}
        <li><p>{technology}</p></li>
      {/each}
    </ul>
  </div>
</main>

<style lang="scss">
  @import "./style.scss";
</style>
