<script lang="ts">
  import {slide} from 'svelte/transition'
  import { link as Link } from "svelte-navigator";
  export let title = "";
  export let description = "";
  export let link = "";
</script>

<div class="project-card" in:slide>
  <h2 class="title">{title}</h2>
  <p class="description">{description}</p>
  <div class="actions">
    <a class="visit" href={link} target="_blank">Visit</a>
    <a class="visit outline" use:Link href={`/project/${title}`}>Read more</a>
  </div>
</div>

<style lang="scss">
  @import "./style.scss";
</style>
