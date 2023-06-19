<script lang="ts">
  import { directus } from "./directus";
  import { auth } from "./store";

  //check for authentication from store which gets set in hooks.client.ts
  let authenticated:boolean;
  auth.subscribe((value) => {
    authenticated = value;
  });

  let email = '';
  let password = '';

  let loginResult:string = 'login result pending';

  async function login() {  
    await directus.auth
      .login({ email, password })
      .then(() => {
        auth.update((value) => (value = true));
        loginResult = 'success';
        })
      .catch(() => {
        loginResult = 'failed';
      });
  }

  
</script>


<div class="container mx-auto text-center my-10 md:my-20">
  <h1 class="text-5xl">SvelteKit & Directus authentication example</h1>
  <p class="my-5">Visit <a href="https://kit.svelte.dev" class="underline">Github</a> for the full repository</p>

  <form class="text-start md:w-4/12 mx-auto bg-slate-100 rounded-md px-10 pt-5 pb-10 my-10">
    <h2 class="text-center mb-5 text-3xl">Login</h2>
    <fieldset class="mb-3">
      <label for="email" class="block">Your e-mail</label>
      <input type="email" name="email" id="email" placeholder="name@domain.com" bind:value={email} class="border p-2 w-full">
    </fieldset>
    <fieldset class="mb-3"> 
      <label for="password" class="block">Password</label>
      <input type="password" name="password" id="password" bind:value={password} class="border p-2 w-full"/>
    </fieldset>
    <br>
    <button on:click={login} class="bg-indigo-600 text-white rounded-md px-10 py-3 text-center w-full">Login</button>
    <br>
    <div class="notice w-full pt-5 text-center">{loginResult}</div>
  </form>

  <div class="">
    User is authenticated: <i>{authenticated}</i>
  </div>
</div>