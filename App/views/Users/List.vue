<template>
    <div class="row">
        <div v-if="errored" class="alert alert-danger col-sm-12">{{ errorMsg }}</div>
         <div class="col-sm-12" style="margin-bottom: 10px">
            <div class="row">
                    <div class="col-sm-3">
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <router-link to="/users/create" class="btn btn-secondary">Create New</router-link>
                            <router-link id="btn_del" to="#" class="btn btn-success">Delete</router-link>
                        </div>
                    </div>
                    <div class="col-sm-6">

                    </div>
                    <div class="col-sm-3">
                        <form  method="post" class="form-horizontal" role="form">
                            <div class="input-group">                      
                                <input name="searchString" type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon2">
                                <div class="input-group-prepend">
                                <div class="input-group-text" id="btnGroupAddon2">  <span data-feather="search"></span></div>
                                </div>
                            </div>
                    </form>
                    </div>
            </div>
         </div>
  <div class="col-sm-12 table-responsive-sm">
       
            <table class="table table-hover">
                <thead>
                    <tr>
                       <td v-if="users.length > 0"><input id="chk_all" type="checkbox"></td>
                        <th scope="col">Id</th>
                        <th scope="col">Fisrtname</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    
                                <tr v-if="users.length > 0" v-for="(item,i) in users" :key="i">
                                    <td><input type="checkbox" class="chk" :data-value="item.id"></td>
                                    <td>{{ item.id }}</td>
                                    <td>{{ item.fullname }}</td>
                                    <td>{{ item.uid }}</td>
                                    <td>{{ item.email }}</td>
                                    <td>{{ item.created }}</td>
                                </tr>
                          
                            <tr v-else><td colspan="5" align="center">No data found</td></tr>
                       
                   
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
      users: [],
      loading: true,
      errored: false,
      errorMsg: ""
    };
  },
  mounted() {
    axios
      .get("api/Users/Get")
      .then(response => {
        this.users = response.data;
      })
      .catch(error => {
        console.log(error);
        this.errorMsg = "Can't connect to local MySQL server";
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>