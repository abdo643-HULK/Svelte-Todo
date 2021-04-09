<style>
	div {
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
		align-items: center;
	}
</style>

<script>
	export let displayName = '';
	export let photoURL = '';
	// export let uid = '';
</script>

<div>
	<h3>Hi {displayName}!</h3>
	<img src={photoURL} alt="user avatar" width="100" />
</div>
<!-- <p>Your userId is {uid}</p> -->
