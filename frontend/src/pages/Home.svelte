<script>
    import { push } from 'svelte-spa-router'
    import Button from "../lib/components/Button.svelte";
 
    function startTest() {
      push('/test')
    }
    
 </script>
 
 <main>
 
   <h1>TypeTest</h1>
 
   <p>Тренажер швидкості друку</p>
 
  <Button text="Почати тест друку" onClick={startTest} />
 
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
     font-size: 3.8rem;
     margin-bottom: 0.6rem;
     color: #1e1b4b;
     line-height: 1.2;
   }
 
   p {
     font-size: 1.4rem;
     color: #4b5563;
     margin-bottom: 3.5rem;
   }
 
 </style>