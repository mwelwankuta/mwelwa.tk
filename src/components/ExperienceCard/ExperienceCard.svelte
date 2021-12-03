<script lang="ts">
  export let date: string = "";
  export let company: string = "";
  export let companyUrl: string = "";
  export let technologies: string[];
  export let title: string = "";
  export let actions: string = "";
</script>

<div class="experience-card">
  <div class="experience-head">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="check-icon"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
      />
    </svg>
    <h3>
      {date} - <span class="role">{title}</span>
      <a class="link" target="_blank" href={companyUrl}>@{company}</a>
    </h3>
  </div>
  <p class="about-role">{actions}</p>
  <ul class="technologies-used">
    {#each technologies as tech}
      <li class="technology">{tech}</li>
    {/each}
  </ul>
</div>

<style lang="scss">
  @import "style.scss";
</style>
