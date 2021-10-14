<template>
  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #563F7A">

    <router-link to="/" class="navbar-brand" tag='a' exact>Product List</router-link>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">

        <router-link active-class="active" to="/ProductPurchase" tag='li' class="nav-item">
          <a class="nav-link">Product Operation</a>
        </router-link>

        <router-link active-class="active" to="/ProductSell" tag='li' class="nav-item">
          <a class="nav-link">Product Exit</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>
