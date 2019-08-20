import Vue from 'vue'
import App from './App.vue'

Vue.filter('currency', function(value) {
	let formatter = new Intl.NumberFormat('en-US',{
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 0
	});

	return formatter.format(value)
});

new Vue({
	el: '#app',
	render: h => h(App)
});

/*f
import Announcement from './Announcement.vue';
import Article from './Article.vue';
import Home from './Home.vue'
import About from './About.vue'
import Contact from './Contact.vue'

Vue.component('appHome', Home);
Vue.component('appContact', Contact);
Vue.component('appAbout', About);

export const eventBus = new Vue();

Vue.component('announcement', Announcement)
Vue.component('appArticle', Article)

new Vue({
  el: '#app',
  render: h => h(App)	 n  
})
*/