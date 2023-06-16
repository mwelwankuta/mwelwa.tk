<script lang="ts">
  import { onMount } from "svelte";
  import ExperienceCard from "../../components/ExperienceCard/ExperienceCard.svelte";

  const experience = [
    {
      title: "Software Engineer",
      company: "Bwangu Solutions",
      companyUrl: "https://www.bwangudelivery.com/",
      date: "2022",
      actions:
        "Led development of cross platform web and mobile application, Ensure that all software products are always operational and meet industry standards, Act as a technical point of contact for the team",
      technologies: [
        "Backend with Node.js, Typescript and PHP",
        "Frontend with React.js & React Native",
        "MySQL for database",
        "Microsoft Azure",
      ],
    },
    {
      title: "Full Stack Developer Intern",
      company: "iSampo",
      companyUrl: "https://www.isampo.com/",
      date: "2021",
      actions:
        "learn't PHP server side rendering & created frontend mockups for iDelivery, a delivery service offerd by iSampo",
      technologies: [
        "Server Side Rendering with PHP",
        "Frontend with HTML & CSS",
        "MySQL for database",
      ],
    },
    {
      title: "Full Stack Developer Intern",
      company: "iSampo",
      companyUrl: "https://www.isampo.com/",
      date: "2021",
      actions:
        "learn't PHP server side rendering & created frontend mockups for iDelivery, a delivery service offerd by iSampo",
      technologies: [
        "Server Side Rendering with PHP",
        "Frontend with HTML & CSS",
        "MySQL for database",
      ],
    },
  ];

  // scroll to top
  onMount(() => window.scrollTo(0, 0));
</script>

<svelte:head>
  <title>About - Mwelwa Nkuta</title>
</svelte:head>

<main>
  <h1>About me</h1>
  <p class="about-myself">
    Hey, I am Mwelwa Nkuta, a high school student, full stack developer and
    co-founder of <span class="company">Locas Technologies</span>
    . I am currently building full stack web applications with Svelte, React and
    GraphQL.
  </p>

  <h2>Experience</h2>
  <div class="experience">
    {#each experience as exp (exp.companyUrl)}
      <ExperienceCard
        date={exp.date}
        company={exp.company}
        companyUrl={exp.companyUrl}
        actions={exp.actions}
        title={exp.title}
        technologies={exp.technologies}
      />
    {/each}
  </div>
</main>

<style lang="scss">
  @import "./style.scss";
</style>
