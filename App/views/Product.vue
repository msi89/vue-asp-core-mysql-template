<template>
    <div>
       <div class="alert alert-danger" v-if="errored">
            <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
       </div>

        <h2>Products</h2>
        <div class="table-responsive">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>name</th>
                  <th>category</th>
                  <th>price</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="loading">
                  <td colspan="4" align="center">Loading...</td>
                </tr>
                <tr v-else v-for="(product,id) in products" :key="id">
                  <td>{{ product.id }}</td>
                  <td>{{ product.name }}</td>
                  <td>{{ product.category }}</td>
                  <td>{{ product.price }}</td>
                </tr>
              </tbody>
            </table>
          </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      products: null,
      loading: true,
      errored: false
    };
  },
  mounted() {
    axios
      .get("api/Products/GetAllProducts")
      .then(response => {
        this.products = response.data;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>