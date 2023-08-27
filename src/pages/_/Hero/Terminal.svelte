<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  let handleTerminal;
  function getHandleTerminal() {
    // lazy load the replies
    return handleTerminal || (handleTerminal = import('./handleTerminal'));
  }

  const ENTER_COMMAND_TEXT =
    'Enter command. Type help to see available commands';

  let logs = [ENTER_COMMAND_TEXT];
  let input;

  function handleKeyPress(event) {
    const obj = {
      ctrl: event.ctrlKey,
      key: event.key,
      input,
      value: input.value,
      dispatch,
      clear: () => (input.value = ''),
      clearLogs: (initialise) =>
        (logs = initialise ? [ENTER_COMMAND_TEXT] : []),
      reply: (text) => (logs = [...logs, text]),
    };
    getHandleTerminal().then((fn) => {
      fn.default(obj);
    });
  }
  function focusInput() {
    getHandleTerminal();
    input?.focus();
  }
</script>

<slot />

<!-- svelte-ignore a11y-click-events-have-key-events-->
<div on:click={focusInput}>
  {#each logs as log}
    <code>{@html log}</code>
  {/each}
  <code class="promptline"
    ><i class="prompt">{`=>`}</i>
    <input
      bind:this={input}
      on:keydown={handleKeyPress}
      class="input"
      type="email"
      autoCorrect="off"
      autoCapitalize="none"
    />
  </code>
</div>

<style>
  div {
    white-space: normal;
  }
  code {
    height: auto;
    margin-bottom: 0;
    display: flex;
    flex-direction: column;
    font-family: inherit;
  }

  .input {
    background: transparent;
    border: none;
    line-height: 1.25;
    color: #fff;
    flex: 1;
    box-shadow: none;
    font-family: inherit;
    font-size: inherit;
  }
  .input:focus {
    outline: none;
  }

  code {
    display: block;
  }

  .promptline {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .prompt {
    margin-right: 0.75rem;
    color: var(--green);
  }
</style>
