<script>

    import { push } from 'svelte-spa-router'
    import Button from '../lib/components/Button.svelte'
  
    function toHome() {
      push('/')
    }
  
</script>

<main>

    <h1>Результати</h1> 
    <p>Результати тесту</p>
    <Button text="На головну сторінку" onClick={toHome} />
 
</main>

<style>

    main {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 2rem;
      font-family: system-ui,  sans-serif;
    }
 
    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: #1e1b4b;
    }
 
    p {
      font-size: 1.2rem;
      color: #4b5563;
      margin-bottom: 2.5rem;
    }
  
</style>