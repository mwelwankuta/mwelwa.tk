<script lang="ts">
  import { links } from "svelte-navigator";
</script>

<footer>
  <div class="footer-content">
    <div class="first-col" use:links>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </div>
    <div class="second-col">
      <a href="https://github.com/mwelwankuta" target="_blank">GitHub</a>
      <a href="https://linkedin.com/in/mwelwa" target="_blank">LinkedIn</a>
    </div>
    <div class="third-col">
      <a href="https://instagram.com/mwelwa_nkuta/" target="_blank">Instagram</a
      >
      <a href="https://dev.to/mwelwankuta" target="_blank">Dev.to</a>
    </div>
  </div>
  <p class="copyright">Copyright &copy; {new Date().getFullYear()} Mwelwa Nkuta</p>
</footer>

<style lang="scss">
  @import "./style.scss";
</style>
