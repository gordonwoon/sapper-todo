<script>
  import { goto } from '@sapper/app';

  let user = { username: '', password: '' };
  let inProgress = false;
  let error = null;

  async function submit() {
    try {
      inProgress = true;
      console.log('send a request to create the user');
      inProgress = false;
      error = null;
      user = { username: '', password: '' };
      goto('/');
    } catch (err) {
      error = err.response.data.message;
      inProgress = false;
    }
  }
</script>

<svelte:head>
  <title>Sign up</title>
</svelte:head>

<form class="signup-form" on:submit|preventDefault={submit}>
  {#if error}<span class="error-message"> {error} </span>{/if}
  <input
    class="text-input username-input"
    bind:value={user.username}
    type="text"
    placeholder="username"
    required />
  <input
    class="text-input password-input"
    bind:value={user.password}
    type="password"
    placeholder="password"
    required />
  <button class="signup-button primary-button" disabled={inProgress}>
    SIGN UP
  </button>
</form>
