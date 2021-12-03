<script lang="ts">
  export let title = "";
  export let artist = "";
  export let link = "";
  export let index = 0;
</script>

<div class="track-item">
  <p>{index}</p>
  <div class="track-info">
    <h3 class="title">{title}</h3>
    <p class="artist">{artist}</p>
  </div>
  <a href={link} target="_blank" class="listen">Listen Now!</a>
</div>

<style lang="scss">
  @import "./style.scss";
</style>
