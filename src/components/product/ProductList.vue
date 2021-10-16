<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mb-5 card mt-5 shadow">
        <div class="card-body">
          <h3>Product List</h3>
          <hr />
          <table
            class="table table-hover table-striped table-bordered"
            v-if="products.length > 0"
          >
            <thead>
              <th>ID</th>
              <th>Product Name</th>
              <th>Count</th>
              <th>Price</th>
              <th>Description</th>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.id">
                <td class="align-middle text-center">
                  <span class="badge badge-info"> {{ product.id }} </span>
                </td>
                <td class="align-middle text-center">{{ product.title }}</td>
                <td class="align-middle text-center" :class="[product.count == 0 || product.count == null ? 'bg-danger text-white' : 'bg-success text-white']">
                  {{ product.count }}
                </td>
                <td style="width: 120px;">{{ product.price | currency }}</td>
                <td class="align-middle">{{ product.description }}</td>
              </tr>
            </tbody>
          </table>
          <div class="alert alert-warning" v-else>
            <strong>We can't find any saved product</strong>
            <br />
            <small
              >You can use 'Product Operations' menu to add new product</small
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: 
    mapGetters({
      products: "getProducts",
    }),
}
</script>

<style></style>
