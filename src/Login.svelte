<style>
	section {
		background: rgb(235, 235, 235);
		padding: 20px;
	}
	button {
		margin-top: 10px;
	}
</style>

<script>
	import { auth, googleProvider } from './firebase';
	import { authState } from 'rxfire/auth';
	import Profile from './Profile.svelte';
	import Todos from './Todos.svelte';

	let user = authState(auth);

	// const unsubscribe = authState(auth).subscribe((u) => (user = u));

	async function login() {
		try {
			await auth.signInWithPopup(googleProvider);
		} catch (error) {
			console.error(error);
		}
	}
</script>

<section>
	{#if $user}
		<Profile {...$user} />
		<button on:click={() => auth.signOut()}>Logout</button>
		<hr />
		<Todos uid={$user.uid} />
	{:else}
		<button on:click={login} class="button"> Signin with Google </button>
	{/if}
</section>
