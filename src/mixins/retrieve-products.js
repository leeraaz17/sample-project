export default{
	data(){
		return {
			products: []
		};
	},
	created() {
		//alert("Retrieving products...");
		this.products = this.getProductList();
	},
	methods: {
		getProductList() {
			return [
				{ name: 'Personal', price: 9.95},
				{ name: 'Startup', price: 99.00},
				{ name: 'Enterprise', price: 199.00}
			];
		}
	}
};