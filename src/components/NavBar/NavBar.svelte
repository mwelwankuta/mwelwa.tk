<script lang="ts">
  import { onDestroy, onMount, tick } from "svelte";
  import { fade } from "svelte/transition";
  import { useLocation, links } from "svelte-navigator";

  let showNavImage: boolean = false;
  let pathname = "/";

  const location = useLocation();
  location.subscribe((data) => (pathname = data.pathname));

  onMount(() => {
    const handleScroll = (event: Event | any) => {
      const scrollY = event.path[1].scrollY;
      const showNavImageHeight = 125;

      if (scrollY >= showNavImageHeight && window.innerWidth <= 600)
        showNavImage = true;
      else showNavImage = false;
    };

    window.addEventListener<"scroll">("scroll", (event) => handleScroll(event));
  });

  onDestroy(() => {
    window.removeEventListener<"scroll">("scroll", (event) => event);
  });
</script>

<nav>
  <div class="nav-content">
    <div class="left-nav" use:links>
      <a href="/" class="nav-item" class:active={pathname === "/"}>Home</a>
      <a href="/about" class="nav-item" class:active={pathname === "/about"}
        >About</a
      >
      <a
        href="/dashboard"
        class="nav-item"
        class:active={pathname === "/dashboard"}>Dashboard</a
      >
      <a href="/tweets" class="nav-item" class:active={pathname === "/tweets"}
        >Tweets</a
      >
    </div>
    {#if showNavImage}
      <img src="/resources/mwelwa.png" alt="" transition:fade />
    {/if}
  </div>
</nav>

<style lang="scss">
  @import "./style.scss";
</style>
