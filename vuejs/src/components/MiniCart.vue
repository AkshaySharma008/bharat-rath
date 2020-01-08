<template>
      <div 
        class="dropdown-menu p-2"
        style="min-width:320px;right:0;left:auto"
        aria-labelledby="triggerId">

      <div v-for="item in cart" :key="item.product.id">
          <div class="px-2 d-flex justify-content-between">
          <div>
          <strong>{{ item.product.title}}</strong>
          <br/>{{ item.quantity}}x ${{item.product.price}}
      </div>
      <div>  
         <!-- <a href="#" class="badge badge-secondary">remove</a> -->
         <!-- <strong>{{ cart }}</strong> -->
      </div>
      </div>
      <hr/>
      </div>
     <br />

    <div class="d-flex justify-content-between">
        <span>Total:${{ cartTotalPrice }}</span>
        <a href="#">Proceed</a>
    </div>
      </div>
</template>

<script>
export default {
  computed :{
    cart(){
      return this.$store.state.cart;
    },
    cartTotalPrice(){
      return this.$store.getters.cartTotalPrice;
    }
  },
  mounted(){
    this.$store.dispatch('getCartItems')
    // window.localStorage.setItem('id',this.$store.cart);
  }
    
};
</script>

<style scoped>

</style>