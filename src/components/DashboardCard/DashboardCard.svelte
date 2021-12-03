<script lang="ts">
  import {blur} from 'svelte/transition'
  export let title = "Hello World";
  export let count = 0
  export let link = "";
</script>

<div class="dashboard-card">
  <div class="header">
    <p class="title">{title}</p>
    {#if link.length > 0}
      <a href={link}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="link-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </a>
    {/if}
  </div>
  <h2 class="count" in:blur={{delay:500}}>{count}</h2>
</div>

<style lang="scss">
  @import "./style.scss";
</style>
