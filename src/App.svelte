<script>
  import { Router, Route } from "svelte-navigator";

  // route imports
  import Home from "./routes/Home/Home.svelte";
  import Dashboard from "./routes/Dashboard/Dashboard.svelte";
  import Tweets from "./routes/Tweets/Tweets.svelte";
  import About from "./routes/About/About.svelte";

  // component imports
  import NavBar from "./components/NavBar/NavBar.svelte";
  import Footer from "./components/Footer/Footer.svelte";
  import Project from "./routes/Project/Project.svelte";

  const url = "";
</script>

<Router {url}>
  <NavBar />
  <div class="container">
    <Route path="/" component={Home} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/project/:name" component={Project} />
    <Route path="/about" component={About} />
    <Route path="/tweets" component={Tweets} />
  </div>
  <Footer />
</Router>
