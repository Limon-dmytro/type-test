<script>

  export let text = 'Кнопка'
  export let onClick = () => {}

</script>

<button on:click={onClick}>
  {text}
</button>

<style>

  button {
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.4);
    color: #1e1e1e;
    padding: 1.1rem 2.8rem;
    font-size: 1.25rem;
    font-weight: 500;
    border-radius: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  }

  button:hover {
    background: rgba(255, 255, 255, 0.4);
    border-radius: 22px;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  }

</style>