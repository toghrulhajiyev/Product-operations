<template>
  <div class="container">

    <div class="loading" :style="isLoading">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>

    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Product Operations</h3>
          <hr />
          <div class="form-group">
            <label>Product Name</label>
            <input
              type="text"
              class="form-control"
              v-model="product.title"
              placeholder="Enter product name"
            />
          </div>
          <div class="form-group">
            <label>Count</label>
            <input
              type="text"
              class="form-control"
              v-model="product.count"
              placeholder="Enter product count"
            />
          </div>
          <div class="form-group">
            <label>Price</label>
            <input
              type="text"
              class="form-control"
              v-model="product.price"
              placeholder="Enter product price"
            />
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea
              cols="30"
              rows="5"
              v-model="product.description"
              placeholder="Enter product description"
              class="form-control"
            ></textarea>
          </div>
          <hr />
          <button
            class="btn btn-primary"
            :disabled="saveEnabled"
            @click="saveProduct"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        title: "",
        count: null,
        price: null,
        description: "",
      },
      clicked: false,
    };
  },
  methods: {
    saveProduct() {
      this.$store.dispatch("saveProduct", this.product);
      this.clicked = true;
    },
  },
  computed: {
    saveEnabled() {
      if (this.product.title.length > 0 && this.product.count > 0 && this.product.price > 0 && this.product.description.length > 0) {
        return false;
      } else {
        return true;
      }
    },
    isLoading() {
      if(this.clicked) {
        return {
          display: 'block'
        }
      } else {
        return {
          display: 'none'
        }
      }
    }
  },
  beforeRouteLeave(to, from, next) {
    if ((this.product.title.length > 0 || this.product.count > 0 || this.product.price > 0 || this.product.description.length > 0) && !this.clicked) {
      if (confirm("You don't save your data. You will LOSE all unsaved changes. Are you sure?")) {
        next();
      } else {
        next(false);
      }
    } else {
      next();
    }
  },
};
</script>

<style></style>
