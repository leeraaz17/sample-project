<template>
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">E-commerce Inc.</a>
            </div>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="nav navbar-nav">
                    <li class="nav-item active"><a class="nav-link" href="#" @click.prevent="activeView = 'appProductList'">Product List</a></li>
                    <li class="nav-item active"><a class="nav-link" href="#" @click.prevent="activeView = 'appSitemap'">Sitemap</a></li>
                </ul>
            </div>
          </div>
        </nav>

        <component :is="activeView"></component>
    </div>
</template>

<script>
  import ListProducts from './ListProducts.vue';
  import Sitemap from './Sitemap.vue';

  export default {
      data() {
          return {
              activeView: 'appProductList'
          };
      },
      components: {
          appProductList: ListProducts,
          appSitemap: Sitemap
      }
  }
</script>



















<!--
<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
      <announcement></announcement>
        <appArticle></appArticle>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<template>
  <div>
   <nav class="navbar navbar-expand navbar-static-top">
   <div class="container">
    -------------------------Brand/logo ----------------------------------------
    <a class="navbar-brand" href="#">Project Name</a>
    
     ------------------------------Links -----------------------------------------
    <ul class="navbar-nav navbar-collaspe">
      <li class="nav-item">
        <a class="nav-link" href="#" @click.prevent="activeView = 'appHome'">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" @click.prevent="activeView = 'appAbout'">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" @click.prevent="activeView = 'appContact'">Contact</a>
      </li>
    </ul>
    </div>
</nav>

    <div class="container">
      <div class="jumbotron">
        <keep-alive>
        <component :is="activeView"></component>
        </keep-alive>

      </div>
    </div>  
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeView: 'appHome'
    }
  }
} 
</script>
-->