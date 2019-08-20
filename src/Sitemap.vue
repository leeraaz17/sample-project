<template>
    <div>
        <h1>Sitemap</h1>
        <ul>
            <li>Home</li>
            <li>Products
                <ul>
                    <li v-for="product in products"> {{ product.name }}</li>
                </ul>
            </li>
            <li>Contact</li>
        </ul>
    </div>
</template>

<script>
    import RetriveProd from './mixins/retrieve-products';
    
    export default {
        mixins: [ RetriveProd ]
    }
</script>