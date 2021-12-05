<script lang="ts">
  import Menu from "./Menu.svelte";
  import { onDestroy, onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { useLocation, links } from "svelte-navigator";

  let showNavImage: boolean = false;
  let pathname: string = "/";
  let showMenu: boolean = false;

  $: path = pathname.split("/")[1];

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

  const handleToggleMenu = () => {
    showMenu = !showMenu;
  };
</script>

{#if showMenu}
  <Menu on:close-menu={handleToggleMenu} />
{/if}
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
    <div class="mobile">
      <button class="menu-btn" on:click={handleToggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="menu-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <p class="page">
        {path == "" ? "Home" : path}
      </p>
    </div>
    {#if showNavImage}
      <img src="/resources/mwelwa.png" alt="" transition:fade />
    {/if}
  </div>
</nav>

<style lang="scss">
  @import "./style.scss";
</style>
