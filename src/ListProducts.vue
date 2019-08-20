<template>
    <div>
        <h1>Product List</h1>
        <ul>
            <li v-for="product in products"> 
                {{ product.name }} ({{ product.price | currency }})
                <a href="#" @click.prevent="addToCart(product)">Add to cart </a>
            </li>
        </ul>
    </div>
</template>

<script>
    import RetriveProd from './mixins/retrieve-products';
    
    export default {
        mixins: [ RetriveProd ],
        created(){
           // alert("List product created")
        }
    }
</script>