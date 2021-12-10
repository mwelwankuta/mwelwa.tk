<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import ProjectCard from '../../components/ProjectCard/ProjectCard.svelte';
  import projects from '../Project/project';

  // scroll to top
  onMount(() => window.scrollTo(0, 0));

  let lang = { name: 'React', color: 'one' };
  let languagePos = 0;

  const languages = [
    { name: 'React', color: 'one' },
    { name: 'Svelte', color: 'two' },
    { name: 'SvelteKit', color: 'three' },
    { name: 'Next.js', color: 'five' },
    { name: 'Git', color: 'six' },
    { name: 'Gatsby', color: 'four' },
    { name: 'Node.js', color: 'six' },
    { name: 'Vim', color: 'one' },
    { name: 'GraphQL', color: 'two' },
    { name: 'Docker', color: 'three' },
    { name: 'Google Cloud', color: 'two' },
    { name: 'Flask', color: 'five' },
  ];

  onMount(() => {
    setInterval(() => {
      languagePos = (languagePos + 1) % languages.length;
      lang = languages[languagePos];

      lang = languages[languagePos];
    }, 1200);
  });
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
      and Future Stack Developer at <span class="company">BongoHive</span>
    </p>
    <h2 class={`${lang.color} language`} in:fade>{lang.name}</h2>
    <button class="resume-btn">Download Resume</button>
  </div>

  <div class="right-home">
    <img src="/resources/mwelwa.png" alt="" />
  </div>
</header>
<main>
  <div class="projects-header">
    <h2>Projects</h2>
    <p>{projects.length} {projects.length === 1 ? 'project' : 'projects'}</p>
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
  @import './style.scss';
</style>
