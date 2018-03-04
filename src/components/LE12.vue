<template>
  <div class="le12">
    <h2>Lession 12</h2>
    <div>
      <div class="content">
        <h2>Parent child communication</h2>
        <coupon @applied="onCouponApplied"></coupon>
        <h1 v-if="couponApplied">You used a coupon!</h1>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'



  const Coupon = Vue.component('coupon', {
    template: '<input placeholder="Enter our coupon code" @blur="onCouponApplied">',
    methods: {
        onCouponApplied() {
            this.$emit('applied')
        }
    }
  })

  export default {
    name: 'le12',
    data() {
      return {
        couponApplied: false
      }
    },
    methods: {
      onCouponApplied() {
        this.couponApplied = true
      }
    },
    components: {
      Coupon
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  
  h2 {
  
    font-weight: normal;
  
  }
  
  
  
  ul {
  
    list-style-type: none;
  
    padding: 0;
  
  }
  
  
  
  li {
  
    display: block;
  
    margin: 0 10px;
  
  }
  
  
  
  a {
  
    color: #42b983;
  
  }
  
  
  
  .color-red {
  
    color: red;
  
  }
  
  
  
  .is-loading {
  
    background: red;
  
  }
</style>
