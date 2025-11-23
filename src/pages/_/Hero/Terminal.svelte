<script lang="ts">
import type { Snippet } from 'svelte';

interface Props {
  children?: Snippet;
  onTerminalEvent: (event: string) => void;
}

const { children, onTerminalEvent }: Props = $props();
let handleTerminal: Promise<typeof import('./handleTerminal')> | undefined;
function getHandleTerminal() {
  if (!handleTerminal) {
    handleTerminal = import('./handleTerminal');
  }
  return handleTerminal;
}

const ENTER_COMMAND_TEXT = 'Enter command. Type help to see available commands';

let logs = $state<string[]>([ENTER_COMMAND_TEXT]);
let input: HTMLInputElement;

function handleKeyPress(event: KeyboardEvent) {
  const obj = {
    ctrl: event.ctrlKey,
    key: event.key,
    input,
    value: input.value,
    dispatch: onTerminalEvent,
    clear: () => {
      input.value = '';
    },
    clearLogs: (initialise?: boolean) => {
      logs = initialise ? [ENTER_COMMAND_TEXT] : [];
    },
    reply: (text: string) => {
      logs = [...logs, text];
    },
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

{@render children?.()}

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
