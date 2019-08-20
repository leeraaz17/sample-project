<template>
<div>
	<div class="article">
		<h1>{{ title }}</h1>
	</div>
	<p>Published on : {{ published }} </p>
	<p> Shares : {{ shares }} </p>
	<p class="lead"> {{ description }} </p>

	<appAuthor :author="author"></appAuthor>
	<appSocialSharing :article="$data" ></appSocialSharing>
</div>
</template>

<script>
	import Author from './Author.vue';
	import Social from './Social.vue';

	export default {
		data () {
			return {
				title: 'What can I do?',
				published: new Date(),
				description: 'Yeah kuch nahi karna bas yuhi bethey raihana.',
				author: {
					firstName: 'Liraj',
					lastName: 'Maharjan'
				},
				shares: 0
			};
		},
		components: {
			appAuthor: Author,
			appSocialSharing: Social
		},
		methods: {
			shared: function(message, event) {
				this.shares++;
				console.log(message);
				console.log(event)
			}
		}
	}
</script>