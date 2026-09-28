<script>

import Router from 'svelte-spa-router'
import Home from './pages/Home.svelte'
import Test from './pages/Test.svelte'
import Result from './pages/Result.svelte'

const routes = {
  '/': Home,
  '/test': Test,
  '/result': Result,
}

</script>

<Router {routes} />