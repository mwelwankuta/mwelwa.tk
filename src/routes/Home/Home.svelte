<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  // scroll to top
  onMount(() => window.scrollTo(0, 0));

  let currentLanguageAndFramework = { name: "React Native", color: "one" };
  let languagePos = 0;

  const languagesAndFrameworks = [
    { name: "React", color: "one" },
    { name: "Svelte", color: "two" },
    { name: "SvelteKit", color: "three" },
    { name: "Next.js", color: "five" },
    { name: "MongoDB", color: "six" },
    { name: "React Native", color: "one" },
    { name: "MySQL", color: "three" },
    { name: "Node.js", color: "three" },
    { name: "Flask", color: "five" },
    { name: "Apollo GraphQL", color: "two" },
    { name: "TypeScript", color: "one" },
    { name: "Docker", color: "three" },
    { name: "Amazon Web Services (AWS)", color: "two" },
    { name: "Microsoft Azure", color: "two" },
    { name: "Git", color: "six" },
    { name: "Vim", color: "three" },
    { name: "TailwindCSS", color: "four" },
    { name: "SCSS", color: "five" },
    { name: "GoLang", color: "six" },
    { name: "Python", color: "three" },
  ];

  onMount(() => {
    setInterval(() => {
      languagePos = (languagePos + 1) % languagesAndFrameworks.length;
      currentLanguageAndFramework = languagesAndFrameworks[languagePos];

      currentLanguageAndFramework = languagesAndFrameworks[languagePos];
    }, 1300);
  });
</script>

<svelte:head>
  <title>Home - Mwelwa Nkuta</title>
</svelte:head>

<header>
  <div class="left-home">
    <img src="/resources/mwelwa.jpeg" alt="" />
    <h1>Mwelwa Nkuta</h1>
    <p>
      I'am a passionate Full Stack Web & Mobile Developer with 2+ years of
      experience in development and maintenance software application. My current stack is :
      <span class="company">React.js</span>,
      <span class="company">React Native</span>,
      <span class="company">TypeScript</span>,
      <span class="company">GraphQL</span> and
      <span class="company">AWS</span>
    </p>
    <h2 class={`${currentLanguageAndFramework.color} language`} in:fade>
      {currentLanguageAndFramework.name}
    </h2>
  </div>

  <div class="right-home">
    <img src="/resources/mwelwa.jpeg" alt="" />
  </div>
</header>

<style lang="scss">
  @import "./style.scss";
</style>
