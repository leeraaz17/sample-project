<template>
	<h1>Home</h1>	
</template>

<script>
	export default {
		activated() {
			alert("Home component activated.")
		},
		deactivated() {
			alert("Home component deactivated.")
		}
	}
</script>