<script>

  export let text = 'Завантаження тексту'
  export let userInput = ''

</script>

<div class="text-display">
  
  {#each text.split('') as char , i}
    <span
      class:correct={userInput[i] === char}
      class:incorrect={userInput[i] && userInput[i] !== char}
      class:current={i === userInput.length}
    >
     
      {char}
    </span>    
  {/each}

</div>

<style>

  .text-display {
    font-size: 1.5rem;
    line-height: 1.7;
    max-width: 700px;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.35);
    backdrop-filter: blur(8px);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    text-align: left;
    letter-spacing: 0.3px;
  }

  span {
    transition: all 0.1s;
  }

  .correct {
    color: #16a34a;
  }

  .incorrect {
    color: #dc2626;
  }

  .current {
    background: rgba(79,70,229,0.2);
    border-radius: 3px;
  }

</style>