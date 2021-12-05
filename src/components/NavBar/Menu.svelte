<script>
  import { slide } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  import { links } from "svelte-navigator";

  const toggleMenu = () => dispatch("close-menu");
</script>

<ul use:links on:blur={toggleMenu} transition:slide>
  <li><a href="/" on:click={toggleMenu}>Home</a></li>
  <li><a href="/about" on:click={toggleMenu}>About</a></li>
  <li><a href="/dashboard" on:click={toggleMenu}>Dashboard</a></li>
  <li><a href="/tweets" on:click={toggleMenu}>Tweets</a></li>
</ul>

<style lang="scss">
  @import "../../variables.scss";

  ul {
    padding: 10px;
    top: 46px;
    background-color: white;
    position: fixed;
    z-index: 10;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid $grey-color;
    border-radius: 5px;
    list-style-type: none;
    width: 100%;

    li {
      width: 100%;
      margin-bottom: 10px;
      a {
        text-decoration: none;
        padding: 4px 8px;
        width: 100%;
        color: #333;
        &:hover {
          background-color: #f5f5f5;
          border-radius: 5px;
        }
      }
    }
  }
</style>
