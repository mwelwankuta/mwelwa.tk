<script>
  import { Route, Router } from "svelte-navigator";
  // route imports
  import About from "./routes/About/About.svelte";
  import Home from "./routes/Home/Home.svelte";
  // component imports
  import Footer from "./components/Footer/Footer.svelte";
  import NavBar from "./components/NavBar/NavBar.svelte";

  const url = "";
</script>

<Router {url}>
  <NavBar />
  <div class="container">
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
  </div>
  <Footer />
</Router>
