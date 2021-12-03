<script lang="ts">
  import { onMount } from "svelte";
  import github from "../../api/github";

  // component imports
  import DashboardCard from "../../components/DashboardCard/DashboardCard.svelte";
  import TrackItem from "../../components/TrackItem/TrackItem.svelte";

  // favorite tracks
  import favoriteTracks from "./tracks";

  let githubFollowers;
  let githubLink;

  // scroll to top
  onMount(async () => {
    const response = await github();
    githubFollowers = response.followers;
    githubLink = response.html_url;

    window.scrollTo(0, 0);
  });
</script>

<svelte:head>
  <title>Dashboard - Mwelwa Nkuta</title>
  <meta
    name="description"
    content="this is my personal dashboard to track all my metrics across platforms like twitter & github, here are some of my favourite tracks as well."
  />
</svelte:head>

<main>
  <h1>Dashboard</h1>
  <p>
    This is my personal dashboard to track my metrics across platforms like
    Twitter & GitHub
  </p>

  <div class="dashboard-content">
    <DashboardCard title="GitHub Followers" count={githubFollowers} link={githubLink} />
    <DashboardCard title="Twitter Followers" count={0} link="" />
    <DashboardCard title="GitHub Stars" count={0} link="" />
    <DashboardCard title="Start Repo Downloads" count={0} link="" />
  </div>

  <h2>Music</h2>
  <p>Here are some of my favorite tracks</p>

  <div class="track-list">
    {#each favoriteTracks as track (track.id)}
      <TrackItem
        title={track.title}
        artist={track.artist}
        link={track.link}
        index={track.id}
      />
    {/each}
  </div>
</main>

<style lang="scss">
  @import "./style.scss";
</style>
