<template>
<div>
	<p> Wrtten by {{ author.firstName }} {{ author.lastName }} </p>
</div>
</template>

<script>
	import { eventBus } from './main'

	export default {
		props: {
			author: Object,
			required: true
		},
		created() {
			eventBus.$on('articleWasShared', (data) => {
				alert("Someone shared an article on " + data.media +  ".")
			});
		} 
	}
</script> 