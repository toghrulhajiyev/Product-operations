<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Product Exit</h3>
          <hr />
          <div class="form-group">
            <label>Product Name</label>
            <select class="form-control" v-model="selectedProduct" @change="selectProduct">
              <option
                v-for="product in products"
                :value="product.id"
                :key="product.id"
                :disabled="disableProduct(product.count)"
                >{{ product.title }}</option
              >
            </select>
          </div>
          <div class="card mb-2 border border-danger" v-if="selectedProduct != null">
            <div class="card-body">
              <div class="row">
                <div class="col-12 text-center">
                  <div class="mb-3">
                    <span class="badge badge-info">Stock : {{ product.count }}</span>
                    <span class="badge badge-primary">Price : {{ product.price }}</span>
                  </div>
                  <p class="border border-warning p-2 text-secondary">{{ product.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label>Count</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter product count"
              v-model="productCount"
            />
          </div>
          <hr />
          <button class="btn btn-primary" @click="sellProduct">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      selectedProduct: null,
      product: null,
      productCount: null
    };
  },
  computed: mapGetters({
    products: "getProducts",
  }),
  methods: {
      selectProduct() {
          this.product = this.$store.getters.getProduct(this.selectedProduct)[0];
      },
      disableProduct(count) {
          if(count == 0 || count == null) {
              return true;
          } else {
              return false;
          }
      },
      sellProduct() {
          let product = {
              id: this.selectedProduct,
              count: this.productCount
          }

          this.$store.dispatch('sellProduct', product);
      }
  },
};
</script>

<style></style>