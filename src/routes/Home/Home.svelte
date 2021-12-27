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
    { name: 'Gatsby', color: 'four' },
    { name: 'MongoDB', color: 'six' },
    { name: 'React Native', color: 'one' },
    { name: 'MySQL', color: 'three' },
    { name: 'Node.js', color: 'three' },
    { name: 'Flask', color: 'five' },
    { name: 'GraphQL', color: 'two' },
    { name: 'TypeScript', color: 'one' },
    { name: 'Docker', color: 'three' },
    { name: 'Google Cloud', color: 'two' },
    { name: 'Git', color: 'six' },
    { name: 'Vim', color: 'three' },
    { name: 'TailwindCSS', color: 'four' },
    { name: 'SCSS', color: 'five' },
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
      Full Stack Web and Mobile Developer who enjoys playing videos games, and learning new things.
      My favorite technologies are right now are: 
      <span class="company">React.js</span>,
<span class="company">TypeScript</span>,
<span class="company">GraphQL</span> and
<span class="company">MongoDB</span>
    </p>
    <h2 class={`${lang.color} language`} in:fade>{lang.name}</h2>
    
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
