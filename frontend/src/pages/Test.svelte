<script>

  import { push } from 'svelte-spa-router'
  import Button from '../lib/components/Button.svelte'

  function finishTesting() {
    push('/result')
  }

</script>

<main>

   <h1>Сторінка тесту</h1> 
   <p>Тренажер для друку</p>
   <Button text="Завершити тест" onClick={finishTesting} />

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